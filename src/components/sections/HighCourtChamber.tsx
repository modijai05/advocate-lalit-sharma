import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { Landmark, Compass, ShieldCheck, MapPin } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

export const HighCourtChamber: React.FC = () => {
  const cards = [
    {
      icon: <Landmark className="w-5 h-5" />,
      label: 'Primary Seat',
      heading: 'Rajasthan High Court',
      body: "Appearing before Hon'ble Single and Division Benches on substantial questions of law.",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      label: 'Chamber',
      heading: 'Chamber 259, Block-E',
      body: 'Dedicated to matter preparation, client consultation and legal research within the High Court Campus, Jaipur.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      label: 'Approach',
      heading: 'Appellate Precision',
      body: 'Every matter involves exhaustive brief analysis, trial court record review, and precise constitutional argument formulation.',
    },
  ]

  return (
    <section className="relative bg-[#F5F3EE] text-[#1A1917] py-16 sm:py-24 border-b border-[#D8D4C8] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A1917 0.5px, transparent 0.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="02" title="Rajasthan High Court" theme="light" />
          <h2 className="font-heading font-bold text-[#1A1917] tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Chamber 259, Block-E
          </h2>
          <div className="mt-4 w-10 h-[2px] bg-gradient-to-r from-[#A8873A] to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 border border-[#D8D4C8] hover:border-[#A8873A]/60 shadow-sm hover:shadow-md transition-all duration-300 text-left rounded-sm group"
            >
              <div className="w-10 h-10 border-2 border-[#A8873A]/40 group-hover:border-[#A8873A] bg-[#FAF7F0] flex items-center justify-center mb-5 text-[#A8873A] rounded-sm transition-colors">
                {card.icon}
              </div>
              <div className="font-ui text-[0.58rem] font-bold tracking-[0.2em] text-[#A8873A] uppercase mb-1.5">{card.label}</div>
              <h3 className="font-heading text-[1.05rem] font-bold text-[#1A1917] mb-2 leading-snug">{card.heading}</h3>
              <p className="font-ui text-[0.83rem] text-[#4A4843] leading-[1.75]">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={CLIENT_PROFILE.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-ui text-[0.7rem] font-bold tracking-[0.16em] text-[#1A1917] hover:text-[#A8873A] uppercase border-b-2 border-[#1A1917] hover:border-[#A8873A] pb-1 transition-all duration-200"
          >
            <MapPin className="w-3.5 h-3.5 text-[#A8873A]" />
            <span>View on Google Maps ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
