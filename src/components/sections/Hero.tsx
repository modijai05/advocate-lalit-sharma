import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

interface HeroProps {
  onExploreClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      className="relative min-h-[100svh] w-full bg-[#050505] text-[#FFFFFF] flex items-center overflow-hidden pt-20 pb-12"
      aria-label="Advocate Lalit Sharma — Hero"
    >
      {/* Real-life Law Library Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.12 }}
          animate={{ scale: 1, opacity: 0.18 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          src="/assets/images/law-library-books.jpg"
          alt="Law Library Background"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_90%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100svh-8rem)]">

          {/* ══ LEFT: Typography ══ */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">

            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-block w-6 h-[1.5px] bg-white" />
              <span className="font-ui text-[0.62rem] font-bold tracking-[0.24em] text-neutral-300 uppercase">
                Advocate · Rajasthan High Court, Jaipur
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-white leading-[1.0] tracking-tight"
                style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
              >
                LALIT<br />
                <span className="font-heading italic font-light text-neutral-300" style={{ fontSize: '0.72em' }}>
                  SHARMA
                </span>
              </motion.h1>
            </div>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
              className="max-w-lg mb-6"
            >
              <p className="font-serif text-[1rem] sm:text-[1.1rem] leading-[1.65] text-neutral-300 italic border-l-2 border-white pl-4">
                22+ years of practice before the Rajasthan High Court — Civil, Constitutional, Criminal, Revenue &amp; Family Law.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.62 }}
              className="flex flex-wrap items-center gap-4 font-ui text-[0.78rem] text-neutral-300 mb-8 pb-6 border-b border-white/12"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                <span><strong className="text-white">Enrolment:</strong> {CLIENT_PROFILE.enrolmentNo}</span>
              </div>
              <div className="w-px h-3 bg-white/20 hidden sm:block" />
              <div><strong className="text-white">Chamber</strong> 259, Block-E</div>
              <div className="w-px h-3 bg-white/20 hidden sm:block" />
              <div className="text-neutral-400">Bar Council of Rajasthan</div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onExploreClick}
                id="hero-explore-profile-button"
                className="btn-gold rounded-sm shadow-xl group cursor-pointer"
              >
                <span>Explore Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="#practice"
                className="btn-outline font-ui inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.15em] uppercase text-white hover:text-white transition-colors py-2 px-4 border border-white/20 hover:border-white rounded-sm"
              >
                <span>Practice Areas</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* ══ RIGHT: Portrait ══ */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none group"
            >
              {/* Corner frames */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2.5 -left-2.5 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-white pointer-events-none z-10"
              />
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-2.5 -right-2.5 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-white pointer-events-none z-10"
              />

              <div className="relative overflow-hidden bg-[#111] border border-white/20 aspect-[3/4] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.9)] rounded-sm">
                <img
                  src="/assets/images/advocate-lalit-sharma.jpg"
                  alt="Advocate Lalit Sharma, Rajasthan High Court, Jaipur"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent pointer-events-none" />

                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-2 flex items-center justify-between rounded-sm shadow-lg">
                    <span className="font-heading text-[0.78rem] font-bold text-white">Advocate Lalit Sharma</span>
                    <span className="font-ui text-[0.58rem] font-semibold tracking-wider text-neutral-300 uppercase">Ch. 259</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-4">
          <div className="flex items-center gap-2 font-ui text-[0.6rem] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>High Court of Judicature for Rajasthan</span>
          </div>
          <a
            href="#at-the-bar"
            className="hidden sm:flex items-center gap-1.5 font-ui text-[0.6rem] font-semibold tracking-wider text-neutral-400 hover:text-white uppercase transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
