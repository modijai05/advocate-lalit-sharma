import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Award, ShieldCheck, Scale } from 'lucide-react'

export const AtTheBar: React.FC = () => {
  return (
    <section
      id="at-the-bar"
      className="relative bg-[#0C0C0C] text-[#F0EEE8] py-16 sm:py-24 border-t border-b border-white/10 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="01" title="At the Bar" theme="dark" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: "22+" display with ambient glow */}
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            <div className="absolute top-1/2 left-1/2 md:left-1/3 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#C9A84C]/15 rounded-full blur-3xl pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative leading-none select-none drop-shadow-[0_0_25px_rgba(201,168,76,0.3)]"
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontWeight: 900,
                fontSize: 'clamp(5rem, 14vw, 10rem)',
                letterSpacing: '-0.04em',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #C9A84C 60%, #8A6A22 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              22+
            </motion.div>

            <div className="font-heading font-bold text-white uppercase tracking-[0.1em] mt-1" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
              Years at the Bar
            </div>
            <p className="font-ui text-[0.9rem] text-[#9B9790] max-w-sm mt-4 leading-[1.8] mx-auto md:mx-0">
              Continuous judicial advocacy before the Rajasthan High Court and allied forums.
            </p>
          </div>

          {/* Right: Credential card with interactive glow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="bg-[#111] border border-[#C9A84C]/35 hover:border-[#C9A84C] p-6 sm:p-8 relative rounded-sm shadow-[0_20px_40px_-8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(201,168,76,0.18)] transition-all duration-300 group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#E2C475] to-[#C9A84C] rounded-t-sm shadow-[0_0_10px_rgba(201,168,76,0.7)]" />

            <div className="space-y-5 text-left">
              {[
                {
                  icon: <Award className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                  label: 'Enrolment Number',
                  value: CLIENT_PROFILE.enrolmentNo,
                },
                {
                  icon: <ShieldCheck className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                  label: 'Bar Council',
                  value: CLIENT_PROFILE.barCouncil,
                },
                {
                  icon: <Scale className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                  label: 'Primary Forum',
                  value: 'Rajasthan High Court, Jaipur',
                  sub: 'Chamber 259, Block-E',
                },
              ].map((item, i) => (
                <div key={i}>
                  {i > 0 && <div className="h-px bg-white/10 mb-5" />}
                  <div className="flex items-center gap-2 mb-1.5">
                    {item.icon}
                    <span className="font-ui text-[0.58rem] font-bold tracking-[0.2em] text-[#C9A84C] uppercase">{item.label}</span>
                  </div>
                  <div className="font-heading text-white text-lg font-bold">{item.value}</div>
                  {item.sub && (
                    <div className="font-ui text-[0.78rem] text-[#9B9790] mt-0.5">{item.sub}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
