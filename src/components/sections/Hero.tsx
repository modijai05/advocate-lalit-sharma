import React from 'react'
import { motion } from 'framer-motion'
import { CLIENT_PROFILE } from '../../data/initialData'
import { ShieldCheck, Award, ArrowRight, ArrowDown } from 'lucide-react'

interface HeroProps {
  onExploreClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#000000] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ══ LEFT: Typography & Calls to Action ══ */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            {/* Judicial Affiliation Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 text-[0.7rem] font-ui tracking-[0.2em] uppercase text-neutral-300 border border-white/25"
            >
              <span>Rajasthan High Court · Chamber 259, Block-E</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
                Advocate Lalit Sharma
              </h1>
              <p className="font-serif text-lg sm:text-2xl text-neutral-300 font-normal italic">
                Counsel at Law · High Court of Judicature for Rajasthan
              </p>
            </motion.div>

            {/* Concise Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-ui text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light"
            >
              Over 22 years of continuous appellate representation before the High Court of Rajasthan at Jaipur. Practising across civil litigation, constitutional writ petitions, criminal appeals, revenue matters, and family dispute resolutions.
            </motion.p>

            {/* Statutory Compliance & Credentials Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 font-ui text-[0.75rem] text-neutral-300 pt-2 pb-4 border-b border-white/15"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span><strong>Enrolment:</strong> {CLIENT_PROFILE.enrolmentNo}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 border border-white/20">
                <Award className="w-3.5 h-3.5 text-white" />
                <span><strong>Standing:</strong> 22+ Years</span>
              </div>
              <div className="text-neutral-400 text-xs flex items-center gap-1 px-2 py-1">
                <span>Bar Council of Rajasthan</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreClick}
                id="hero-explore-profile-button"
                className="btn-classic-primary cursor-pointer"
              >
                <span>Explore Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#practice"
                className="btn-classic-outline"
              >
                <span>Practice Areas</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:9829233334"
                className="btn-classic-outline"
              >
                <span>Call now (9829233334)</span>
              </a>
            </motion.div>
          </div>

          {/* ══ RIGHT: Plain Unstyled Advocate Photo ══ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              <img
                src="/assets/images/advocate-lalit-sharma.jpg"
                alt="Advocate Lalit Sharma, Rajasthan High Court, Jaipur"
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex items-center justify-between border-t border-white/15 mt-10">
          <div className="font-ui text-[0.7rem] font-semibold tracking-[0.16em] text-neutral-400 uppercase">
            Rajasthan High Court Bar Association · Jaipur Bench
          </div>
          <a
            href="#at-the-bar"
            className="hidden sm:flex items-center gap-2 font-ui text-[0.7rem] tracking-wider text-neutral-300 hover:text-white uppercase transition-colors"
          >
            <span>Read Chambers Summary</span>
            <ArrowDown className="w-3.5 h-3.5 text-white" />
          </a>
        </div>
      </div>
    </section>
  )
}
