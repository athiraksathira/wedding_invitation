import { useState } from 'react'
import { Calendar, Clock, Heart, MapPin, Navigation } from 'lucide-react'

const TIMELINE_ITEMS = [
  {
    id: 'date',
    label: 'Date',
    value: '20 DECEMBER 2026',
    subtext: 'Sunday',
    icon: Calendar,
  },
  {
    id: 'muhurtham',
    label: 'Muhurtham',
    value: '12:00 PM – 12:20 PM',
    subtext: 'Auspicious Wedding Hour',
    icon: Clock,
  },
  {
    id: 'event',
    label: 'Event',
    value: 'Wedding Ceremonies',
    subtext: 'Sacred Vows, Blessings & Feast',
    icon: Heart,
  },
  {
    id: 'venue',
    label: 'Venue',
    value: 'Gourisankaram Auditorium, Anthinad',
    subtext: 'Anthinad, Kerala',
    icon: MapPin,
  },
]

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Gourisankaram+Auditorium+Anthinad'

export default function EventTimeline() {
  const [imgFailed, setImgFailed] = useState(false)
  const venueBgSrc = `${import.meta.env.BASE_URL}assets/bg-venue.jpg`

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#3A0A12] via-[#4A0E17] to-[#26060B] text-[#FAF7F2]">
      {/* Background venue photo with warm dark fallback */}
      {!imgFailed && (
        <img
          src={venueBgSrc}
          alt="Gourisankaram Auditorium Background"
          onError={() => setImgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
        />
      )}

      {/* Rich deep maroon tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(42, 7, 13, 0.82) 0%, rgba(74, 14, 23, 0.72) 50%, rgba(34, 6, 10, 0.9) 100%)',
        }}
      />

      <div className="reveal-section relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#DEC291] font-medium mb-2">
            The Celebration
          </p>
          <h3 className="font-script text-5xl sm:text-6xl text-[#FAF7F2]">
            Wedding Itinerary
          </h3>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-12 bg-[#C59B5F]/70" />
            <span className="w-2 h-2 rotate-45 border border-[#C59B5F]" />
            <span className="h-px w-12 bg-[#C59B5F]/70" />
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-8 sm:pl-12 space-y-6 before:content-[''] before:absolute before:left-3.5 sm:before:left-5 before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-[#C59B5F]/20 before:via-[#C59B5F] before:to-[#C59B5F]/20">
          {TIMELINE_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-8 sm:-left-12 top-5 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#4A0E17] border border-[#C59B5F] flex items-center justify-center shadow-[0_0_16px_rgba(197,155,95,0.4)]">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DEC291]" />
                </div>

                {/* Timeline Card */}
                <div className="rounded-xl border border-[#C59B5F]/45 bg-[#FAF7F2]/95 text-[#4A0E17] px-5 sm:px-7 py-5 shadow-[0_14px_35px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5">
                  <p className="text-[10px] sm:text-xs tracking-[0.24em] uppercase text-[#C59B5F] font-semibold mb-1">
                    {item.label}
                  </p>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#4A0E17]">
                    {item.value}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#4A0E17]/75 mt-1">
                    {item.subtext}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Google Maps CTA */}
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#C59B5F] bg-[#FAF7F2] px-7 py-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#4A0E17] shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#C59B5F] hover:text-[#FAF7F2] hover:-translate-y-0.5"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Maps</span>
          </a>
        </div>
      </div>
    </section>
  )
}
