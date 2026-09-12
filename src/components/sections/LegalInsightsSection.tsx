import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { useCMS } from '../../context/CMSContext'
import type { LegalInsight } from '../../types'
import { ArrowRight, BookOpen, X, FileText } from 'lucide-react'

export const LegalInsightsSection: React.FC = () => {
  const { insights } = useCMS()
  const [selectedInsight, setSelectedInsight] = useState<LegalInsight | null>(null)

  return (
    <section id="insights" className="relative bg-[#050505] text-[#F7F7F5] py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="10" title="LEGAL INSIGHTS" theme="dark" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-normal tracking-tight">
            Procedural Legal Insights
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#8E8D88] uppercase mt-2">
            Educational Roadmaps on Adjudicatory Progression in Rajasthan
          </p>
        </div>

        {/* Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {insights.map((insight, idx) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#0C0C0C] border border-white/15 p-8 flex flex-col justify-between group hover:border-white/40 transition-all cursor-pointer"
              onClick={() => setSelectedInsight(insight)}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8D88] uppercase mb-4">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#E7E6E1]">
                    {insight.category}
                  </span>
                  <span>{insight.readingTime}</span>
                </div>

                <h3 className="text-2xl font-serif text-[#FFFFFF] font-medium mb-3 group-hover:text-[#E7E6E1] transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="text-sm text-[#B8B7B1] font-sans font-light leading-relaxed mb-6">
                  {insight.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#E7E6E1]">
                <span className="truncate max-w-[240px] text-[#8E8D88]">{insight.statutoryReference}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Steps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Detail Procedural Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedInsight(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E0E0E] border border-white/20 max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative text-left my-auto"
            >
              <button
                onClick={() => setSelectedInsight(null)}
                className="absolute top-6 right-6 p-2 text-[#8E8D88] hover:text-white border border-white/10"
                aria-label="Close insight modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono tracking-widest text-[#8E8D88] uppercase mb-2">
                {selectedInsight.category} · {selectedInsight.readingTime}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#FFFFFF] font-medium mb-4 pr-10">
                {selectedInsight.title}
              </h3>

              <div className="text-xs font-mono text-[#E7E6E1] bg-white/5 p-3 border-l-2 border-[#E7E6E1] mb-6">
                Framework: {selectedInsight.framework}
              </div>

              <p className="text-sm text-[#B8B7B1] font-sans leading-relaxed mb-6">
                {selectedInsight.summary}
              </p>

              <div className="space-y-4 mb-6">
                <div className="text-xs font-mono tracking-wider uppercase text-[#8E8D88] flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Sequential Procedural Roadmap</span>
                </div>
                <div className="space-y-2.5">
                  {selectedInsight.proceduralSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F7F7F5] bg-[#141414] p-3 border border-white/5">
                      <span className="font-mono text-[#8E8D88] text-xs pt-0.5">0{sIdx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8E8D88]">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#E7E6E1]" />
                  <span>{selectedInsight.statutoryReference}</span>
                </span>
                <span className="text-[10px] text-[#8E8D88]">General Procedural Overview</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
