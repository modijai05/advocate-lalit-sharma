import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { TIMELINE_DATA } from '../../data/initialData'

export const ProfessionalTimeline: React.FC = () => {
  return (
    <section id="timeline" className="relative bg-[#F5F3EE] text-[#1A1917] py-16 sm:py-24 border-b border-[#D8D4C8]">
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #1A1917 0.5px, transparent 0.5px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="06" title="Professional Timeline" theme="light" />
          <h2 className="font-heading font-bold text-[#1A1917] tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Professional Record
          </h2>
          <div className="mt-4 w-10 h-[2px] bg-gradient-to-r from-[#A8873A] to-transparent" />
        </div>

        {/* Elevated vertical timeline with glowing spine */}
        <div className="relative pl-6 sm:pl-10 space-y-8">
          {/* Glowing continuous spine */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#A8873A] via-[#C9A84C] to-[#A8873A]/25 shadow-[0_0_8px_rgba(168,135,58,0.35)]" />

          {TIMELINE_DATA.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Luminous Node */}
              <div className="absolute -left-[1.95rem] sm:-left-[2.95rem] top-1.5 flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-[#C9A84C] border-2 border-[#F5F3EE] shadow-[0_0_10px_rgba(201,168,76,0.7)] group-hover:scale-125 transition-transform duration-300" />
                <span className="absolute w-6 h-6 rounded-full bg-[#C9A84C]/25 animate-ping pointer-events-none opacity-50" />
              </div>

              <div className="bg-white p-5 sm:p-6 border border-[#D8D4C8] group-hover:border-[#A8873A] shadow-sm group-hover:shadow-lg rounded-sm transition-all duration-300 group-hover:-translate-y-0.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0A0A0A] text-[#C9A84C] font-ui text-[0.58rem] font-bold tracking-[0.16em] uppercase mb-3 rounded-sm shadow-xs">
                  {entry.period}
                </div>
                <h3 className="font-heading text-[1.02rem] font-bold text-[#1A1917] mb-1 leading-snug group-hover:text-[#A8873A] transition-colors">{entry.designation}</h3>
                <div className="font-ui text-[0.82rem] text-[#4A4843] mb-1">{entry.forum}</div>
                <div className="font-ui text-[0.62rem] font-bold text-[#A8873A] uppercase tracking-wider">{entry.authority}</div>
                {entry.description && (
                  <p className="font-ui text-[0.8rem] text-[#5A5750] leading-[1.7] mt-3 pt-3 border-t border-[#D8D4C8]">{entry.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
