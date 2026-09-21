import Image from "next/image"
import { Instagram } from "lucide-react"

export type AkashaArtist = {
  name: string
  role: string
  image?: string
  instagram?: string
}

export function AkashaArtistCard({ artist, index }: { artist: AkashaArtist; index: number }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#090909] transition-[border-color,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-[#c20d12]/45">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0d0d0d]">
        {artist.image ? (
          <Image
            src={artist.image}
            alt={`Retrato de ${artist.name}`}
            fill
            sizes="(min-width: 1280px) 220px, (min-width: 768px) 30vw, 90vw"
            className="image-editorial image-red object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(145deg,#0b0b0b,#111)]" role="img" aria-label={`Fotografía pendiente de ${artist.name}`} />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 text-[10px] font-semibold tracking-[0.24em] text-[#e1282e]">0{index + 1}</span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">{artist.role}</p>
          <h3 className="mt-2 font-serif text-2xl font-bold leading-none text-[#f3f0ec]">{artist.name}</h3>
        </div>
      </div>

      {artist.instagram ? (
        <a
          href={artist.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver Instagram de ${artist.name}`}
          className="flex min-h-12 items-center justify-between gap-3 border-t border-white/[0.08] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-[#e1282e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e1282e]"
        >
          Instagram
          <Instagram className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : (
        <div className="flex min-h-12 items-center justify-between gap-3 border-t border-white/[0.08] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
          Perfil por confirmar
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" aria-hidden="true" />
        </div>
      )}
    </article>
  )
}
