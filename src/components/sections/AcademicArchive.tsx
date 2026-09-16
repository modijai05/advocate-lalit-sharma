import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { ACADEMIC_RECORDS, BAR_MEMBERSHIPS, CLIENT_PROFILE } from '../../data/initialData'
import { useCMS } from '../../context/CMSContext'
import { GraduationCap, Award, Globe } from 'lucide-react'

export const AcademicArchive: React.FC = () => {
  const { profile } = useCMS()

  return (
    <>
      {/* ── Section 07: Academic Background ── */}
      <section id="academic" className="relative bg-[#FAFAFA] text-black py-16 sm:py-24 border-b border-black/15 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <SectionLabel number="07" title="Academic Background" theme="light" />
            <h2 className="font-heading font-bold text-black tracking-tight mt-1 text-3xl sm:text-4xl">
              Academic Archive &amp; Qualifications
            </h2>
            <p className="font-ui text-sm sm:text-base text-neutral-600 max-w-lg mt-2">
              Formal legal education, university merits, and academic foundations.
            </p>
            <div className="mt-4 w-12 h-0.5 bg-black" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_RECORDS.map((record, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 sm:p-7 flex flex-col justify-between bg-white border border-neutral-200 text-left"
              >
                <div>
                  <div className="flex items-center justify-between font-ui text-xs uppercase tracking-wider mb-4">
                    <span className="px-2 py-0.5 text-[0.65rem] font-bold border border-black/20 text-black">
                      Record 0{index + 1}
                    </span>
                    <div className="p-1.5 border border-neutral-200">
                      <GraduationCap className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-black mb-2 leading-snug">
                    {record.degree}
                  </h3>

                  <div className="font-ui text-sm text-neutral-700 font-medium mb-1">
                    {record.institution}{record.location && ` · ${record.location}`}
                  </div>

                  <div className="font-ui text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-2">
                    {record.field}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 font-ui text-xs text-neutral-600 leading-relaxed">
                  {record.notation}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 08: Institutional Standing & Bar Memberships (Pure Black Background) ── */}
      <section id="memberships" className="relative bg-[#000000] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <SectionLabel number="08" title="Bar Memberships" theme="dark" />
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              Institutional Standing &amp; Bar Memberships
            </h3>
            <p className="font-ui text-sm sm:text-base text-neutral-300 max-w-lg mt-2">
              Statutory bar affiliations, appellate authority memberships, and courtroom standing.
            </p>
            <div className="mt-4 w-12 h-0.5 bg-white" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {/* Bar Memberships Card */}
            <div className="p-7 bg-[#0A0A0A] border border-white/15">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <div className="p-2 border border-white/20 text-white">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-white">Bar Memberships</h4>
                  <p className="text-xs text-neutral-400">Statutory &amp; Appellate Associations</p>
                </div>
              </div>
              <div className="space-y-4">
                {BAR_MEMBERSHIPS.map((mem, i) => (
                  <div key={i} className="pb-3 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="font-ui text-[0.65rem] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      {mem.role}
                    </div>
                    <div className="font-heading text-base font-bold text-white leading-snug">
                      {mem.organization}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courtroom Languages & Standing Card */}
            <div className="p-7 bg-[#0A0A0A] border border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                  <div className="p-2 border border-white/20 text-white">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-white">Courtroom Languages</h4>
                    <p className="text-xs text-neutral-400">Official High Court Proceedings</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-heading text-xl font-bold text-white">
                    {profile.languages?.join(' · ') || CLIENT_PROFILE.languages.join(' · ')}
                  </div>
                  <p className="font-ui text-sm text-neutral-300 leading-relaxed pt-2">
                    Fluent bilingual argumentation across Hindi and English for all matters before the Single Bench and Division Bench of the Rajasthan High Court, Jaipur.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-ui text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  Continuous Bar Standing
                </span>
                <span className="font-ui text-xs font-bold text-white border border-white/30 px-3 py-1">
                  Enrolled May 2005
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
