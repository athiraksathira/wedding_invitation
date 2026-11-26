import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const GALLERY_PHOTOS = [
  { file: 'couple1.jpg', alt: 'Athira and Sandeep in royal blue', position: 'object-[50%_18%]' },
  { file: 'couple2.jpg', alt: 'Athira and Sandeep smiling together', position: 'object-[50%_20%]' },
  { file: 'couple3.jpg', alt: 'Athira and Sandeep in black', position: 'object-[50%_18%]' },
  { file: 'couple4.jpg', alt: 'Athira and Sandeep portrait', position: 'object-[50%_18%]' },
  { file: 'couple5.jpg', alt: 'Athira and Sandeep candid moment', position: 'object-[50%_20%]' },
  { file: 'couple6.jpg', alt: 'Athira and Sandeep together outdoors', position: 'object-[50%_18%]' },
]

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
    <section id="gallery" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="reveal-section max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              key={photo.file}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-[#C59B5F]/50 bg-[#E8DDD1] shadow-[0_10px_28px_rgba(74,14,23,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(74,14,23,0.18)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59B5F]"
            >
              <img
                src={`${baseUrl}assets/${photo.file}`}
                alt={photo.alt}
                loading="lazy"
                className={`h-full w-full object-cover ${photo.position} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#32080E]/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="pointer-events-none absolute inset-2 rounded-lg border border-[#DEC291]/0 group-hover:border-[#DEC291]/55 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D0509]/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close preview"
            className="absolute top-4 right-4 rounded-full border border-[#C59B5F]/60 bg-[#4A0E17]/90 p-2 text-[#FAF7F2] hover:bg-[#621420] cursor-pointer"
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
            className="absolute left-3 sm:left-6 rounded-full border border-[#C59B5F]/60 bg-[#4A0E17]/90 p-2 text-[#FAF7F2] hover:bg-[#621420] cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={`${baseUrl}assets/${selectedPhoto.file}`}
            alt={selectedPhoto.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[86vh] max-w-full rounded-xl border border-[#C59B5F]/70 object-contain shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((selectedIndex + 1) % GALLERY_PHOTOS.length)
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 rounded-full border border-[#C59B5F]/60 bg-[#4A0E17]/90 p-2 text-[#FAF7F2] hover:bg-[#621420] cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  )
}
