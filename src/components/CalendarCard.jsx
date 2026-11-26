import FloralMonogram from './FloralMonogram'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// December 2026 starts on a Tuesday (index 2) and has 31 days
const DECEMBER_2026_DAYS = [
  null, null,
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31,
]

export default function CalendarCard() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="reveal-section max-w-md mx-auto rounded-2xl border border-[#C59B5F]/50 bg-gradient-to-b from-[#FAF7F2] to-[#E8DDD1]/55 p-6 sm:p-9 shadow-[0_18px_45px_rgba(74,14,23,0.09)] text-center">
        <FloralMonogram className="mb-1" />

        <p className="text-[11px] tracking-[0.3em] uppercase text-[#C59B5F] font-semibold">
          Mark Your Calendar
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#4A0E17] mt-1 mb-6">
          December 2026
        </h3>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-1.5 mb-3 pb-2 border-b border-[#C59B5F]/35">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-[#4A0E17]/70"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-y-2.5 gap-x-1.5 items-center justify-items-center">
          {DECEMBER_2026_DAYS.map((day, idx) => {
            if (!day) {
              return <div key={`empty-${idx}`} className="w-9 h-9" />
            }

            const isWeddingDay = day === 20

            if (isWeddingDay) {
              return (
                <div
                  key={day}
                  className="relative flex items-center justify-center w-11 h-11"
                  title="Wedding Day — Sunday, December 20, 2026"
                >
                  <svg
                    viewBox="0 0 48 44"
                    className="absolute inset-0 m-auto w-11 h-10 animate-heart-glow"
                    aria-hidden="true"
                  >
                    <path
                      d="M24 41.5 C24 41.5 3.5 28.8 3.5 14.5 C3.5 7.4 9.1 2 15.8 2 C19.8 2 22.8 4 24 6.7 C25.2 4 28.2 2 32.2 2 C38.9 2 44.5 7.4 44.5 14.5 C44.5 28.8 24 41.5 24 41.5 Z"
                      fill="#A31621"
                      stroke="#C59B5F"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <span className="relative z-10 text-xs sm:text-sm font-bold text-[#FFFFFF] -mt-1">
                    20
                  </span>
                </div>
              )
            }

            return (
              <div
                key={day}
                className="w-9 h-9 flex items-center justify-center rounded-full font-serif text-base text-[#4A0E17]/85"
              >
                {day}
              </div>
            )
          })}
        </div>

        <div className="mt-7 pt-4 border-t border-[#C59B5F]/35">
          <p className="font-serif italic text-base sm:text-lg text-[#4A0E17]">
            Sunday, December 20, 2026
          </p>
        </div>
      </div>
    </section>
  )
}
