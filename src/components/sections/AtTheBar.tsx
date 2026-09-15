import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Award, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react'

export const AtTheBar: React.FC = () => {
  return (
    <section
      id="at-the-bar"
      className="relative bg-white text-black py-16 sm:py-24 border-b border-black/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="01" title="At the Bar" theme="light" />
          <h2 className="font-heading font-bold text-black tracking-tight text-3xl sm:text-4xl mt-1">
            Two Decades of Appellate Advocacy
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Huge "22+" display in solid classic black */}
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative leading-none select-none text-black font-heading font-black"
              style={{
                fontSize: 'clamp(5.5rem, 14vw, 9.5rem)',
                letterSpacing: '-0.04em',
              }}
            >
              22+
            </motion.div>

            <div className="font-heading font-bold text-black uppercase tracking-[0.08em] mt-1 text-2xl sm:text-3xl">
              Years at the Bar
            </div>
            <p className="font-ui text-base text-neutral-600 max-w-md mt-4 leading-relaxed mx-auto md:mx-0">
              Uninterrupted judicial advocacy before the Hon'ble High Court of Judicature for Rajasthan and allied apex appellate tribunals.
            </p>

            {/* Factual Highlights with Clean Checkmarks */}
            <div className="mt-6 space-y-2.5 text-left">
              {[
                'Specialized appellate litigation & constitutional review',
                'Empanelled Senior Panel Counsel for Government of India',
                'Decade-long Standing Counsel for Municipal Corporation'
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Credential card with clean classic borders */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 sm:p-9 relative border border-neutral-300 bg-white shadow-xs text-left"
          >
            <div className="space-y-6">
              {[
                {
                  icon: <Award className="w-5 h-5 text-black" strokeWidth={2} />,
                  label: 'Bar Enrolment Number',
                  value: CLIENT_PROFILE.enrolmentNo,
                  sub: 'Enrolled under Advocates Act, 1961'
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-black" strokeWidth={2} />,
                  label: 'Statutory Authority',
                  value: CLIENT_PROFILE.barCouncil,
                  sub: 'State Roll of Advocates'
                },
                {
                  icon: <Scale className="w-5 h-5 text-black" strokeWidth={2} />,
                  label: 'Primary Seat of Practice',
                  value: 'Rajasthan High Court, Jaipur',
                  sub: 'Chamber 259, Block-E Campus',
                },
              ].map((item, i) => (
                <div key={i}>
                  {i > 0 && <div className="h-px bg-neutral-200 my-5" />}
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-neutral-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-ui text-[0.65rem] font-bold tracking-wider text-neutral-500 uppercase block mb-1">
                        {item.label}
                      </span>
                      <div className="font-heading text-black text-lg sm:text-xl font-bold leading-tight">
                        {item.value}
                      </div>
                      <div className="font-ui text-xs text-neutral-600 mt-1">
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
