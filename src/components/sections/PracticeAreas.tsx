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
    accentColor: '#2563EB', // Sapphire Blue
    accentBg: 'bg-blue-600',
    accentLight: 'bg-blue-50 text-blue-700 border-blue-200',
    caption: 'Leather-bound High Court civil reports, CPC references & appellate decree files'
  },
  {
    image: '/assets/images/high-court-columns.jpg',
    tag: 'Constitutional Writ Jurisdiction',
    icon: Landmark,
    accentColor: '#4F46E5', // Royal Indigo
    accentBg: 'bg-indigo-600',
    accentLight: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    caption: 'Articles 226 & 227 constitutional arguments before the Rajasthan High Court'
  },
  {
    image: '/assets/images/scales-and-gavel.jpg',
    tag: 'Criminal Defense & Bail Jurisdiction',
    icon: Scale,
    accentColor: '#E11D48', // Ruby Crimson
    accentBg: 'bg-rose-600',
    accentLight: 'bg-rose-50 text-rose-700 border-rose-200',
    caption: 'Judicial gavel & trial court records in criminal appellate practice'
  },
  {
    image: '/assets/images/advocate-chamber-desk.jpg',
    tag: 'Revenue Law & Land Titling',
    icon: FileText,
    accentColor: '#059669', // Emerald Green
    accentBg: 'bg-emerald-600',
    accentLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    caption: 'Advocate writing desk with land revenue statutes & gazette records'
  },
  {
    image: '/assets/images/scales-and-gavel.jpg',
    tag: 'Matrimonial & Family Jurisprudence',
    icon: HeartHandshake,
    accentColor: '#D97706', // Radiant Amber
    accentBg: 'bg-amber-600',
    accentLight: 'bg-amber-50 text-amber-700 border-amber-200',
    caption: 'Judicial balance of equities in matrimonial settlements & guardianship petitions'
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
      className="relative bg-[#F8FAFC] text-slate-900 py-16 sm:py-24 border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="03" title="Practice Areas" theme="light" />
          <h2 className="font-heading font-extrabold text-slate-900 mt-1 text-3xl sm:text-4xl">
            Five Core Practice Domains
          </h2>
          <p className="font-ui text-sm sm:text-base text-slate-600 max-w-xl mt-3">
            In-depth appellate expertise before Single Bench, Division Bench and statutory tribunals.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-rose-500 rounded-full" />
        </div>

        {/* Dynamic Vibrant Tab Navigation */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 mb-10 pb-2">
          {CHAPTER_NUMBERS.map((num, i) => {
            const isCurrent = activeChapter === i
            const photoConfig = PRACTICE_PHOTOS[i]
            return (
              <button
                key={i}
                onClick={() => setActiveChapter(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-ui text-xs font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer shadow-sm hover:-translate-y-0.5 ${
                  isCurrent
                    ? `${photoConfig.accentBg} text-white shadow-lg scale-105`
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className={isCurrent ? 'text-white/80 font-mono text-[0.65rem]' : 'text-slate-400 font-mono text-[0.65rem]'}>
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="card-light p-6 sm:p-10 border border-slate-200/80 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content (Cols 1-7) */}
              <div className="md:col-span-7 space-y-6 text-left">
                {/* Category Pill with Custom Accent Color */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-ui uppercase tracking-wider font-bold shadow-xs">
                  <span className={`w-2.5 h-2.5 rounded-full ${currentPhoto.accentBg}`} />
                  <IconComponent className="w-4 h-4" style={{ color: currentPhoto.accentColor }} />
                  <span style={{ color: currentPhoto.accentColor }}>{currentPhoto.tag}</span>
                </div>

                <h3 className="font-heading font-extrabold text-slate-900 leading-tight text-2xl sm:text-3xl">
                  {active.title}
                </h3>

                <p className="font-serif italic text-base text-slate-700 leading-relaxed border-l-3 pl-4" style={{ borderColor: currentPhoto.accentColor }}>
                  "{active.summary}"
                </p>

                {/* Scope of Practice Items */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-ui text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Substantive Scope &amp; Filings
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.scope.slice(0, 6).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 font-ui text-sm text-slate-700 leading-snug p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentPhoto.accentColor }} strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Full-Color Real Life Photography Display (Cols 8-12) */}
              <div className="md:col-span-5 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group bg-slate-900 border-2 border-slate-100 hover-lift"
                >
                  <img
                    src={currentPhoto.image}
                    alt={currentPhoto.tag}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay to anchor caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: currentPhoto.accentColor }} />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: currentPhoto.accentColor }} />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="font-ui text-[0.65rem] font-bold tracking-widest uppercase text-white mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentPhoto.accentColor }} />
                      <span>{CHAPTER_LABELS[activeChapter]}</span>
                    </div>
                    <div className="font-serif italic text-xs text-slate-200 line-clamp-2">
                      {currentPhoto.caption}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
