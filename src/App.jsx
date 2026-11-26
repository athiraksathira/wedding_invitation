import { useEffect, useRef, useState } from 'react'
import { Music, Pause, Volume2 } from 'lucide-react'
import CoverHero from './components/CoverHero'
import MainInvitation from './components/MainInvitation'
import CalendarCard from './components/CalendarCard'
import StoryCard from './components/StoryCard'
import PhotoGallery from './components/PhotoGallery'
import EventTimeline from './components/EventTimeline'
import CountdownFooter from './components/CountdownFooter'

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const bgmSrc = `${import.meta.env.BASE_URL}assets/bgm.mp3`

  // Lock body scroll until "OPEN INVITATION" is clicked
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = isUnlocked ? 'auto' : 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isUnlocked])

  // Gentle scroll reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-section')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const startMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      audio.volume = 0.65
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      await startMusic()
    }
  }

  const handleOpenInvitation = () => {
    setIsUnlocked(true)
    startMusic()
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById('main-invitation')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 50)
    })
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A0E17] relative">
      {/* Background Music Element */}
      <audio
        ref={audioRef}
        src={bgmSrc}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Cover Hero Section */}
      <CoverHero onOpenInvitation={handleOpenInvitation} isUnlocked={isUnlocked} />

      {/* Main Invitation Journey */}
      <main>
        <MainInvitation />
        <CalendarCard />
        <StoryCard />
        <PhotoGallery />
        <EventTimeline />
        <CountdownFooter />
      </main>

      {/* Floating Music Player Button (bottom-right) */}
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-[#C59B5F] bg-[#4A0E17]/95 px-4 py-3 text-[#FAF7F2] shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:bg-[#621420] hover:scale-105 cursor-pointer"
      >
        {isPlaying && (
          <span
            className="animate-pulse-ring absolute inset-0 rounded-full border border-[#C59B5F]"
            aria-hidden="true"
          />
        )}
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Pause className="w-4 h-4 text-[#DEC291]" />
          ) : (
            <Music className="w-4 h-4 text-[#DEC291]" />
          )}
        </span>
        <span className="relative hidden sm:inline text-[11px] font-medium tracking-[0.18em] uppercase text-[#FAF7F2]">
          {isPlaying ? 'Playing' : 'Music'}
        </span>
        {isPlaying && <Volume2 className="relative hidden sm:inline w-3.5 h-3.5 text-[#C59B5F]" />}
      </button>
    </div>
  )
}
