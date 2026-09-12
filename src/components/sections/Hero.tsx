import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ShieldCheck, Scale, Phone, MessageSquare } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

interface HeroProps {
  onExploreClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      className="relative min-h-[100svh] w-full bg-[#0A0A0A] text-[#F0EEE8] flex items-center overflow-hidden pt-24 pb-16 sm:pb-20"
      aria-label="Advocate Lalit Sharma — Hero"
    >
      {/* Subtle architectural grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(to right,#1e1e1e 1px,transparent 1px),linear-gradient(to bottom,#1e1e1e 1px,transparent 1px)',
          backgroundSize: '5rem 5rem'
        }}
      />

      {/* Radial vignette to keep center bright */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_50%,rgba(10,10,10,0.7))] pointer-events-none" />

      {/* Vertical hairline accents */}
      <div className="hidden lg:block absolute left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="hidden lg:block absolute right-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[calc(100svh-10rem)]">

          {/* ══ LEFT: Editorial Typography ══ */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pt-4 lg:pt-0">

            {/* Kicker badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="inline-block w-8 h-[2px] bg-[#C9A84C]" />
              <span className="font-ui text-[0.65rem] font-bold tracking-[0.24em] text-[#C9A84C] uppercase">
                Advocate · Rajasthan High Court, Jaipur
              </span>
            </motion.div>

            {/* Name — Merriweather, large, authoritative */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-white leading-[1.0] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 7.5vw, 6rem)' }}
              >
                LALIT<br />
                <span
                  className="font-heading italic font-light"
                  style={{ color: '#C9A84C', fontSize: '0.72em' }}
                >
                  SHARMA
                </span>
              </motion.h1>
            </div>

            {/* Sub-headline — Lora italic */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
              className="max-w-xl mb-8 space-y-3"
            >
              <p
                className="font-serif text-[1.15rem] sm:text-[1.25rem] leading-[1.65] text-[#E8E5DC] italic border-l-2 border-[#C9A84C] pl-4"
              >
                Practising before the Rajasthan High Court, Jaipur — over 22 years at the Bar.
              </p>
              <p className="font-ui text-[0.9rem] sm:text-[1rem] text-[#9B9790] leading-relaxed">
                Civil, Constitutional (Writ), Criminal, Revenue &amp; Family Law.
              </p>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.62 }}
              className="flex flex-wrap items-center gap-y-3 gap-x-6 font-ui text-[0.8rem] text-[#D9D6CD] mb-10 pb-8 border-b border-white/10"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />
                <span><strong className="text-white font-semibold">Enrolment:</strong> {CLIENT_PROFILE.enrolmentNo}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#C9A84C]" strokeWidth={2} />
                <span><strong className="text-white font-semibold">Bar Council</strong> of Rajasthan</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
              <div>
                <strong className="text-white font-semibold">Chamber</strong> 259, Block-E
              </div>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                onClick={onExploreClick}
                id="hero-explore-profile-button"
                className="btn-gold rounded-sm shadow-xl shadow-[#C9A84C]/15 group cursor-pointer"
              >
                <span>Explore Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="#practice"
                className="font-ui inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.15em] uppercase text-[#D9D6CD] hover:text-[#C9A84C] transition-colors py-1 border-b border-transparent hover:border-[#C9A84C]/60"
              >
                <span>Practice Areas</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              {/* Mobile quick-contact */}
              <div className="flex items-center gap-2 sm:ml-auto">
                <a
                  href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
                  className="flex lg:hidden items-center gap-1.5 px-3 py-2 border border-white/15 rounded-sm text-[0.68rem] font-ui font-semibold text-[#D9D6CD] hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex lg:hidden items-center gap-1.5 px-3 py-2 border border-white/15 rounded-sm text-[0.68rem] font-ui font-semibold text-[#D9D6CD] hover:text-white transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* ══ RIGHT: Professional Portrait ══ */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm lg:max-w-none"
            >
              {/* Gold corner frames */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C9A84C]/70 pointer-events-none z-10" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#C9A84C]/70 pointer-events-none z-10" />

              {/* Portrait container */}
              <div className="relative overflow-hidden bg-[#111] border border-white/15 aspect-[3/4] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] rounded-sm">
                <img
                  src="/assets/images/advocate-lalit-sharma.jpg"
                  alt="Advocate Lalit Sharma, Rajasthan High Court, Jaipur"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Gradient overlay — rich at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/10 to-transparent pointer-events-none" />

                {/* Caption badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-black/75 backdrop-blur-sm border border-[#C9A84C]/30 px-4 py-2.5 flex items-center justify-between w-full rounded-sm">
                    <span className="font-heading text-[0.8rem] font-bold text-white">Advocate Lalit Sharma</span>
                    <span className="font-ui text-[0.62rem] font-semibold tracking-wider text-[#C9A84C] uppercase">Ch. 259</span>
                  </div>
                </div>
              </div>

              {/* Reference notation below portrait */}
              <div className="flex justify-between items-center mt-3 font-ui text-[0.62rem] font-medium text-[#5E5D58] tracking-wider uppercase">
                <span>Bench Ref: HC/JPR/259</span>
                <span>Bar Council of Rajasthan</span>
              </div>

              {/* Stats strip alongside portrait */}
              <div className="absolute -left-28 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5">
                {[
                  { value: '22+', label: 'Years\nat Bar' },
                  { value: '5', label: 'Practice\nAreas' },
                  { value: '259', label: 'Chamber\nBlock-E' },
                ].map(stat => (
                  <div key={stat.label} className="text-right pr-4 border-r border-[#C9A84C]/30">
                    <div className="font-heading text-[1.4rem] font-black text-[#C9A84C] leading-none">{stat.value}</div>
                    <div className="font-ui text-[0.55rem] uppercase tracking-wider text-[#9B9790] mt-0.5 whitespace-pre-line">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-6 flex items-center justify-between border-t border-white/8 mt-6">
          <div className="flex items-center gap-2.5 font-ui text-[0.65rem] font-semibold tracking-[0.18em] text-[#9B9790] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span>High Court of Judicature for Rajasthan</span>
          </div>

          <a
            href="#at-the-bar"
            className="hidden sm:flex items-center gap-2 font-ui text-[0.65rem] font-semibold tracking-[0.18em] text-[#9B9790] hover:text-[#C9A84C] uppercase transition-colors"
          >
            <span>Scroll to Explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
