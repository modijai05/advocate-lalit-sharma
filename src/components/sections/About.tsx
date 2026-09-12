import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Scale, Award, Landmark, Languages } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#0A0A0A] text-[#F0EEE8] py-16 sm:py-24 border-b border-white/10">
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'linear-gradient(to right,#1e1e1e 1px,transparent 1px),linear-gradient(to bottom,#1e1e1e 1px,transparent 1px)',
          backgroundSize: '5rem 5rem'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="05" title="Profile" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Advocate Lalit Sharma
          </h2>
          <div className="mt-4 w-10 h-[2px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left: Portrait */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-[280px] sm:max-w-sm md:max-w-none"
            >
              <div className="absolute -top-2 -left-2 w-7 h-7 border-t-2 border-l-2 border-[#C9A84C] z-10" />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 border-b-2 border-r-2 border-[#C9A84C] z-10" />

              <div className="relative border border-white/15 overflow-hidden shadow-[0_20px_40px_-8px_rgba(0,0,0,0.7)] bg-[#111] rounded-sm">
                <img
                  src="/assets/images/advocate-lalit-sharma.jpg"
                  alt="Advocate Lalit Sharma in his legal chambers"
                  className="w-full h-auto aspect-[3/4] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A0A0A] to-transparent p-4 text-left">
                  <div className="font-ui text-[0.58rem] font-bold tracking-[0.2em] text-[#C9A84C] uppercase">Chamber 259 · Block-E</div>
                  <div className="font-heading text-[0.9rem] font-bold text-white mt-0.5">Lalit Sharma &amp; Associates</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <p className="font-serif text-[1rem] sm:text-[1.05rem] text-[#F0EEE8] leading-[1.75] italic">
                {CLIENT_PROFILE.biographyIntro}
              </p>

              <p className="font-ui text-[0.88rem] text-[#D9D6CD] leading-[1.85]">
                {CLIENT_PROFILE.biographyChamber}
              </p>

              {/* Credential Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                {[
                  { icon: <Award className="w-3.5 h-3.5 text-[#C9A84C]" strokeWidth={2} />, label: 'Enrolment', value: CLIENT_PROFILE.enrolmentNo },
                  { icon: <Landmark className="w-3.5 h-3.5 text-[#C9A84C]" strokeWidth={2} />, label: 'Chamber', value: '259, Block-E' },
                  { icon: <Scale className="w-3.5 h-3.5 text-[#C9A84C]" strokeWidth={2} />, label: 'Experience', value: '22+ Years' },
                  { icon: <Languages className="w-3.5 h-3.5 text-[#C9A84C]" strokeWidth={2} />, label: 'Languages', value: 'Hindi · English' },
                ].map(card => (
                  <div
                    key={card.label}
                    className="p-3.5 bg-white/[0.03] border border-white/10 rounded-sm hover:border-[#C9A84C]/30 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      {card.icon}
                      <span className="font-ui text-[0.55rem] font-bold tracking-wider text-[#9B9790] uppercase">{card.label}</span>
                    </div>
                    <div className="font-heading text-[0.85rem] font-bold text-white leading-tight">{card.value}</div>
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
