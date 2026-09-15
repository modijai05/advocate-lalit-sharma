import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { Landmark, Compass, ShieldCheck, MapPin, ExternalLink } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

export const HighCourtChamber: React.FC = () => {
  const cards = [
    {
      icon: <Landmark className="w-5 h-5 text-white" />,
      label: 'Primary Seat',
      heading: 'Rajasthan High Court',
      body: "Appearing before Hon'ble Single and Division Benches on substantial questions of constitutional, civil & appellate law.",
    },
    {
      icon: <Compass className="w-5 h-5 text-white" />,
      label: 'Chamber Location',
      heading: 'Chamber 259, Block-E',
      body: 'Dedicated chamber for brief conferences, legal drafting, and client consultation within the High Court Campus, Jaipur.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      label: 'Appellate Method',
      heading: 'Appellate Precision',
      body: 'Every brief involves exhaustive trial court record analysis, precedent cross-referencing, and tailored oral advocacy.',
    },
  ]

  return (
    <section className="relative bg-[#000000] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/20 overflow-hidden">
      {/* High Court Sandstone Architecture Monochrome Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/high-court-columns.jpg"
          alt="High Court Architecture"
          className="w-full h-full object-cover object-center opacity-15 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/80 to-[#000000]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="02" title="Rajasthan High Court" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Chamber 259, Block-E
          </h2>
          <p className="font-ui text-sm sm:text-base text-neutral-300 max-w-xl mt-2">
            Situated within the campus of the Rajasthan High Court at Jaipur.
          </p>
          <div className="mt-4 w-12 h-0.5 bg-white" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-7 border border-white/20 bg-[#0A0A0A] text-left"
            >
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <div className="font-ui text-[0.65rem] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2">
                {card.label}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3 leading-snug">
                {card.heading}
              </h3>
              <p className="font-ui text-sm text-neutral-300 leading-relaxed font-light">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Button in Classic Monochrome */}
        <div className="mt-12 text-center">
          <a
            href={CLIENT_PROFILE.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white hover:bg-white hover:text-black font-ui text-xs font-bold tracking-wider uppercase transition-all duration-150"
          >
            <MapPin className="w-4 h-4" />
            <span>Open Chamber in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
