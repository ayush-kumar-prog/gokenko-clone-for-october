#!/usr/bin/env node
/**
 * Restart `next dev` inside the existing Daytona sandbox using a true
 * detached session so the child survives the executeCommand RPC returning.
 *
 * Uses setsid to create a new session, redirects all I/O away from the
 * parent shell, and uses nohup as belt-and-suspenders.
 */
import dotenv from "dotenv";
import { Daytona } from "@daytonaio/sdk";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") });

const daytona = new Daytona({ apiKey: process.env.DAYTONA_API_KEY });
const sandboxId = process.argv[2] || "8352a601-b441-4252-97f5-ca3ff803f1f6";

const sb = await daytona.get(sandboxId);
console.log(`sandbox ${sb.id} state=${sb.state}`);
if (sb.state !== "started" && sb.state !== "running") {
  console.log("starting sandbox…");
  await sb.start(120);
}

const repoDir = "/home/daytona/repo";

async function run(cmd, timeout = 20) {
  const r = await sb.process.executeCommand(cmd, undefined, undefined, timeout);
  return r;
}

// Kill any prior dev server
await run(`pkill -f 'next dev' 2>/dev/null; pkill -f 'next-server' 2>/dev/null; sleep 1; echo killed`);

// Start dev with proper detachment: setsid creates a new session,
// redirect stdin/out/err away, run in background with nohup
console.log("starting next dev with setsid…");
const startCmd = `cd ${repoDir} && setsid bash -c 'nohup npx next dev -H 0.0.0.0 -p 3000 </dev/null >/tmp/next.log 2>&1 &' && sleep 1 && echo OK`;
const start = await run(startCmd, 30);
console.log("start exit:", start.exitCode, "result:", start.result?.trim());

// Wait for port 3000 to actually listen + serve 200
for (let i = 0; i < 30; i++) {
  await new Promise((r) => setTimeout(r, 4000));
  const probe = await run(
    `curl -sS -o /dev/null -w '%{http_code}' --max-time 8 http://localhost:3000/ 2>/dev/null || echo 000`,
    12,
  );
  const code = (probe.result || "").trim();
  console.log(`probe ${i + 1}/30 code=${code}`);
  if (code === "200") {
    console.log("\n✓ dev server READY");
    process.exit(0);
  }
}

const log = await run(`tail -120 /tmp/next.log 2>&1`, 8);
console.error("\n✗ dev server failed to come up. log:\n" + log.result);
process.exit(1);
