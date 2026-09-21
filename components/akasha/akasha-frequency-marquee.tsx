export function AkashaFrequencyMarquee({ reverse = false }: { reverse?: boolean }) {
  const words = ["AKASHA", "MUSIC", "FREQUENCY", "BAREN", "17 OCT", "7PM—4AM"]
  const content = [...words, ...words]

  return (
    <div className="akasha-marquee overflow-hidden border-y border-[#d9ff20]/25 bg-[#d9ff20] py-3 text-[#050505]" aria-label="AKASHA, música electrónica y frecuencia">
      <div className={reverse ? "akasha-marquee-track akasha-marquee-track-reverse" : "akasha-marquee-track"}>
        {content.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-flex shrink-0 items-center gap-5 px-5 text-[10px] font-black uppercase tracking-[0.28em] sm:text-xs">
            {word}<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
          </span>
        ))}
      </div>
    </div>
  )
}
