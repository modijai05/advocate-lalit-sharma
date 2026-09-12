import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { useCMS } from '../../context/CMSContext'
import type { LegalInsight } from '../../types'
import { ArrowRight, BookOpen, X } from 'lucide-react'

export const LegalInsightsSection: React.FC = () => {
  const { insights } = useCMS()
  const [selectedInsight, setSelectedInsight] = useState<LegalInsight | null>(null)

  return (
    <section id="insights" className="relative bg-[#050505] text-[#F7F7F5] py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="10" title="Legal Insights" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Procedural Guides
          </h2>
          <p className="font-ui text-[0.72rem] text-[#9B9790] uppercase tracking-[0.18em] mt-2">
            Educational roadmaps on adjudicatory progression in Rajasthan
          </p>
          <div className="mt-4 w-10 h-[2px] bg-white/60" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          {insights.map((insight, idx) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.09 }}
              className="bg-[#0C0C0C] border border-white/12 p-6 flex flex-col justify-between group hover:border-white/30 transition-all cursor-pointer rounded-sm"
              onClick={() => setSelectedInsight(insight)}
            >
              <div>
                <div className="flex items-center justify-between text-[0.62rem] font-ui text-[#8E8D88] uppercase mb-3">
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[#E7E6E1] rounded-sm">
                    {insight.category}
                  </span>
                  <span>{insight.readingTime}</span>
                </div>

                <h3 className="font-heading text-[1.05rem] text-white font-bold mb-2 group-hover:text-[#E7E6E1] transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="font-ui text-[0.83rem] text-[#B8B7B1] leading-relaxed line-clamp-3">
                  {insight.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-end text-[0.72rem] font-ui text-[#E7E6E1] gap-1 group-hover:gap-2 transition-all">
                <span>Read Steps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedInsight(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E0E0E] border border-white/20 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left my-auto rounded-sm"
            >
              <button
                onClick={() => setSelectedInsight(null)}
                className="absolute top-5 right-5 p-1.5 text-[#8E8D88] hover:text-white border border-white/10 rounded-sm"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-[0.62rem] font-ui tracking-widest text-[#8E8D88] uppercase mb-2">
                {selectedInsight.category} · {selectedInsight.readingTime}
              </div>

              <h3 className="font-heading text-[1.3rem] sm:text-[1.5rem] text-white font-bold mb-4 pr-8 leading-snug">
                {selectedInsight.title}
              </h3>

              <p className="font-ui text-[0.85rem] text-[#B8B7B1] leading-relaxed mb-5">
                {selectedInsight.summary}
              </p>

              <div className="space-y-3 mb-5">
                <div className="font-ui text-[0.62rem] tracking-wider uppercase text-[#8E8D88] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Procedural Roadmap</span>
                </div>
                <div className="space-y-2">
                  {selectedInsight.proceduralSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-[0.82rem] text-[#F7F7F5] bg-[#141414] p-3 border border-white/5 rounded-sm">
                      <span className="font-ui text-[#8E8D88] text-[0.65rem] shrink-0 pt-0.5">0{sIdx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 font-ui text-[0.65rem] text-[#8E8D88]">
                {selectedInsight.statutoryReference}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
