import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Award, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react'

export const AtTheBar: React.FC = () => {
  return (
    <section
      id="at-the-bar"
      className="relative bg-white text-slate-900 py-16 sm:py-24 border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle colorful ambient background glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      {/* Modern architectural dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="01" title="At the Bar" theme="light" />
          <h2 className="font-heading font-extrabold text-slate-900 tracking-tight text-3xl sm:text-4xl mt-1">
            Two Decades of Appellate Advocacy
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Huge "22+" display with dynamic colorful gradient */}
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative leading-none select-none drop-shadow-[0_10px_20px_rgba(37,99,235,0.15)]"
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontWeight: 900,
                fontSize: 'clamp(5.5rem, 15vw, 10.5rem)',
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 45%, #D97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              22+
            </motion.div>

            <div className="font-heading font-black text-slate-900 uppercase tracking-[0.08em] mt-1 text-2xl sm:text-3xl">
              Years at the Bar
            </div>
            <p className="font-ui text-base text-slate-600 max-w-md mt-4 leading-relaxed mx-auto md:mx-0">
              Uninterrupted judicial advocacy before the Hon'ble High Court of Judicature for Rajasthan and allied apex appellate tribunals.
            </p>

            {/* Factual Highlights with Colorful Checkmarks */}
            <div className="mt-6 space-y-2.5 text-left">
              {[
                'Specialized appellate litigation & constitutional review',
                'Empanelled Senior Panel Counsel for Government of India',
                'Decade-long Standing Counsel for Municipal Corporation'
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Credential card with interactive colorful hover & lift */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="card-light p-7 sm:p-9 relative rounded-xl border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.18)] hover:border-blue-300 transition-all duration-300 group"
          >
            {/* Top colorful gradient ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500 rounded-t-xl" />

            <div className="space-y-6 text-left">
              {[
                {
                  icon: <Award className="w-5 h-5 text-amber-600" strokeWidth={2.5} />,
                  bg: 'bg-amber-50 border-amber-200',
                  label: 'Bar Enrolment Number',
                  value: CLIENT_PROFILE.enrolmentNo,
                  sub: 'Enrolled under Advocates Act, 1961'
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-blue-600" strokeWidth={2.5} />,
                  bg: 'bg-blue-50 border-blue-200',
                  label: 'Statutory Authority',
                  value: CLIENT_PROFILE.barCouncil,
                  sub: 'State Roll of Advocates'
                },
                {
                  icon: <Scale className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />,
                  bg: 'bg-emerald-50 border-emerald-200',
                  label: 'Primary Seat of Practice',
                  value: 'Rajasthan High Court, Jaipur',
                  sub: 'Chamber 259, Block-E Campus',
                },
              ].map((item, i) => (
                <div key={i} className="group/item">
                  {i > 0 && <div className="h-px bg-slate-100 my-5" />}
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg border ${item.bg} shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-ui text-[0.65rem] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                        {item.label}
                      </span>
                      <div className="font-heading text-slate-900 text-lg sm:text-xl font-bold leading-tight">
                        {item.value}
                      </div>
                      <div className="font-ui text-xs text-slate-500 mt-1">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
