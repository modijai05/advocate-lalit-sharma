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
  'Civil Jurisdiction',
  'Constitutional Writs',
  'Criminal Jurisprudence',
  'Land & Agrarian Laws',
  'Family Jurisdiction',
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
      className="relative bg-[#0A0A0A] text-[#F0EEE8] py-24 sm:py-32 border-b border-white/10"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right,#1e1e1e 1px,transparent 1px),linear-gradient(to bottom,#1e1e1e 1px,transparent 1px)',
          backgroundSize: '5rem 5rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <SectionLabel number="03" title="Practice Areas" theme="dark" />
          <h2 className="font-heading font-bold text-white mt-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Five Core Practice Chapters
          </h2>
          <p className="font-ui text-[0.72rem] font-bold tracking-[0.2em] text-[#C9A84C] uppercase mt-3">
            Jurisdictional Focus Before the High Court &amp; Subordinate Tribunals
          </p>
          <div className="mt-5 w-12 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
          {CHAPTER_NUMBERS.map((num, i) => (
            <button
              key={i}
              onClick={() => setActiveChapter(i)}
              className={`flex items-center gap-2 px-4 py-2.5 font-ui text-[0.68rem] font-bold tracking-[0.12em] uppercase transition-all duration-200 rounded-sm cursor-pointer ${
                activeChapter === i
                  ? 'bg-[#C9A84C] text-[#0A0A0A] shadow-lg'
                  : 'text-[#9B9790] hover:text-[#F0EEE8] border border-white/10 hover:border-white/25'
              }`}
            >
              <span className={activeChapter === i ? 'text-[#0A0A0A]/70' : 'text-[#C9A84C]'}>{num}</span>
              <span className="hidden sm:inline">{CHAPTER_LABELS[i]}</span>
              <span className="sm:hidden">{CHAPTER_LABELS[i].split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* ── Active Chapter Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
          >
            {/* Content side */}
            <div className={`space-y-6 text-left ${activeChapter === 1 || activeChapter === 3 ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
              
              {/* Chapter label */}
              <div className="flex items-center gap-3">
                <span className="font-ui text-[0.6rem] font-black tracking-[0.24em] text-[#C9A84C] uppercase">
                  Chapter {CHAPTER_NUMBERS[activeChapter]}
                </span>
                <span className="w-6 h-px bg-white/25" />
                <span className="font-ui text-[0.6rem] font-semibold text-[#9B9790] uppercase tracking-wider">
                  {CHAPTER_LABELS[activeChapter]}
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-heading font-bold text-white leading-snug" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.25rem)' }}>
                {active.title}
              </h3>

              {/* Summary — Lora italic */}
              <p className="font-serif italic text-[1rem] sm:text-[1.05rem] text-[#D9D6CD] leading-[1.75] border-l-2 border-[#C9A84C]/60 pl-4">
                "{active.summary}"
              </p>

              {/* Scope list */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-ui text-[0.6rem] font-bold uppercase tracking-wider text-[#9B9790] mb-4">
                  Key Adjudicatory Scope
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-ui text-[0.875rem] text-[#D9D6CD] leading-[1.6]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Procedural context */}
              <p className="font-ui text-[0.8rem] text-[#5E5D58] leading-relaxed">
                {active.proceduralContext}
              </p>
            </div>

            {/* Graphic side */}
            <div className={`flex items-center justify-center ${activeChapter === 1 || activeChapter === 3 ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
              <div className="w-full max-w-sm aspect-square sm:aspect-[4/3] flex items-center justify-center bg-[#0C0C0C] border border-white/10 rounded-sm p-8 hover:border-[#C9A84C]/25 transition-colors">
                {getGraphic(graphicKeys[activeChapter])}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── All-chapters mini grid (below) ── */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PRACTICE_AREAS.map((area, i) => (
              <button
                key={i}
                onClick={() => setActiveChapter(i)}
                className={`text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer ${
                  activeChapter === i
                    ? 'border-[#C9A84C]/50 bg-[#C9A84C]/8'
                    : 'border-white/8 bg-[#111] hover:border-white/20 hover:bg-[#151515]'
                }`}
              >
                <div className={`font-ui text-[0.55rem] font-bold tracking-wider uppercase mb-1.5 ${
                  activeChapter === i ? 'text-[#C9A84C]' : 'text-[#5E5D58]'
                }`}>
                  Ch. {CHAPTER_NUMBERS[i]}
                </div>
                <div className="font-heading text-[0.8rem] font-bold text-white leading-tight">
                  {area.title.split('&')[0].trim()}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
