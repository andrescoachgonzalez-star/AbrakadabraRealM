import { spawn } from "node:child_process"
import { existsSync } from "node:fs"
import { join } from "node:path"

const port = process.env.PORT || "3000"
const host = "0.0.0.0"
const standaloneServer = join(process.cwd(), ".next", "standalone", "server.js")

process.env.NODE_ENV ||= "production"

await import("./log-runtime-env.mjs")

if (!existsSync(standaloneServer)) {
  console.error("[abrakadabra:start] Missing .next/standalone/server.js. Run npm run build before npm run start.")
  process.exit(1)
}

const nextProcess = spawn(
  process.execPath,
  [standaloneServer],
  {
    env: {
      ...process.env,
      HOSTNAME: host,
      PORT: port,
    },
    stdio: "inherit",
  }
)

function stop(signal) {
  if (!nextProcess.killed) {
    nextProcess.kill(signal)
  }
}

process.on("SIGINT", () => stop("SIGINT"))
process.on("SIGTERM", () => stop("SIGTERM"))

nextProcess.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }

  process.exit(code ?? 0)
})
