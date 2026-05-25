const { spawn } = require("node:child_process")
const { existsSync } = require("node:fs")
const { join } = require("node:path")

const port = process.env.PORT || "3000"
const host = "0.0.0.0"
const standaloneServer = join(process.cwd(), ".next", "standalone", "server.js")

process.env.NODE_ENV ||= "production"

console.log(`[abrakadabra:start] NODE_ENV=${process.env.NODE_ENV}`)
console.log(`[abrakadabra:start] PORT=${port}`)
console.log(`[abrakadabra:start] HOSTNAME=${host}`)
console.log(
  `[abrakadabra:start] NEXT_PUBLIC_API_URL=${
    process.env.NEXT_PUBLIC_API_URL ? "configured" : "missing"
  }`
)

if (!existsSync(standaloneServer)) {
  console.error("[abrakadabra:start] Missing .next/standalone/server.js")
  console.error("[abrakadabra:start] Run npm run build before npm run start")
  process.exit(1)
}

const nextProcess = spawn(process.execPath, [standaloneServer], {
  env: {
    ...process.env,
    HOSTNAME: host,
    PORT: port,
  },
  stdio: "inherit",
})

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
