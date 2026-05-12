#!/usr/bin/env node
import dotenv from "dotenv";
import { Daytona } from "@daytonaio/sdk";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") });

const daytona = new Daytona({ apiKey: process.env.DAYTONA_API_KEY });
const sandboxId = process.argv[2] || "8352a601-b441-4252-97f5-ca3ff803f1f6";

const sb = await daytona.get(sandboxId);
console.log("sandbox state:", sb.state);

async function run(cmd, timeout = 15) {
  const r = await sb.process.executeCommand(cmd, undefined, undefined, timeout);
  return r;
}

const repoDir = "/home/daytona/repo";

console.log("\n--- ps for next ---");
console.log((await run(`ps aux | grep -E 'next|node' | grep -v grep || echo 'no next process'`)).result);

console.log("\n--- tail /tmp/next.log (last 80 lines) ---");
console.log((await run(`tail -80 /tmp/next.log 2>&1 || echo 'no log'`)).result);

console.log("\n--- local probe ---");
console.log((await run(`curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/ 2>&1; echo`)).result);

console.log("\n--- port 3000 listening? ---");
console.log((await run(`(ss -tlnp 2>/dev/null || netstat -tlnp 2>/dev/null) | grep ':3000' || echo 'port 3000 NOT listening'`)).result);
