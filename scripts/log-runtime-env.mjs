const phase = process.argv[2] || "runtime"

console.log(`[abrakadabra:${phase}] NODE_ENV=${process.env.NODE_ENV || "undefined"}`)
console.log(
  `[abrakadabra:${phase}] NEXT_PUBLIC_API_URL=${
    process.env.NEXT_PUBLIC_API_URL ? "configured" : "missing"
  }`
)
console.log(`[abrakadabra:${phase}] PORT=${process.env.PORT || "3000 (fallback)"}`)
