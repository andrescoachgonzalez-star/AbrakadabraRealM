export function AkashaOrbitalGraphic() {
  return (
    <svg
      aria-hidden="true"
      className="akasha-orbital pointer-events-none absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 1200 900"
      fill="none"
      preserveAspectRatio="none"
    >
      <circle className="akasha-orbit-spin origin-center" cx="870" cy="420" r="250" stroke="currentColor" strokeOpacity=".32" />
      <circle className="akasha-orbit-spin-reverse origin-center" cx="870" cy="420" r="380" stroke="currentColor" strokeOpacity=".18" strokeDasharray="5 16" />
      <circle cx="870" cy="420" r="8" fill="currentColor" fillOpacity=".8" />
      <path className="akasha-orbit-draw" d="M-80 730C190 580 390 430 730 340c210-55 380-70 600-36" stroke="currentColor" strokeOpacity=".38" />
      <path className="akasha-orbit-draw" d="M180-80c120 200 260 360 520 470 190 80 340 120 570 126" stroke="currentColor" strokeOpacity=".24" strokeDasharray="2 14" />
      <path d="M48 148h88M92 104v88M1044 740h92M1090 694v92" stroke="currentColor" strokeOpacity=".5" />
      <g className="font-mono fill-current text-[12px] tracking-[.18em]" fill="currentColor" fillOpacity=".48">
        <text x="76" y="120">AK-001</text>
        <text x="1018" y="770">BAR / 07—04</text>
        <text x="1040" y="130">38°N / 10—13</text>
      </g>
    </svg>
  )
}
