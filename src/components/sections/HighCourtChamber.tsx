import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { Landmark, Compass, ShieldCheck, MapPin, ExternalLink } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

export const HighCourtChamber: React.FC = () => {
  const cards = [
    {
      icon: <Landmark className="w-6 h-6 text-sky-400" />,
      bg: 'bg-sky-500/10 border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]',
      label: 'Primary Seat',
      heading: 'Rajasthan High Court',
      body: "Appearing before Hon'ble Single and Division Benches on substantial questions of constitutional, civil & appellate law.",
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      bg: 'bg-amber-500/10 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]',
      label: 'Chamber Location',
      heading: 'Chamber 259, Block-E',
      body: 'Dedicated chamber for brief conferences, legal drafting, and client consultation within the High Court Campus, Jaipur.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      bg: 'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
      label: 'Appellate Method',
      heading: 'Appellate Precision',
      body: 'Every brief involves exhaustive trial court record analysis, precedent cross-referencing, and tailored oral advocacy.',
    },
  ]

  return (
    <section className="relative bg-[#070D1F] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/12 overflow-hidden">
      {/* Real-life Full-Color High Court Sandstone Colonnade Ambient Imagery */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/high-court-columns.jpg"
          alt="High Court Architecture"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D1F] via-[#070D1F]/80 to-[#070D1F]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="02" title="Rajasthan High Court" theme="dark" />
          <h2 className="font-heading font-extrabold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Chamber 259, Block-E
          </h2>
          <p className="font-ui text-sm sm:text-base text-slate-300 max-w-xl mt-3">
            Situated within the majestic campus of the Rajasthan High Court at Jaipur.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sky-400 via-amber-400 to-emerald-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-dark p-7 border border-white/15 hover:border-sky-400/50 text-left rounded-xl shadow-2xl group hover-lift"
            >
              <div className={`w-12 h-12 rounded-xl border ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <div className="font-ui text-[0.65rem] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
                {card.label}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3 leading-snug group-hover:text-sky-300 transition-colors">
                {card.heading}
              </h3>
              <p className="font-ui text-sm text-slate-300 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Google Maps Button with Glowing Hover */}
        <div className="mt-12 text-center">
          <a
            href={CLIENT_PROFILE.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-sky-400 text-white font-ui text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <MapPin className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>Open Chamber in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  )
}
