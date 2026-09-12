import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { PRACTICE_AREAS } from '../../data/initialData'
import { ChevronRight, BookOpen, Scale, Landmark, FileText, HeartHandshake } from 'lucide-react'

const PRACTICE_PHOTOS = [
  {
    image: '/assets/images/law-library-books.jpg',
    tag: 'Civil Appellate & Statutory Bench',
    icon: BookOpen,
    caption: 'Leather-bound High Court civil reports, CPC references & decree files'
  },
  {
    image: '/assets/images/high-court-columns.jpg',
    tag: 'Constitutional Writ Jurisdiction',
    icon: Landmark,
    caption: 'Articles 226 & 227 constitutional arguments before Rajasthan High Court'
  },
  {
    image: '/assets/images/scales-and-gavel.jpg',
    tag: 'Criminal Defense & Bail Jurisdiction',
    icon: Scale,
    caption: 'Judicial gavel & trial court records in criminal appellate practice'
  },
  {
    image: '/assets/images/advocate-chamber-desk.jpg',
    tag: 'Revenue Law & Land Titling',
    icon: FileText,
    caption: 'Advocate writing desk with land revenue statutes & gazette files'
  },
  {
    image: '/assets/images/scales-and-gavel.jpg',
    tag: 'Matrimonial & Family Jurisprudence',
    icon: HeartHandshake,
    caption: 'Judicial scales of justice in family settlement & guardianship petitions'
  }
]

const CHAPTER_LABELS = [
  'Civil',
  'Constitutional',
  'Criminal',
  'Revenue',
  'Family',
]

const CHAPTER_NUMBERS = ['01', '02', '03', '04', '05']

export const PracticeAreas: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0)

  const active = PRACTICE_AREAS[activeChapter]
  const currentPhoto = PRACTICE_PHOTOS[activeChapter]
  const IconComponent = currentPhoto.icon

  return (
    <section
      id="practice"
      className="relative bg-[#050505] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="03" title="Practice Areas" theme="dark" />
          <h2 className="font-heading font-bold text-white mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Five Core Practice Areas
          </h2>
          <div className="mt-4 w-12 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8 border-b border-white/10 pb-4">
          {CHAPTER_NUMBERS.map((num, i) => (
            <button
              key={i}
              onClick={() => setActiveChapter(i)}
              className={`flex items-center gap-1.5 px-3.5 py-2 font-ui text-[0.68rem] font-bold tracking-[0.1em] uppercase transition-all duration-200 rounded-sm cursor-pointer ${
                activeChapter === i
                  ? 'bg-white text-black shadow-lg font-black'
                  : 'text-neutral-400 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
              }`}
            >
              <span className={activeChapter === i ? 'text-black/60' : 'text-neutral-500'}>{num}</span>
              <span>{CHAPTER_LABELS[i]}</span>
            </button>
          ))}
        </div>

        {/* Active Chapter Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content (Cols 1-7) */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-ui uppercase tracking-wider font-semibold">
                <IconComponent className="w-4 h-4 text-white" />
                <span>{currentPhoto.tag}</span>
              </div>

              <h3 className="font-heading font-bold text-white leading-snug" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}>
                {active.title}
              </h3>

              <p className="font-serif italic text-[0.95rem] text-neutral-300 leading-[1.75] border-l-2 border-white/80 pl-4">
                "{active.summary}"
              </p>

              <div className="pt-4 border-t border-white/10">
                <div className="font-ui text-[0.58rem] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Core Matters &amp; Scope
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.scope.slice(0, 6).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-ui text-[0.83rem] text-neutral-300 leading-[1.6]">
                      <ChevronRight className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Real-life Photography Display (Cols 8-12) */}
            <div className="md:col-span-5 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/20 shadow-2xl group bg-[#111]"
              >
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.tag}
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Subtle corner registration marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/60 pointer-events-none" />

                {/* Caption overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="font-ui text-[0.58rem] font-bold tracking-[0.16em] uppercase text-white/90 mb-0.5">
                    {CHAPTER_LABELS[activeChapter]} Jurisprudence
                  </div>
                  <div className="font-serif italic text-[0.72rem] text-neutral-300 line-clamp-2">
                    {currentPhoto.caption}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
