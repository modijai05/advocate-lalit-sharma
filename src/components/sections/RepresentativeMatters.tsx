import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { REPRESENTATIVE_MATTERS } from '../../data/initialData'
import { ShieldCheck } from 'lucide-react'

export const RepresentativeMatters: React.FC = () => {
  return (
    <section className="relative bg-[#F8F8F6] text-[#111111] py-16 sm:py-24 border-b border-[#DCD9D0]">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#111_0.5px,transparent_0.5px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="04" title="Representative Matters" theme="light" />
          <h2 className="font-heading font-bold text-[#080808] tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Matter Categories
          </h2>
          <div className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-ui text-[#33312C] bg-[#EFECE6] px-3 py-1.5 border border-[#DCD9D0] rounded-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8F7017] shrink-0" />
            <span>Client names and case numbers omitted per Bar Council guidelines.</span>
          </div>
        </div>

        {/* Compact list */}
        <div className="divide-y divide-[#DCD9D0] border-y border-[#DCD9D0]">
          {REPRESENTATIVE_MATTERS.map((matter, index) => (
            <motion.div
              key={matter.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="py-5 grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 items-start hover:bg-black/[0.025] px-3 transition-colors rounded-sm"
            >
              <div className="flex items-start gap-3">
                <span className="text-[0.65rem] font-bold text-[#8F7017] bg-[#D4AF37]/15 px-2 py-0.5 rounded-sm mt-1 shrink-0">
                  {matter.code}
                </span>
                <div>
                  <h3 className="font-heading text-[1rem] font-semibold text-[#080808] leading-snug">{matter.title}</h3>
                  <div className="font-ui text-[0.68rem] text-[#66635C] uppercase tracking-wide mt-0.5">{matter.forums}</div>
                </div>
              </div>

              <p className="font-ui text-[0.85rem] text-[#2D2D2D] leading-[1.7]">{matter.scope}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
