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
    caption: 'CPC references, Law Reports & High Court appellate decree precedents'
  },
  {
    image: '/assets/images/high-court-columns.jpg',
    tag: 'Constitutional Writ Jurisdiction',
    icon: Landmark,
    caption: 'Articles 226 & 227 constitutional arguments before the Rajasthan High Court'
  },
  {
    image: '/assets/images/scales-and-gavel.jpg',
    tag: 'Criminal Defense & Bail Jurisdiction',
    icon: Scale,
    caption: 'Judicial precedents & trial court records in criminal appellate defense'
  },
  {
    image: '/assets/images/advocate-chamber-desk.jpg',
    tag: 'Revenue Law & Land Titling',
    icon: FileText,
    caption: 'Chamber documentation with land revenue statutes & gazette records'
  },
  {
    image: '/assets/images/scales-and-gavel.jpg',
    tag: 'Matrimonial & Family Jurisprudence',
    icon: HeartHandshake,
    caption: 'Judicial balance of equities in matrimonial settlements & family disputes'
  }
]

const CHAPTER_LABELS = [
  'Civil Law',
  'Constitutional',
  'Criminal Law',
  'Revenue & Land',
  'Family Law',
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
      className="relative bg-[#FAFAFA] text-black py-16 sm:py-24 border-b border-black/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="03" title="Practice Areas" theme="light" />
          <h2 className="font-heading font-bold text-black mt-1 text-3xl sm:text-4xl">
            Core Practice Domains
          </h2>
          <p className="font-ui text-sm sm:text-base text-neutral-600 max-w-xl mt-2">
            In-depth appellate expertise before Single Bench, Division Bench and statutory tribunals.
          </p>
          <div className="mt-4 w-12 h-0.5 bg-black" />
        </div>

        {/* Traditional Tab Navigation */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-10 pb-2">
          {CHAPTER_NUMBERS.map((num, i) => {
            const isCurrent = activeChapter === i
            return (
              <button
                key={i}
                onClick={() => setActiveChapter(i)}
                className={`flex items-center gap-2 px-4 py-2 font-ui text-xs font-semibold tracking-wide uppercase transition-all duration-150 cursor-pointer ${
                  isCurrent
                    ? 'bg-black text-white border border-black'
                    : 'bg-white text-neutral-800 border border-neutral-300 hover:border-black'
                }`}
              >
                <span className={isCurrent ? 'text-neutral-300 font-mono text-[0.65rem]' : 'text-neutral-500 font-mono text-[0.65rem]'}>
                  {num}
                </span>
                <span>{CHAPTER_LABELS[i]}</span>
              </button>
            )
          })}
        </div>

        {/* Active Chapter Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="p-6 sm:p-10 border border-neutral-300 bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content (Cols 1-7) */}
              <div className="md:col-span-7 space-y-6 text-left">
                {/* Category Pill in Monochrome */}
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-black/20 text-xs font-ui uppercase tracking-wider font-semibold text-black">
                  <IconComponent className="w-4 h-4 text-black" />
                  <span>{currentPhoto.tag}</span>
                </div>

                <h3 className="font-heading font-bold text-black leading-tight text-2xl sm:text-3xl">
                  {active.title}
                </h3>

                <p className="font-serif italic text-base text-neutral-700 leading-relaxed border-l-2 border-black pl-4">
                  "{active.summary}"
                </p>

                {/* Scope of Practice Items */}
                <div className="pt-4 border-t border-neutral-200">
                  <div className="font-ui text-[0.68rem] font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    Substantive Scope &amp; Filings
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {active.scope.slice(0, 6).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-ui text-sm text-neutral-800 leading-snug"
                      >
                        <ChevronRight className="w-4 h-4 shrink-0 mt-0.5 text-black" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Photography Display */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-300">
                  <img
                    src={currentPhoto.image}
                    alt={currentPhoto.tag}
                    className="w-full h-full object-cover grayscale opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="font-ui text-[0.65rem] font-bold tracking-widest uppercase text-neutral-300 mb-1">
                      {CHAPTER_LABELS[activeChapter]}
                    </div>
                    <div className="font-serif italic text-xs text-white line-clamp-2">
                      {currentPhoto.caption}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
