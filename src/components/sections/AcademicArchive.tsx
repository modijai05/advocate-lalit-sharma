import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { ACADEMIC_RECORDS, BAR_MEMBERSHIPS, CIVIC_INVOLVEMENT, CLIENT_PROFILE } from '../../data/initialData'
import { GraduationCap, Award, Building2, Globe } from 'lucide-react'

const RECORD_COLORS = [
  { badge: 'bg-blue-50 text-blue-700 border-blue-200', icon: 'text-blue-600', dot: 'bg-blue-600' },
  { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: 'text-emerald-600', dot: 'bg-emerald-600' },
  { badge: 'bg-amber-50 text-amber-700 border-amber-200', icon: 'text-amber-600', dot: 'bg-amber-600' },
]

export const AcademicArchive: React.FC = () => {
  return (
    <section id="academic" className="relative bg-[#F8FAFC] text-slate-900 py-16 sm:py-24 border-b border-slate-200 overflow-hidden">
      {/* Soft background ambient warmth */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 07: Academic Background */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="07" title="Academic Background" theme="light" />
          <h2 className="font-heading font-extrabold text-slate-900 tracking-tight mt-1 text-3xl sm:text-4xl">
            Academic Archive &amp; Qualifications
          </h2>
          <p className="font-ui text-sm sm:text-base text-slate-600 max-w-lg mt-3">
            Formal legal education, university merits, and academic foundations.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-600 via-emerald-500 to-amber-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ACADEMIC_RECORDS.map((record, index) => {
            const colors = RECORD_COLORS[index % RECORD_COLORS.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-light p-6 sm:p-7 flex flex-col justify-between group rounded-xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-left hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between font-ui text-xs uppercase tracking-wider mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[0.65rem] font-bold border ${colors.badge}`}>
                      Record 0{index + 1}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 group-hover:scale-110 transition-transform">
                      <GraduationCap className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {record.degree}
                  </h3>

                  <div className="font-ui text-sm text-slate-700 font-medium mb-1">
                    {record.institution}{record.location && ` · ${record.location}`}
                  </div>

                  <div className="font-ui text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    <span>{record.field}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 font-ui text-xs text-slate-500 leading-relaxed">
                  {record.notation}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 08: Memberships & Civic Affiliations */}
        <div className="pt-12 border-t border-slate-200">
          <div className="flex flex-col items-center text-center mb-12">
            <SectionLabel number="08" title="Memberships &amp; Civic" theme="light" />
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Institutional Standing &amp; Affiliations
            </h3>
            <div className="mt-3 w-12 h-1 bg-amber-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {/* Bar Memberships */}
            <div className="card-light p-7 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                <div className="p-2 bg-blue-50 rounded-lg border border-blue-200">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-slate-900">Bar Memberships</h4>
                  <p className="text-xs text-slate-500">Statutory &amp; Appellate Associations</p>
                </div>
              </div>
              <div className="space-y-4">
                {BAR_MEMBERSHIPS.map((mem, i) => (
                  <div key={i} className="pb-3.5 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="font-ui text-[0.65rem] font-bold text-blue-600 uppercase tracking-wider mb-1">
                      {mem.role}
                    </div>
                    <div className="font-heading text-base font-bold text-slate-800 leading-snug">
                      {mem.organization}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Civic Affiliations + Languages */}
            <div className="space-y-6">
              <div className="card-light p-7 rounded-xl border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-200">
                    <Building2 className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-slate-900">Civic Institutions</h4>
                    <p className="text-xs text-slate-500">Public forums &amp; Cultural centers</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {CIVIC_INVOLVEMENT.map((civ, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <div className="font-heading text-sm font-bold text-slate-800">{civ.name}</div>
                      <div className="font-ui text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">{civ.city}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courtroom Languages */}
              <div className="card-light p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-ui text-[0.65rem] font-bold tracking-wider uppercase text-slate-400">
                      Courtroom Languages
                    </div>
                    <div className="font-heading text-base font-bold text-slate-900">
                      {CLIENT_PROFILE.languages.join(' · ')}
                    </div>
                  </div>
                </div>
                <div className="font-ui text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Enrolled 2005
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
