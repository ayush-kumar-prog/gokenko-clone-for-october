#!/usr/bin/env node
/* Refresh the specific Daytona sandbox iframed by the active canvas. */
import dotenv from "dotenv";
import { Daytona } from "@daytonaio/sdk";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") });

const SANDBOX_ID = "41dc6a4c-a0df-4a94-9e56-ef2ffe3b4b9d";
const REPO_DIR = "/home/daytona/repo";

const daytona = new Daytona({ apiKey: process.env.DAYTONA_API_KEY });

const sb = await daytona.get(SANDBOX_ID);
console.log(`sandbox ${sb.id} state=${sb.state}`);
if (sb.state !== "started" && sb.state !== "running") {
  console.log("starting…");
  await sb.start(120);
}

console.log("git pull…");
const pull = await sb.process.executeCommand(
  `cd ${REPO_DIR} && git fetch origin main && git reset --hard origin/main 2>&1`,
  undefined, undefined, 60,
);
console.log(`pull exit=${pull.exitCode}\n${pull.result?.slice(-400)}`);

console.log("npm ci…");
const inst = await sb.process.executeCommand(
  `cd ${REPO_DIR} && (npm ci --no-audit --no-fund 2>&1 || npm install --no-audit --no-fund 2>&1) | tail -20`,
  undefined, undefined, 300,
);
console.log(`install exit=${inst.exitCode}\n${inst.result?.slice(-400)}`);

console.log("kill old next dev…");
await sb.process.executeCommand(
  `pkill -f "next dev" 2>/dev/null; pkill -f "next-server" 2>/dev/null; sleep 2; true`,
  undefined, undefined, 10,
);

console.log("start fresh next dev…");
const start = await sb.process.executeCommand(
  `cd ${REPO_DIR} && nohup env PORT=3000 HOSTNAME=0.0.0.0 npx next dev -H 0.0.0.0 -p 3000 > /tmp/next.log 2>&1 & echo $!`,
  undefined, undefined, 20,
);
console.log(`pid=${start.result?.trim()}`);

for (let i = 0; i < 30; i++) {
  await new Promise((r) => setTimeout(r, 4000));
  const probe = await sb.process.executeCommand(
    `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/paywall/stage 2>/dev/null || echo 000`,
    undefined, undefined, 8,
  );
  const code = probe.result?.trim();
  console.log(`probe ${i + 1}/30 /paywall/stage code=${code}`);
  if (code === "200") {
    console.log("READY");
    process.exit(0);
  }
}

const log = await sb.process.executeCommand(`tail -120 /tmp/next.log`, undefined, undefined, 8);
console.error(`dev server didn't reach 200. log:\n${log.result}`);
process.exit(1);
