import { useState } from 'react'
import { Sparkles, ChevronDown, Heart } from 'lucide-react'

const PARTICLES = [
  { id: 1, left: '6%', delay: '0s', duration: '9s', size: 12, tone: 'gold' },
  { id: 2, left: '14%', delay: '1.8s', duration: '12s', size: 14, tone: 'ivory' },
  { id: 3, left: '22%', delay: '0.7s', duration: '10.5s', size: 10, tone: 'gold' },
  { id: 4, left: '31%', delay: '3.2s', duration: '13s', size: 15, tone: 'ivory' },
  { id: 5, left: '39%', delay: '2.1s', duration: '9.5s', size: 11, tone: 'gold' },
  { id: 6, left: '48%', delay: '4.5s', duration: '11.5s', size: 13, tone: 'ivory' },
  { id: 7, left: '57%', delay: '1.1s', duration: '10s', size: 10, tone: 'gold' },
  { id: 8, left: '66%', delay: '3.8s', duration: '12.5s', size: 14, tone: 'ivory' },
  { id: 9, left: '75%', delay: '0.4s', duration: '9.8s', size: 12, tone: 'gold' },
  { id: 10, left: '83%', delay: '2.9s', duration: '11.8s', size: 14, tone: 'ivory' },
  { id: 11, left: '91%', delay: '1.4s', duration: '10.2s', size: 11, tone: 'gold' },
  { id: 12, left: '96%', delay: '4.1s', duration: '12.8s', size: 13, tone: 'ivory' },
]

export default function CoverHero({ onOpenInvitation, isUnlocked }) {
  const [imgFailed, setImgFailed] = useState(false)
  const coverSrc = `${import.meta.env.BASE_URL}assets/cover.jpg`

  return (
    <section
      id="cover-hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2E080F] via-[#4A0E17] to-[#1D0509] text-[#FAF7F2]"
    >
      {/* Background cover image with warm dark fallback */}
      {!imgFailed && (
        <img
          src={coverSrc}
          alt="Athira and Sandeep Wedding Cover"
          onError={() => setImgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-[50%_28%] opacity-70 scale-105 transition-transform duration-[4000ms] ease-out"
        />
      )}

      {/* Rich layered dark maroon & warm vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 42%, rgba(74, 14, 23, 0.42) 0%, rgba(28, 5, 9, 0.84) 100%)',
        }}
      />

      {/* Subtle gold hairline frame */}
      <div className="pointer-events-none absolute inset-4 sm:inset-7 border border-[#C59B5F]/35 rounded-sm" />
      <div className="pointer-events-none absolute inset-6 sm:inset-9 border border-[#C59B5F]/15 rounded-sm" />

      {/* Subtle falling love heart particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p) => (
          <Heart
            key={p.id}
            fill="currentColor"
            className={`${
              p.tone === 'gold'
                ? 'animate-sparkle text-[#DEC291]/85 drop-shadow-[0_0_8px_rgba(222,194,145,0.7)]'
                : 'animate-petal text-[#E8DDD1]/75 drop-shadow-[0_0_6px_rgba(232,221,209,0.45)]'
            } absolute -top-8`}
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Main Cover Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#DEC291] mb-6">
          <span className="h-px w-8 bg-[#C59B5F]/70" />
          <Sparkles className="w-3.5 h-3.5 text-[#C59B5F]" />
          <span>Save The Date • 20.12.2026</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C59B5F]" />
          <span className="h-px w-8 bg-[#C59B5F]/70" />
        </div>

        <p className="font-serif italic text-lg sm:text-xl text-[#E8DDD1]/90 tracking-wide mb-2">
          Together with their families
        </p>

        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-[#FAF7F2] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] leading-tight my-2">
          Athira &amp; Sandeep
        </h1>

        <div className="flex items-center justify-center gap-3 my-5 w-full max-w-xs">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C59B5F]/80" />
          <span className="w-2 h-2 rotate-45 border border-[#C59B5F] bg-[#C59B5F]/40" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C59B5F]/80" />
        </div>

        <p className="font-sans text-xs sm:text-sm tracking-[0.28em] uppercase text-[#E8DDD1] font-light mb-10">
          AND SO, OUR FOREVER BEGINS.
        </p>

        <button
          type="button"
          onClick={onOpenInvitation}
          className="group relative inline-flex items-center gap-3 rounded-full border border-[#C59B5F] bg-gradient-to-r from-[#4A0E17] via-[#621420] to-[#4A0E17] px-8 py-3.5 text-xs sm:text-sm font-medium tracking-[0.24em] uppercase text-[#FAF7F2] shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[#DEC291] hover:shadow-[0_0_28px_rgba(197,155,95,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C59B5F]/0 via-[#C59B5F]/20 to-[#C59B5F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative">OPEN INVITATION</span>
          <ChevronDown className="relative w-4 h-4 text-[#DEC291] transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>

        {isUnlocked && (
          <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-[#DEC291]/75 animate-pulse">
            Scroll down to explore
          </p>
        )}
      </div>
    </section>
  )
}
