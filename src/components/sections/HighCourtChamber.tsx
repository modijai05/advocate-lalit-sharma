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
    <section className="relative bg-[#070707] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/12 overflow-hidden">
      {/* Real High Court Colonnade Ambient Imagery */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <img
          src="/assets/images/high-court-columns.jpg"
          alt="High Court Architecture"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-transparent to-[#070707]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="02" title="Rajasthan High Court" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Chamber 259, Block-E
          </h2>
          <div className="mt-4 w-12 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0E0E0E] p-6 border border-white/12 hover:border-white/40 shadow-xl transition-all duration-300 text-left rounded-sm group hover:-translate-y-1"
            >
              <div className="w-10 h-10 border border-white/20 group-hover:border-white bg-white/[0.04] flex items-center justify-center mb-5 text-white rounded-sm transition-colors">
                {card.icon}
              </div>
              <div className="font-ui text-[0.58rem] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1.5">{card.label}</div>
              <h3 className="font-heading text-[1.05rem] font-bold text-white mb-2 leading-snug">{card.heading}</h3>
              <p className="font-ui text-[0.83rem] text-neutral-300 leading-[1.75]">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={CLIENT_PROFILE.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-ui text-[0.7rem] font-bold tracking-[0.16em] text-neutral-300 hover:text-white uppercase border-b border-neutral-600 hover:border-white pb-1 transition-all duration-200"
          >
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>View on Google Maps ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
