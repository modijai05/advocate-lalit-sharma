import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { useCMS } from '../../context/CMSContext'
import type { LegalInsight } from '../../types'
import { ArrowRight, BookOpen, Clock, X, CheckCircle } from 'lucide-react'

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  'Civil Appeals': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'Criminal Law': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  'Constitutional': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  'Revenue & Land': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
}

export const LegalInsightsSection: React.FC = () => {
  const { insights } = useCMS()
  const [selectedInsight, setSelectedInsight] = useState<LegalInsight | null>(null)

  return (
    <section id="insights" className="relative bg-white text-slate-900 py-16 sm:py-24 border-b border-slate-200 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="10" title="Legal Insights" theme="light" />
          <h2 className="font-heading font-extrabold text-slate-900 tracking-tight mt-1 text-3xl sm:text-4xl">
            Procedural Guides &amp; Adjudicatory Insights
          </h2>
          <p className="font-ui text-sm sm:text-base text-slate-600 max-w-lg mt-3">
            Educational roadmaps on appellate progression before the High Court of Rajasthan.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-full" />
        </div>

        {/* Grid of Insight Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {insights.map((insight, idx) => {
            const catStyle = CATEGORY_STYLES[insight.category] || {
              bg: 'bg-blue-50',
              text: 'text-blue-700',
              border: 'border-blue-200'
            }

            return (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.09 }}
                className="card-light p-7 flex flex-col justify-between group rounded-xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift"
                onClick={() => setSelectedInsight(insight)}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-ui mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[0.65rem] font-bold border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}>
                      {insight.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{insight.readingTime}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl text-slate-900 font-bold mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {insight.title}
                  </h3>

                  <p className="font-ui text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {insight.summary}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-end text-xs font-ui font-bold text-blue-600 gap-1.5 group-hover:gap-2.5 transition-all">
                  <span>Read Procedural Steps</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedInsight(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left my-auto overflow-hidden"
            >
              <button
                onClick={() => setSelectedInsight(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-xs font-ui font-bold tracking-wider text-blue-600 uppercase mb-2">
                {selectedInsight.category} · {selectedInsight.readingTime}
              </div>

              <h3 className="font-heading text-xl sm:text-2xl text-slate-900 font-extrabold mb-3 pr-8 leading-snug">
                {selectedInsight.title}
              </h3>

              <p className="font-ui text-sm text-slate-600 leading-relaxed mb-5 pb-4 border-b border-slate-100">
                {selectedInsight.summary}
              </p>

              <div className="space-y-3 mb-6">
                <div className="font-ui text-xs font-bold tracking-wider uppercase text-slate-700 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Adjudicatory Stages &amp; Procedure</span>
                </div>
                <div className="space-y-2.5">
                  {selectedInsight.proceduralSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-mono text-xs font-bold text-blue-600 shrink-0 pt-0.5">0{sIdx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 font-ui text-xs text-slate-500 flex items-center justify-between">
                <span>{selectedInsight.statutoryReference}</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> High Court Practice
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
