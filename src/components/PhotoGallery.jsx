import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react'

const GALLERY_PHOTOS = [
  {
    file: 'couple1.jpg',
    alt: 'Athira and Sandeep in black attire',
    caption: 'Forever Begins',
    position: 'object-[50%_18%]',
  },
  {
    file: 'couple2.jpg',
    alt: 'Athira and Sandeep smiling together',
    caption: 'Warm Moments',
    position: 'object-[50%_20%]',
  },
  {
    file: 'couple3.jpg',
    alt: 'Athira and Sandeep in black',
    caption: 'Together Always',
    position: 'object-[50%_18%]',
  },
  {
    file: 'couple4.jpg',
    alt: 'Athira and Sandeep portrait',
    caption: 'Festive Glow',
    position: 'object-[50%_18%]',
  },
  {
    file: 'couple5.jpg',
    alt: 'Athira and Sandeep candid moment',
    caption: 'Pure Joy',
    position: 'object-[50%_20%]',
  },
  {
    file: 'couple6.jpg',
    alt: 'Athira and Sandeep together outdoors',
    caption: 'Hand in Hand',
    position: 'object-[50%_18%]',
  },
]

const MARQUEE_ITEMS = [...GALLERY_PHOTOS, ...GALLERY_PHOTOS]

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    if (selectedIndex === null) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length)
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  const selectedPhoto = selectedIndex !== null ? GALLERY_PHOTOS[selectedIndex] : null

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6]/70 to-[#FAF7F2]"
    >
      <div className="reveal-section max-w-5xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-12">
        <p className="text-[11px] tracking-[0.28em] uppercase text-[#C59B5F] font-semibold mb-2">
          Moments Together
        </p>
        <h3 className="font-script text-4xl sm:text-5xl text-[#4A0E17]">
          Our Gallery
        </h3>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="h-px w-12 bg-[#C59B5F]/70" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C59B5F]" />
          <span className="h-px w-12 bg-[#C59B5F]/70" />
        </div>
      </div>

      {/* Seamless left-to-right flowing gallery track */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft left & right edge fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent"
          aria-hidden="true"
        />

        <div className="animate-marquee-ltr flex w-max">
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6">
              {MARQUEE_ITEMS.slice(
                copyIndex * GALLERY_PHOTOS.length,
                (copyIndex + 1) * GALLERY_PHOTOS.length
              ).map((photo, index) => (
                <button
                  key={`${copyIndex}-${photo.file}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group relative w-52 sm:w-64 md:w-72 shrink-0 aspect-[3/4] overflow-hidden rounded-2xl border border-[#C59B5F]/55 bg-[#E8DDD1] shadow-[0_14px_34px_rgba(74,14,23,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#DEC291] hover:shadow-[0_22px_48px_rgba(74,14,23,0.22)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59B5F]"
                >
                  <img
                    src={`${baseUrl}assets/${photo.file}`}
                    alt={photo.alt}
                    loading="lazy"
                    className={`h-full w-full object-cover ${photo.position} transition-transform duration-700 ease-out group-hover:scale-105`}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#26060B]/70 via-transparent to-[#FAF7F2]/10 opacity-35 group-hover:opacity-80 transition-opacity duration-500" />

                  <div
                    className="gallery-shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-[#DEC291]/30 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-[#DEC291]/25 group-hover:border-[#DEC291]/70 transition-colors duration-500" />

                  <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DEC291]/45 bg-[#32080E]/65 px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#FAF7F2] backdrop-blur-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Sparkles className="w-3 h-3 text-[#DEC291]" />
                      {photo.caption}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1D0509]/92 backdrop-blur-md p-4"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close preview"
            className="absolute top-4 right-4 rounded-full border border-[#C59B5F]/60 bg-[#4A0E17]/90 p-2.5 text-[#FAF7F2] hover:bg-[#621420] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((selectedIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 rounded-full border border-[#C59B5F]/60 bg-[#4A0E17]/90 p-2.5 text-[#FAF7F2] hover:bg-[#621420] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={`${baseUrl}assets/${selectedPhoto.file}`}
            alt={selectedPhoto.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-2xl border border-[#C59B5F]/75 object-contain shadow-[0_24px_70px_rgba(0,0,0,0.65)]"
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-4 inline-flex items-center gap-3 rounded-full border border-[#C59B5F]/45 bg-[#32080E]/85 px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-[#DEC291]"
          >
            <span>{selectedPhoto.caption}</span>
            <span className="text-[#C59B5F]/60">•</span>
            <span>
              {selectedIndex + 1} / {GALLERY_PHOTOS.length}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((selectedIndex + 1) % GALLERY_PHOTOS.length)
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 rounded-full border border-[#C59B5F]/60 bg-[#4A0E17]/90 p-2.5 text-[#FAF7F2] hover:bg-[#621420] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  )
}
