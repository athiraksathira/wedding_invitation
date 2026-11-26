import { useState } from 'react'
import { Calendar, MapPin } from 'lucide-react'

export default function MainInvitation() {
  const [imgFailed, setImgFailed] = useState(false)
  const coupleSrc = `${import.meta.env.BASE_URL}assets/couple1.jpg`

  return (
    <section
      id="main-invitation"
      className="relative w-full bg-[#FAF7F2] pt-10 sm:pt-16 pb-12 px-4 sm:px-6"
    >
      <div className="reveal-section max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(74,14,23,0.12)] border border-[#C59B5F]/40 bg-[#E8DDD1]">
        {/* Couple Photo Area with Warm Fallback */}

        {/* Soft Beige Invitation Details Card */}
        <div className="relative bg-[#E8DDD1] px-6 sm:px-12 pt-4 pb-12 sm:pb-14 text-center">
          <div className="border border-[#C59B5F]/55 rounded-xl px-5 sm:px-10 py-9 sm:py-12 bg-[#FAF7F2]/45 backdrop-blur-[2px]">
            <p className="font-serif italic text-lg sm:text-2xl text-[#4A0E17] leading-relaxed max-w-xl mx-auto">
              &ldquo;With the joy of family and hearts full of gratitude and love, we invite you to
              celebrate the beginning of our life together.&rdquo;
            </p>

            {/* Ornamental divider */}
            <div className="flex items-center justify-center gap-3 my-7">
              <span className="h-px w-14 bg-[#C59B5F]" />
              <span className="w-2 h-2 rotate-45 bg-[#4A0E17]" />
              <span className="h-px w-14 bg-[#C59B5F]" />
            </div>

            {/* Bride & Parents */}
            <div className="space-y-1">
              <h2 className="font-script text-5xl sm:text-6xl text-[#4A0E17]">Athira</h2>
              <p className="font-serif text-sm sm:text-base tracking-wide text-[#4A0E17]/85 font-medium">
                D/O Sri K. R. Shaji &amp; Smt. Shantha Shaji
              </p>
            </div>

            <div className="my-4 font-script text-3xl text-[#C59B5F]">&amp;</div>

            {/* Groom & Parents */}
            <div className="space-y-1">
              <h2 className="font-script text-5xl sm:text-6xl text-[#4A0E17]">Sandeep</h2>
              <p className="font-serif text-sm sm:text-base tracking-wide text-[#4A0E17]/85 font-medium">
                S/O Sri Sabu &amp; Smt. Kavitha Sabu
              </p>
            </div>

            {/* Combined Calligraphic Title */}
            <div className="mt-8 pt-6 border-t border-[#C59B5F]/40">
              <p className="font-script text-4xl sm:text-5xl text-[#4A0E17] mb-6">
                Athira &amp; Sandeep
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
                <div className="flex items-start gap-3 rounded-lg border border-[#C59B5F]/45 bg-[#FAF7F2]/80 px-4 py-3">
                  <Calendar className="w-4 h-4 text-[#C59B5F] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-[#4A0E17]/65 font-semibold">
                      Date
                    </p>
                    <p className="font-serif text-base font-semibold tracking-wider text-[#4A0E17]">
                      DECEMBER 20, 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#C59B5F]/45 bg-[#FAF7F2]/80 px-4 py-3">
                  <MapPin className="w-4 h-4 text-[#C59B5F] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-[#4A0E17]/65 font-semibold">
                      Venue
                    </p>
                    <p className="font-serif text-sm font-semibold tracking-wider text-[#4A0E17] leading-snug">
                      GOURISANKARAM AUDITORIUM, ANTHINAD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
