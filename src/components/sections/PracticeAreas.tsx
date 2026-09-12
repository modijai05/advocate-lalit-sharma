import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { PRACTICE_AREAS } from '../../data/initialData'
import {
  CivilLitigationGraphic,
  WritConstitutionalGraphic,
  CriminalGraphic,
  RevenueGraphic,
  FamilyMatrimonialGraphic
} from '../brand/PracticeGraphics'
import { ChevronRight } from 'lucide-react'

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

  const getGraphic = (type: string) => {
    const props = { className: 'w-full h-full', color: '#C9A84C' }
    switch (type) {
      case 'civil':    return <CivilLitigationGraphic    {...props} color="#C9A84C" />
      case 'writ':     return <WritConstitutionalGraphic  {...props} color="#FFFFFF" />
      case 'criminal': return <CriminalGraphic            {...props} color="#C9A84C" />
      case 'revenue':  return <RevenueGraphic             {...props} color="#C9A84C" />
      case 'family':   return <FamilyMatrimonialGraphic   {...props} color="#C9A84C" />
      default:         return null
    }
  }

  const graphicKeys = ['civil', 'writ', 'criminal', 'revenue', 'family']
  const active = PRACTICE_AREAS[activeChapter]

  return (
    <section
      id="practice"
      className="relative bg-[#0A0A0A] text-[#F0EEE8] py-16 sm:py-24 border-b border-white/10"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'linear-gradient(to right,#1e1e1e 1px,transparent 1px),linear-gradient(to bottom,#1e1e1e 1px,transparent 1px)',
          backgroundSize: '5rem 5rem'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="03" title="Practice Areas" theme="dark" />
          <h2 className="font-heading font-bold text-white mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Five Core Practice Areas
          </h2>
          <div className="mt-4 w-10 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          {CHAPTER_NUMBERS.map((num, i) => (
            <button
              key={i}
              onClick={() => setActiveChapter(i)}
              className={`flex items-center gap-1.5 px-3 py-2 font-ui text-[0.65rem] font-bold tracking-[0.1em] uppercase transition-all duration-200 rounded-sm cursor-pointer ${
                activeChapter === i
                  ? 'bg-[#C9A84C] text-[#0A0A0A] shadow-md'
                  : 'text-[#9B9790] hover:text-[#F0EEE8] border border-white/10 hover:border-white/25'
              }`}
            >
              <span className={activeChapter === i ? 'text-[#0A0A0A]/70' : 'text-[#C9A84C]'}>{num}</span>
              <span>{CHAPTER_LABELS[i]}</span>
            </button>
          ))}
        </div>

        {/* Active Chapter Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            {/* Content */}
            <div className="space-y-5 text-left">
              <h3 className="font-heading font-bold text-white leading-snug" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}>
                {active.title}
              </h3>

              <p className="font-serif italic text-[0.95rem] text-[#D9D6CD] leading-[1.75] border-l-2 border-[#C9A84C]/60 pl-4">
                "{active.summary}"
              </p>

              <div className="pt-4 border-t border-white/10">
                <div className="font-ui text-[0.58rem] font-bold uppercase tracking-wider text-[#9B9790] mb-3">
                  Key Scope
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.scope.slice(0, 6).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-ui text-[0.83rem] text-[#D9D6CD] leading-[1.6]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Graphic */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-xs aspect-square flex items-center justify-center bg-[#0C0C0C] border border-white/10 rounded-sm p-8 hover:border-[#C9A84C]/25 transition-colors mx-auto">
                {getGraphic(graphicKeys[activeChapter])}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
