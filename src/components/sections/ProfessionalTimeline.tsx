import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { TIMELINE_DATA } from '../../data/initialData'
import { Briefcase, Calendar } from 'lucide-react'

export const ProfessionalTimeline: React.FC = () => {
  return (
    <section id="timeline" className="relative bg-[#000000] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="06" title="Professional Timeline" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Professional &amp; Judicial Record
          </h2>
          <p className="font-ui text-sm sm:text-base text-neutral-400 max-w-md mt-2">
            Chronology of statutory empanelments, appointments, and appellate advocacy.
          </p>
          <div className="mt-4 w-12 h-0.5 bg-white" />
        </div>

        {/* Vertical timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 text-left">
          {/* Classic solid monochrome spine */}
          <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-white/30" />

          {TIMELINE_DATA.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[1.85rem] sm:-left-[2.85rem] top-3 flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
              </div>

              {/* Entry Card */}
              <div className="p-6 sm:p-7 border border-white/15 bg-[#0A0A0A] text-left">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/30 text-white font-ui text-xs font-semibold tracking-wider uppercase">
                    <Calendar className="w-3 h-3" />
                    <span>{entry.period}</span>
                  </div>

                  <span className="font-ui text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                    {entry.authority}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-1.5 leading-snug">
                  {entry.designation}
                </h3>

                <div className="font-ui text-sm text-neutral-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{entry.forum}</span>
                </div>

                {entry.description && (
                  <p className="font-ui text-sm text-neutral-400 leading-relaxed mt-3 pt-3 border-t border-white/10 font-light">
                    {entry.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
