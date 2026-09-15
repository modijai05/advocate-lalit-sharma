import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { REPRESENTATIVE_MATTERS } from '../../data/initialData'
import { ShieldCheck } from 'lucide-react'

export const RepresentativeMatters: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="04" title="Representative Matters" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Judicial Matter Categories
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-ui text-neutral-300 border border-white/20 px-3.5 py-1.5">
            <ShieldCheck className="w-4 h-4 text-white shrink-0" />
            <span>Factual categories per Bar Council of India standards · Client identities omitted</span>
          </div>
          <div className="mt-4 w-12 h-0.5 bg-white" />
        </div>

        {/* Matter Category Cards in Strict Monochrome */}
        <div className="grid grid-cols-1 gap-3.5">
          {REPRESENTATIVE_MATTERS.map((matter, index) => (
            <motion.div
              key={matter.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="p-6 sm:p-7 border border-white/15 bg-[#0A0A0A] hover:border-white/40 transition-all duration-150 text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5 flex items-start gap-3.5">
                  <span className="px-2.5 py-1 text-[0.7rem] font-bold font-mono tracking-wider shrink-0 border border-white/30 text-white bg-white/5">
                    {matter.code}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white leading-snug">
                      {matter.title}
                    </h3>
                    <div className="font-ui text-xs text-neutral-400 uppercase tracking-wider mt-1">
                      {matter.forums}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="font-ui text-sm text-neutral-300 leading-relaxed font-light">
                    {matter.scope}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
