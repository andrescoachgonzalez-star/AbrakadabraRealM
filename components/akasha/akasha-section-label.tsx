import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type AkashaSectionLabelProps = {
  children: ReactNode
  className?: string
}

export function AkashaSectionLabel({ children, className }: AkashaSectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d9ff20]", className)}>
      <span className="h-px w-10 bg-[#d9ff20]" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
