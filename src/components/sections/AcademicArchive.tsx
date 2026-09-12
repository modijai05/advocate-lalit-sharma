import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { ACADEMIC_RECORDS, BAR_MEMBERSHIPS, CIVIC_INVOLVEMENT, CLIENT_PROFILE } from '../../data/initialData'
import { GraduationCap, Award, Building2, Languages as LanguagesIcon } from 'lucide-react'
import { AdvocateTieMotif } from '../brand/AdvocateTieMotif'

export const AcademicArchive: React.FC = () => {
  return (
    <section id="academic" className="relative bg-[#050505] text-[#F7F7F5] py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="07" title="Academic Background" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Academic Archive
          </h2>
          <p className="font-ui text-[0.72rem] font-bold tracking-[0.2em] text-[#C9A84C] uppercase mt-3">
            Jurisprudential, Sociological &amp; Visual Disciplines
          </p>
          <div className="mt-5 w-12 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </div>

        {/* Academic Archive Cards (Document / Archive Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ACADEMIC_RECORDS.map((record, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0C0C0C] border border-white/12 p-7 flex flex-col justify-between group hover:border-[#C9A84C]/30 transition-all text-left relative overflow-hidden rounded-sm"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                <div className="flex items-center justify-between font-ui text-[0.6rem] text-[#5E5D58] uppercase tracking-wider mb-4">
                  <span>Record No. 0{index + 1}</span>
                  <GraduationCap className="w-4 h-4 text-[#9B9790]" />
                </div>

                <h3 className="font-heading text-[1.1rem] font-bold text-white mb-1.5 group-hover:text-[#F0EEE8] transition-colors leading-snug">
                  {record.degree}
                </h3>

                <div className="font-ui text-[0.85rem] text-[#D9D6CD] mb-2">
                  {record.institution} {record.location && `· ${record.location}`}
                </div>

                <div className="font-ui text-[0.65rem] font-semibold text-[#9B9790] uppercase tracking-wider mb-4">
                  {record.field}
                </div>
              </div>

              <div className="pt-4 border-t border-white/8 font-ui text-[0.78rem] text-[#5E5D58] leading-relaxed">
                {record.notation}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 08: Memberships, Civic & Languages Triad */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col items-center text-center mb-12">
            <SectionLabel number="08" title="Memberships &amp; Civic Affiliations" theme="dark" />
            <h3 className="font-heading text-[1.5rem] font-bold text-white mt-1">
              Institutional Standing &amp; Civic Engagement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Column 1: Bar Memberships */}
            <div className="bg-[#0C0C0C] border border-white/12 p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-[#C9A84C]" />
                <h4 className="font-ui text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#9B9790]">Bar Memberships</h4>
              </div>
              <div className="space-y-5">
                {BAR_MEMBERSHIPS.map((mem, i) => (
                  <div key={i} className="pb-4 border-b border-white/8 last:border-0 last:pb-0">
                    <div className="font-ui text-[0.6rem] font-bold text-[#C9A84C] uppercase tracking-wider mb-1">{mem.role}</div>
                    <div className="font-heading text-[0.95rem] font-bold text-white leading-snug">{mem.organization}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Civic & Cultural Institutions */}
            <div className="bg-[#0C0C0C] border border-white/12 p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-5 h-5 text-[#C9A84C]" />
                <h4 className="font-ui text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#9B9790]">Civic Affiliations</h4>
              </div>
              <div className="space-y-3">
                {CIVIC_INVOLVEMENT.map((civ, i) => (
                  <div key={i} className="flex items-start justify-between py-2.5 border-b border-white/8 last:border-0">
                    <div className="font-heading text-[0.9rem] font-bold text-white">{civ.name}</div>
                    <div className="font-ui text-[0.6rem] text-[#5E5D58] uppercase tracking-wider">{civ.city}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Languages & Bar Enrolment Summary */}
            <div className="bg-[#0D0D0D] border border-white/15 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <LanguagesIcon className="w-5 h-5 text-[#E7E6E1]" />
                  <h4 className="text-sm font-mono tracking-widest uppercase text-[#F7F7F5]">
                    Languages
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {CLIENT_PROFILE.languages.map((lang, i) => (
                    <div key={i} className="p-4 bg-[#141414] border border-white/10 text-center">
                      <div className="text-xs font-mono text-[#8E8D88] uppercase tracking-widest">
                        Language
                      </div>
                      <div className="text-lg font-serif text-[#FFFFFF] mt-1">
                        {lang}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-[#8E8D88]">
                  Enrolment 2746/2005
                </div>
                <AdvocateTieMotif width={24} height={28} className="text-[#E7E6E1]/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
