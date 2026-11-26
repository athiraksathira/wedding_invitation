import FloralMonogram from './FloralMonogram'

export default function StoryCard() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="reveal-section max-w-2xl mx-auto rounded-2xl bg-[#FAF7F2] p-3 sm:p-4 border border-[#C59B5F]/55 shadow-[0_16px_45px_rgba(74,14,23,0.08)]">
        <div className="relative rounded-xl border border-[#C59B5F]/40 px-6 sm:px-12 py-10 sm:py-12 text-center">
          {/* Corner ornaments */}
          <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C59B5F]" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C59B5F]" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C59B5F]" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C59B5F]" />

          <FloralMonogram className="mb-2" />

          <h3 className="font-script text-4xl sm:text-5xl text-[#4A0E17] mb-5">
            Dear Family &amp; Friends
          </h3>

          <div className="space-y-4 font-serif text-lg sm:text-xl leading-relaxed text-[#4A0E17]/90">
            <p>
              Our lives are woven with cherished memories, laughter, and the warmth of the people
              who mean the most to us. As we step forward hand in hand into a brand-new chapter,
              your presence and blessings are the greatest gift we could ever ask for.
            </p>
            <p>
              We warmly welcome you to join us, share in our joy, and shower your love and
              blessings upon us as we tie the knot and begin our forever together.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C59B5F]/70" />
            <span className="font-serif italic text-base text-[#C59B5F] font-semibold tracking-wider">
              With Love, Athira &amp; Sandeep
            </span>
            <span className="h-px w-10 bg-[#C59B5F]/70" />
          </div>
        </div>
      </div>
    </section>
  )
}
