import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ShieldCheck, Scale, Award } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

interface HeroProps {
  onExploreClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      className="relative min-h-[100svh] w-full bg-[#050816] text-[#FFFFFF] flex items-center overflow-hidden pt-20 pb-12"
      aria-label="Advocate Lalit Sharma — Hero"
    >
      {/* Real-life Colorful Law Library Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.22 }}
          animate={{ scale: 1, opacity: 0.32 }}
          transition={{ duration: 3.5, ease: 'easeOut' }}
          src="/assets/images/law-library-books.jpg"
          alt="Law Library Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Colorful Gradient Overlays for High Contrast & Dramatic Ambiance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/85 to-[#050816]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050816_90%)]" />

        {/* Ambient Vibrant Floating Glow Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Subtle Floating Legal Scale Watermark in Background */}
      <div className="absolute -right-16 top-1/3 opacity-[0.04] pointer-events-none animate-float">
        <Scale className="w-96 h-96 text-amber-300" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100svh-8rem)]">

          {/* ══ LEFT: Typography & Calls to Action ══ */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">

            {/* Kicker Badge with Glowing Gold Accent */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.07] border border-amber-500/30 backdrop-blur-md mb-6 w-fit shadow-[0_0_15px_rgba(245,158,11,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-ui text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.2em] text-amber-300 uppercase">
                Advocate · Rajasthan High Court, Jaipur
              </span>
            </motion.div>

            {/* Main Heading / Name */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-white leading-[1.0] tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
              >
                LALIT<br />
                <span className="font-heading italic font-light gradient-text-gold" style={{ fontSize: '0.75em' }}>
                  SHARMA
                </span>
              </motion.h1>
            </div>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="max-w-xl mb-6"
            >
              <p className="font-serif text-[1.05rem] sm:text-[1.15rem] leading-[1.7] text-slate-200 italic border-l-3 border-amber-400 pl-4 bg-white/[0.02] py-1 rounded-r-md">
                22+ years of senior practice before the Rajasthan High Court — Civil, Constitutional, Criminal, Revenue &amp; Family Law.
              </p>
            </motion.div>

            {/* Credentials Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 font-ui text-[0.8rem] text-slate-300 mb-8 pb-6 border-b border-white/15"
            >
              <div className="flex items-center gap-1.5 bg-blue-900/30 px-2.5 py-1 rounded border border-blue-500/30 text-blue-200">
                <ShieldCheck className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
                <span><strong>Enrolment:</strong> {CLIENT_PROFILE.enrolmentNo}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-amber-900/30 px-2.5 py-1 rounded border border-amber-500/30 text-amber-200">
                <Award className="w-4 h-4 text-amber-400" strokeWidth={2.5} />
                <span><strong>Chamber:</strong> 259, Block-E</span>
              </div>
              <div className="text-slate-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Bar Council of Rajasthan</span>
              </div>
            </motion.div>

            {/* Interactive CTAs with High-End Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onExploreClick}
                id="hero-explore-profile-button"
                className="btn-vibrant-gold shimmer-hover group cursor-pointer"
              >
                <span>Explore Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <a
                href="#practice"
                className="btn-vibrant-outline group"
              >
                <span>Practice Areas</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* ══ RIGHT: Full-Color Portrait with Animated Aura ══ */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none group"
            >
              {/* Animated Glowing Gradient Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 via-amber-500/30 to-purple-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-80 group-hover:opacity-100 -z-10" />

              {/* Glowing Corner Accents */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-3 border-l-3 border-amber-400 pointer-events-none z-20 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-3 border-r-3 border-amber-400 pointer-events-none z-20 group-hover:scale-110 transition-transform duration-300" />

              {/* Portrait Container - Full Color! */}
              <div className="relative overflow-hidden bg-[#0A1128] border-2 border-white/20 aspect-[3/4] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] rounded-lg hover-lift">
                <img
                  src="/assets/images/advocate-lalit-sharma.jpg"
                  alt="Advocate Lalit Sharma, Rajasthan High Court, Jaipur"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Subtle bottom shadow to anchor caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent to-transparent pointer-events-none" />

                {/* Caption Floating Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <div className="bg-[#0A1128]/90 backdrop-blur-md border border-amber-500/30 px-4 py-2.5 flex items-center justify-between rounded-md shadow-2xl">
                    <div>
                      <span className="font-heading text-[0.85rem] font-bold text-white block">Advocate Lalit Sharma</span>
                      <span className="font-ui text-[0.6rem] font-semibold text-amber-400">High Court of Rajasthan</span>
                    </div>
                    <span className="font-ui text-[0.62rem] font-bold tracking-wider text-white bg-amber-600/80 px-2 py-0.5 rounded uppercase">
                      Ch. 259
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-6">
          <div className="flex items-center gap-2.5 font-ui text-[0.68rem] font-semibold tracking-[0.16em] text-slate-300 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>High Court of Judicature for Rajasthan</span>
          </div>
          <a
            href="#at-the-bar"
            className="hidden sm:flex items-center gap-2 font-ui text-[0.68rem] font-bold tracking-wider text-amber-300 hover:text-amber-200 uppercase transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  )
}
