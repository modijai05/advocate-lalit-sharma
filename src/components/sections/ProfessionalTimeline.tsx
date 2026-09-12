import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { TIMELINE_DATA } from '../../data/initialData'
import { Briefcase, Calendar } from 'lucide-react'

const PERIOD_BADGES = [
  'from-blue-600 to-indigo-600',
  'from-amber-600 to-orange-600',
  'from-emerald-600 to-teal-600',
  'from-purple-600 to-pink-600',
  'from-sky-600 to-blue-600',
]

export const ProfessionalTimeline: React.FC = () => {
  return (
    <section id="timeline" className="relative bg-[#080D1A] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="06" title="Professional Timeline" theme="dark" />
          <h2 className="font-heading font-extrabold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Professional &amp; Judicial Record
          </h2>
          <p className="font-ui text-sm sm:text-base text-slate-300 max-w-md mt-3">
            Chronology of statutory empanelments, civic appointments, and appellate advocacy.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400 rounded-full" />
        </div>

        {/* Vertical timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 text-left">
          {/* Glowing continuous multi-color gradient spine */}
          <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-gradient-to-b from-blue-500 via-cyan-400 via-emerald-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

          {TIMELINE_DATA.map((entry, index) => {
            const badgeGrad = PERIOD_BADGES[index % PERIOD_BADGES.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Node with Pulsing Colored Glow */}
                <div className="absolute -left-[1.95rem] sm:-left-[2.95rem] top-3 flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-blue-500 border-2 border-[#080D1A] shadow-[0_0_12px_#3b82f6] group-hover:scale-150 group-hover:bg-amber-400 group-hover:shadow-[0_0_16px_#f59e0b] transition-all duration-300" />
                </div>

                {/* Entry Card */}
                <div className="card-dark p-6 sm:p-7 border border-white/12 hover:border-blue-400/60 rounded-xl shadow-xl group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all duration-300 hover-lift">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${badgeGrad} text-white font-ui text-xs font-bold tracking-wider uppercase rounded-full shadow-sm`}>
                      <Calendar className="w-3 h-3" />
                      <span>{entry.period}</span>
                    </div>

                    <span className="font-ui text-xs font-bold text-amber-400 uppercase tracking-wide">
                      {entry.authority}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-1.5 leading-snug group-hover:text-sky-300 transition-colors">
                    {entry.designation}
                  </h3>

                  <div className="font-ui text-sm text-slate-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{entry.forum}</span>
                  </div>

                  {entry.description && (
                    <p className="font-ui text-sm text-slate-400 leading-relaxed mt-3 pt-3 border-t border-white/10">
                      {entry.description}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
