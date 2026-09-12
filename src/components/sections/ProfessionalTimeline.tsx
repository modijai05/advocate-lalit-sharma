import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { TIMELINE_DATA } from '../../data/initialData'
import { Landmark, Shield, Scale } from 'lucide-react'

export const ProfessionalTimeline: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Landmark className="w-5 h-5 text-[#A8873A]" />
      case 1:
        return <Shield className="w-5 h-5 text-[#A8873A]" />
      default:
        return <Scale className="w-5 h-5 text-[#A8873A]" />
    }
  }

  return (
    <section id="timeline" className="relative bg-[#F5F3EE] text-[#1A1917] py-24 sm:py-32 border-b border-[#D8D4C8]">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #1A1917 0.5px, transparent 0.5px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <SectionLabel number="06" title="Professional Record" theme="light" />
          <h2 className="font-heading font-bold text-[#1A1917] tracking-tight mt-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Professional Timeline
          </h2>
          <p className="font-ui text-[0.72rem] font-bold tracking-[0.2em] text-[#A8873A] uppercase mt-3">
            Standing &amp; Counsel Appointments Across Two Decades
          </p>
          <div className="mt-5 w-12 h-[2px] bg-gradient-to-r from-[#A8873A] to-transparent" />
        </div>

        {/* Vertical Timeline with Advocate's Tie Spine */}
        <div className="relative">
          {/* Vertical central tie spine for desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#DCD9D0]">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="w-full bg-[#C9A84C]"
            />
          </div>

          {/* Spine for mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-[#DCD9D0]">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="w-full bg-[#C9A84C]"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-24">
            {TIMELINE_DATA.map((entry, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node with Advocate Tie Motif */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border-2 border-[#C9A84C] flex items-center justify-center shadow-lg">
                      {getIcon(index)}
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, y: 25, x: isEven ? 25 : -25 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className={`ml-16 md:ml-0 md:w-[44%] ${
                      isEven ? 'md:mr-auto text-left' : 'md:ml-auto text-left'
                    }`}
                  >
                    <div className="bg-[#FFFFFF] p-7 border border-[#D8D4C8] hover:border-[#A8873A]/50 shadow-md relative rounded-sm transition-all duration-300">
                      {/* Top Year / Period Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A0A0A] text-[#C9A84C] font-ui text-[0.6rem] font-bold tracking-[0.18em] uppercase mb-4 rounded-sm">
                        <span>{entry.period}</span>
                      </div>

                      <h3 className="font-heading text-[1.1rem] font-bold text-[#1A1917] mb-1.5 leading-snug">
                        {entry.designation}
                      </h3>

                      <div className="font-ui text-[0.875rem] text-[#4A4843] mb-2">
                        {entry.forum}
                      </div>

                      <div className="font-ui text-[0.65rem] font-bold text-[#A8873A] uppercase tracking-wider mb-4 pb-3 border-b border-[#D8D4C8]">
                        {entry.authority}
                      </div>

                      {entry.description && (
                        <p className="font-ui text-[0.85rem] text-[#4A4843] leading-[1.8]">
                          {entry.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
