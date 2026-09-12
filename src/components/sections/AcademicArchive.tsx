import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { ACADEMIC_RECORDS, BAR_MEMBERSHIPS, CIVIC_INVOLVEMENT, CLIENT_PROFILE } from '../../data/initialData'
import { GraduationCap, Award, Building2 } from 'lucide-react'

export const AcademicArchive: React.FC = () => {
  return (
    <section id="academic" className="relative bg-[#050505] text-[#F7F7F5] py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 07: Academic */}
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="07" title="Academic Background" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Academic Archive
          </h2>
          <div className="mt-4 w-10 h-[2px] bg-white/60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {ACADEMIC_RECORDS.map((record, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              className="bg-[#0C0C0C] border border-white/12 p-5 flex flex-col justify-between group hover:border-white/30 transition-all text-left relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                <div className="flex items-center justify-between font-ui text-[0.58rem] text-[#5E5D58] uppercase tracking-wider mb-3">
                  <span>Record 0{index + 1}</span>
                  <GraduationCap className="w-4 h-4 text-[#9B9790]" />
                </div>

                <h3 className="font-heading text-[1rem] font-bold text-white mb-1 group-hover:text-[#F0EEE8] transition-colors leading-snug">
                  {record.degree}
                </h3>

                <div className="font-ui text-[0.8rem] text-[#D9D6CD] mb-1">
                  {record.institution}{record.location && ` · ${record.location}`}
                </div>

                <div className="font-ui text-[0.62rem] font-semibold text-[#9B9790] uppercase tracking-wider">
                  {record.field}
                </div>
              </div>

              <div className="pt-3 border-t border-white/8 font-ui text-[0.75rem] text-[#5E5D58] leading-relaxed mt-3">
                {record.notation}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 08: Memberships & Civic */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col items-center text-center mb-10">
            <SectionLabel number="08" title="Memberships &amp; Civic" theme="dark" />
            <h3 className="font-heading text-[1.4rem] font-bold text-white mt-1">Institutional Standing</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {/* Bar Memberships */}
            <div className="bg-[#0C0C0C] border border-white/12 p-6 rounded-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <Award className="w-4 h-4 text-white" />
                <h4 className="font-ui text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[#9B9790]">Bar Memberships</h4>
              </div>
              <div className="space-y-4">
                {BAR_MEMBERSHIPS.map((mem, i) => (
                  <div key={i} className="pb-3 border-b border-white/8 last:border-0 last:pb-0">
                    <div className="font-ui text-[0.58rem] font-bold text-white/60 uppercase tracking-wider mb-0.5">{mem.role}</div>
                    <div className="font-heading text-[0.9rem] font-bold text-white leading-snug">{mem.organization}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Civic Affiliations + Languages */}
            <div className="space-y-6">
              <div className="bg-[#0C0C0C] border border-white/12 p-6 rounded-sm">
                <div className="flex items-center gap-2.5 mb-5">
                  <Building2 className="w-4 h-4 text-white" />
                  <h4 className="font-ui text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[#9B9790]">Civic Affiliations</h4>
                </div>
                <div className="space-y-2.5">
                  {CIVIC_INVOLVEMENT.map((civ, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/8 last:border-0">
                      <div className="font-heading text-[0.85rem] font-bold text-white">{civ.name}</div>
                      <div className="font-ui text-[0.58rem] text-[#5E5D58] uppercase tracking-wide">{civ.city}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages inline */}
              <div className="bg-[#0C0C0C] border border-white/12 p-5 rounded-sm flex items-center justify-between">
                <div>
                  <div className="font-ui text-[0.58rem] font-bold tracking-[0.2em] uppercase text-[#9B9790] mb-1.5">Languages of Practice</div>
                  <div className="font-heading text-[1rem] font-bold text-white">{CLIENT_PROFILE.languages.join(' · ')}</div>
                </div>
                <div className="font-ui text-[0.58rem] text-[#5E5D58]">Enrolment {CLIENT_PROFILE.enrolmentNo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
