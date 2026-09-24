import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type AkashaSectionLabelProps = {
  children: ReactNode
  className?: string
  accentColor?: string
}

export function AkashaSectionLabel({ children, className, accentColor = "#d9ff20" }: AkashaSectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em]", className)} style={{ color: accentColor }}>
      <span className="h-px w-10" style={{ backgroundColor: accentColor }} aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
