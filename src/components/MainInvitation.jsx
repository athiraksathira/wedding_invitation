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
        <div className="relative w-full h-[380px] sm:h-[480px] bg-gradient-to-b from-[#69212C] via-[#4A0E17] to-[#32080E] overflow-hidden">
          {!imgFailed && (
            <img
              src={coupleSrc}
              alt="Athira and Sandeep"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover object-center"
            />
          )}

          {/* Subtle gradient tint over bottom for seamless edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E17]/40 via-transparent to-[#1F0509]/20 pointer-events-none" />

          {/* SVG Torn-Paper Edge Transition into Soft Beige Card */}
          <svg
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            className="absolute -bottom-px left-0 w-full h-14 sm:h-20 block pointer-events-none"
            aria-hidden="true"
          >
            <path
              d="M0,46 L38,62 L74,38 L118,58 L164,34 L205,64 L252,42 L298,66 L345,39 L392,61 L444,31 L492,65 L540,44 L590,68 L636,36 L688,63 L735,40 L786,67 L834,33 L884,60 L932,42 L982,66 L1030,35 L1080,62 L1128,38 L1176,65 L1224,41 L1272,63 L1320,37 L1370,59 L1412,42 L1440,54 L1440,110 L0,110 Z"
              fill="#FAF7F2"
              opacity="0.45"
            />
            <path
              d="M0,56 L42,72 L86,48 L130,70 L176,45 L224,74 L274,52 L322,76 L372,49 L420,73 L468,43 L518,75 L566,53 L614,77 L662,47 L714,72 L762,50 L812,76 L860,44 L910,70 L958,51 L1008,75 L1056,46 L1104,72 L1152,49 L1202,74 L1250,51 L1298,72 L1346,48 L1396,68 L1440,56 L1440,110 L0,110 Z"
              fill="#E8DDD1"
            />
          </svg>
        </div>

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
                      GOWREESANKARAM AUDITORIUM, ANTHINAAD
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
