import { useEffect, useState } from 'react'

// December 20, 2026 at 12:00 PM IST (UTC+05:30)
const TARGET_TIMESTAMP = new Date('2026-12-20T12:00:00+05:30').getTime()

function getTimeRemaining() {
  const now = Date.now()
  const diff = Math.max(0, TARGET_TIMESTAMP - now)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, isCompleted: diff === 0 }
}

function padTwo(n) {
  return String(n).padStart(2, '0')
}

export default function CountdownFooter() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const blocks = [
    { label: 'Days', value: padTwo(timeLeft.days) },
    { label: 'Hours', value: padTwo(timeLeft.hours) },
    { label: 'Minutes', value: padTwo(timeLeft.minutes) },
    { label: 'Seconds', value: padTwo(timeLeft.seconds) },
  ]

  return (
    <footer className="bg-[#FAF7F2] text-[#4A0E17] pt-14 sm:pt-20 pb-16 px-4 sm:px-6 border-t border-[#C59B5F]/30">
      <div className="reveal-section max-w-2xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#C59B5F] font-semibold mb-2">
          Counting Down To Forever
        </p>
        <h3 className="font-serif italic text-2xl sm:text-3xl text-[#4A0E17] mb-8">
          {timeLeft.isCompleted ? 'The Wedding Day Has Arrived' : 'Until We Say I Do'}
        </h3>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-5 max-w-lg mx-auto mb-14">
          {blocks.map((block) => (
            <div
              key={block.label}
              className="rounded-xl border border-[#C59B5F]/55 bg-gradient-to-b from-[#FAF7F2] to-[#E8DDD1]/70 py-4 sm:py-5 px-2 shadow-[0_10px_25px_rgba(74,14,23,0.07)]"
            >
              <div className="font-serif text-3xl sm:text-5xl font-semibold text-[#4A0E17] tabular-nums leading-none">
                {block.value}
              </div>
              <div className="mt-2 text-[9px] sm:text-[11px] tracking-[0.2em] uppercase text-[#4A0E17]/70 font-medium">
                {block.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Signature */}
        <div className="pt-8 border-t border-[#C59B5F]/35 flex flex-col items-center">
          <div className="font-serif italic text-3xl sm:text-4xl tracking-widest text-[#4A0E17] mb-3">
            A <span className="text-[#4A0E17] not-italic mx-1">♥</span> S
          </div>
          <p className="font-sans text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold text-[#4A0E17]">
            ATHIRA &amp; SANDEEP
          </p>
          <p className="mt-2 font-serif text-base tracking-[0.25em] text-[#C59B5F] font-semibold">
            20.12.2026
          </p>
        </div>
      </div>
    </footer>
  )
}
