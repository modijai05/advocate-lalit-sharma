import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { Landmark, Compass, ShieldCheck, MapPin } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'
import { JudicialArchitectureGraphic } from '../brand/PracticeGraphics'

export const HighCourtChamber: React.FC = () => {
  const cards = [
    {
      icon: <Landmark className="w-6 h-6" />,
      label: 'Primary Seat',
      heading: 'Rajasthan High Court',
      body: "Practising continuously before the Jaipur Bench of the Rajasthan High Court, appearing before Hon'ble Single and Division Benches on substantial questions of law.",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      label: 'Chamber Designation',
      heading: 'Chamber 259, Block-E',
      body: 'Located within Block-E of the High Court Campus, Jaipur. Dedicated to matter preparation, client consultation, conference with assisting counsel, and legal research.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      label: 'Disciplinary Rigour',
      heading: 'Appellate Preparation',
      body: 'Every matter is approached with exhaustive brief analysis, thorough cross-checking of trial court records, and precise formulation of constitutional and statutory arguments.',
    },
  ]

  return (
    <section className="relative bg-[#F5F3EE] text-[#1A1917] py-24 sm:py-32 border-b border-[#D8D4C8] overflow-hidden">
      {/* Dot grid for parchment texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A1917 0.5px, transparent 0.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="02" title="Rajasthan High Court" theme="light" />
          <h2 className="font-heading font-bold text-[#1A1917] tracking-tight mt-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Chamber 259, Block-E
          </h2>
          <p className="font-ui text-[0.72rem] font-bold tracking-[0.2em] text-[#A8873A] uppercase mt-3">
            Seat of Judicial Advocacy &amp; Legal Drafting
          </p>
          <div className="mt-5 w-12 h-[2px] bg-gradient-to-r from-[#A8873A] to-transparent" />
        </div>

        {/* Architectural illustration */}
        <div className="max-w-3xl mx-auto mb-16 text-[#1A1917]">
          <JudicialArchitectureGraphic className="w-full h-24 sm:h-28 opacity-60" />
        </div>

        {/* 3-Column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-white p-8 sm:p-9 border border-[#D8D4C8] hover:border-[#A8873A]/60 shadow-sm hover:shadow-md transition-all duration-300 text-left rounded-sm group"
            >
              {/* Icon */}
              <div className="w-12 h-12 border-2 border-[#A8873A]/40 group-hover:border-[#A8873A] bg-[#FAF7F0] flex items-center justify-center mb-6 text-[#A8873A] rounded-sm transition-colors">
                {card.icon}
              </div>

              <div className="font-ui text-[0.6rem] font-bold tracking-[0.2em] text-[#A8873A] uppercase mb-2">
                {card.label}
              </div>

              <h3 className="font-heading text-[1.15rem] font-bold text-[#1A1917] mb-3 leading-snug">
                {card.heading}
              </h3>

              <p className="font-ui text-[0.875rem] text-[#4A4843] leading-[1.8]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Map link */}
        <div className="mt-14 text-center">
          <a
            href={CLIENT_PROFILE.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-ui text-[0.72rem] font-bold tracking-[0.18em] text-[#1A1917] hover:text-[#A8873A] uppercase border-b-2 border-[#1A1917] hover:border-[#A8873A] pb-1 transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-[#A8873A]" />
            <span>View Chambers on Google Maps ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
