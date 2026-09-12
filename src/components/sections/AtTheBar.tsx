import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Award, ShieldCheck, Scale } from 'lucide-react'

export const AtTheBar: React.FC = () => {
  return (
    <section
      id="at-the-bar"
      className="relative bg-[#0C0C0C] text-[#F0EEE8] py-24 sm:py-32 border-t border-b border-white/10 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="01" title="At the Bar" theme="dark" />
          <p className="font-ui text-[0.72rem] font-bold tracking-[0.22em] text-[#C9A84C] uppercase mt-1">
            Standing &amp; Adjudicatory Record
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Giant "22+" display */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative leading-none select-none"
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontWeight: 900,
                fontSize: 'clamp(7rem, 18vw, 14rem)',
                letterSpacing: '-0.04em',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #C9A84C 60%, #8A6A22 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              22+
            </motion.div>

            <div
              className="font-heading font-bold text-white uppercase tracking-[0.12em] mt-2"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)' }}
            >
              Years at the Bar
            </div>

            <p className="font-ui text-[0.95rem] sm:text-[1rem] text-[#9B9790] max-w-xl mt-5 leading-[1.85]">
              Two decades of continuous judicial advocacy, appellate presentation,
              and rigorous legal drafting before the Rajasthan High Court and allied forums.
            </p>
          </div>

          {/* Right: Credential card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="bg-[#111] border border-[#C9A84C]/30 p-8 sm:p-10 relative rounded-sm shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]"
            >
              {/* Gold top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#E2C475] to-[#C9A84C] rounded-t-sm" />

              <div className="space-y-7 text-left">
                {[
                  {
                    icon: <Award className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                    label: 'Statutory Enrolment Number',
                    value: CLIENT_PROFILE.enrolmentNo,
                    valueSize: 'text-2xl sm:text-3xl font-black'
                  },
                  {
                    icon: <ShieldCheck className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                    label: 'Regulatory Bar Council',
                    value: CLIENT_PROFILE.barCouncil,
                    valueSize: 'text-lg sm:text-xl font-bold'
                  },
                  {
                    icon: <Scale className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                    label: 'Primary Jurisdictional Forum',
                    value: 'Rajasthan High Court, Jaipur',
                    sub: 'Chamber 259, Block-E, High Court Campus',
                    valueSize: 'text-lg sm:text-xl font-bold'
                  },
                ].map((item, i) => (
                  <div key={i}>
                    {i > 0 && <div className="h-px bg-white/10 mb-7" />}
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <span className="font-ui text-[0.6rem] font-bold tracking-[0.2em] text-[#C9A84C] uppercase">{item.label}</span>
                    </div>
                    <div className={`font-heading text-white ${item.valueSize}`}>{item.value}</div>
                    {item.sub && (
                      <div className="font-ui text-[0.8rem] text-[#9B9790] mt-1">{item.sub}</div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
