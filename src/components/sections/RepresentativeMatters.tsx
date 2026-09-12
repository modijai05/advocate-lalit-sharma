import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { REPRESENTATIVE_MATTERS } from '../../data/initialData'
import { ShieldCheck } from 'lucide-react'

const BADGE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'CIV-HC': { bg: 'bg-blue-500/15', text: 'text-blue-400', border: 'border-blue-500/30' },
  'CONST-WRIT': { bg: 'bg-indigo-500/15', text: 'text-indigo-400', border: 'border-indigo-500/30' },
  'CRIM-APP': { bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/30' },
  'REV-LAND': { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'MUN-CORP': { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30' },
}

export const RepresentativeMatters: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-600/[0.02] animate-ambient rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-500/[0.015] animate-ambient rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="04" title="Representative Matters" theme="dark" />
          <h2 className="font-heading font-extrabold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Judicial Matter Categories
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-ui text-slate-300 bg-white/[0.06] px-4 py-2 border border-white/15 rounded-full backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Factual categories per Bar Council of India standards · Client identities omitted</span>
          </div>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full" />
        </div>

        {/* Dynamic Category Cards */}
        <div className="grid grid-cols-1 gap-4">
          {REPRESENTATIVE_MATTERS.map((matter, index) => {
            const badge = BADGE_COLORS[matter.code] || {
              bg: 'bg-blue-500/15',
              text: 'text-blue-400',
              border: 'border-blue-500/30'
            }

            return (
              <motion.div
                key={matter.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-dark p-6 sm:p-7 border border-white/10 hover:border-blue-400/50 rounded-xl transition-all duration-300 group hover-lift text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 flex items-start gap-3.5">
                    <span className={`px-2.5 py-1 rounded-md text-[0.7rem] font-bold font-mono tracking-wider shrink-0 border ${badge.bg} ${badge.text} ${badge.border}`}>
                      {matter.code}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                        {matter.title}
                      </h3>
                      <div className="font-ui text-xs text-slate-400 uppercase tracking-wider mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-amber-400 transition-colors" />
                        <span>{matter.forums}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <p className="font-ui text-sm text-slate-300 leading-relaxed">
                      {matter.scope}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
