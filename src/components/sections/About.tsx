import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Scale, Award, Landmark, Languages } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#0A0A0A] text-[#F0EEE8] py-24 sm:py-32 border-b border-white/10">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right,#1e1e1e 1px,transparent 1px),linear-gradient(to bottom,#1e1e1e 1px,transparent 1px)',
          backgroundSize: '5rem 5rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <SectionLabel number="05" title="Profile" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Advocate Lalit Sharma
          </h2>
          <p className="font-ui text-[0.72rem] font-bold tracking-[0.2em] text-[#C9A84C] uppercase mt-3">
            Professional Profile &amp; Practice Ethos
          </p>
          {/* Gold rule */}
          <div className="mt-5 w-12 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </div>

        {/* ── Editorial Split: Left Photo, Right Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              {/* Gold frame corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C] z-10" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C] z-10" />

              <div className="relative border border-white/15 overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] bg-[#111] rounded-sm">
                <img
                  src="/assets/images/advocate-lalit-sharma.jpg"
                  alt="Advocate Lalit Sharma in his legal chambers"
                  className="w-full h-auto aspect-[3/4] object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent p-5 text-left">
                  <div className="font-ui text-[0.6rem] font-bold tracking-[0.22em] text-[#C9A84C] uppercase">
                    Chamber 259 · Block-E
                  </div>
                  <div className="font-heading text-[1rem] font-bold text-white mt-0.5">
                    Lalit Sharma &amp; Associates
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Lead paragraph — Lora */}
              <p className="font-serif text-[1.1rem] sm:text-[1.2rem] text-[#F0EEE8] leading-[1.75] font-normal italic">
                {CLIENT_PROFILE.biographyIntro}
              </p>

              <div className="flex items-center gap-4">
                <span className="font-ui text-[0.62rem] font-black tracking-[0.24em] text-[#C9A84C] uppercase">At the Bar</span>
                <span className="flex-1 h-px bg-white/12" />
              </div>

              {/* Chamber ethos — Inter */}
              <p className="font-ui text-[0.95rem] sm:text-[1rem] text-[#D9D6CD] leading-[1.85]">
                {CLIENT_PROFILE.biographyChamber}
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {[
                  {
                    icon: <Award className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                    label: 'Bar Enrolment',
                    value: CLIENT_PROFILE.enrolmentNo,
                    sub: 'Bar Council of Rajasthan'
                  },
                  {
                    icon: <Landmark className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                    label: 'Chamber',
                    value: '259, Block-E',
                    sub: 'Rajasthan High Court'
                  },
                  {
                    icon: <Scale className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                    label: 'Experience',
                    value: '22+ Years',
                    sub: 'Continuous Practice'
                  },
                  {
                    icon: <Languages className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />,
                    label: 'Languages',
                    value: 'Hindi · English',
                    sub: 'Court & Client'
                  },
                ].map(card => (
                  <div
                    key={card.label}
                    className="p-4 bg-white/[0.03] border border-white/10 rounded-sm hover:border-[#C9A84C]/30 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      {card.icon}
                      <span className="font-ui text-[0.6rem] font-bold tracking-wider text-[#9B9790] uppercase">{card.label}</span>
                    </div>
                    <div className="font-heading text-[0.9rem] font-bold text-white leading-tight">{card.value}</div>
                    <div className="font-ui text-[0.65rem] text-[#5E5D58] mt-0.5">{card.sub}</div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="pt-2 text-[0.85rem] text-[#9B9790] font-ui">
                Languages of practice:{' '}
                <span className="text-[#D9D6CD] font-medium">
                  {CLIENT_PROFILE.languages.join(' · ')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
