import { spawn } from "node:child_process"

const port = process.env.PORT || "3000"
const host = "0.0.0.0"

await import("./log-runtime-env.mjs")

const nextProcess = spawn(
  process.platform === "win32" ? "next.cmd" : "next",
  ["start", "-H", host, "-p", port],
  {
    env: process.env,
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
