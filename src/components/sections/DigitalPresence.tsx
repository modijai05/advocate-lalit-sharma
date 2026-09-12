import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { SOCIAL_LINKS } from '../../data/initialData'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { LinkedInIcon, FacebookIcon, InstagramIcon } from '../brand/SocialIcons'
import { AnimatedVerificationRadar } from '../brand/AnimatedVerificationRadar'

export const DigitalPresence: React.FC = () => {
  const channels = [
    {
      name: 'LinkedIn',
      descriptor: 'Professional Network',
      icon: <LinkedInIcon className="w-5 h-5 text-white" />,
      url: SOCIAL_LINKS.linkedin,
      callout: 'Connect on LinkedIn',
      brandGradient: 'from-[#0A66C2] to-[#004182]',
      accentBorder: 'border-[#0A66C2]/40 hover:border-[#0A66C2]',
      glowColor: 'hover:shadow-[0_15px_30px_rgba(10,102,194,0.35)]',
      brandBg: 'bg-[#0A66C2]'
    },
    {
      name: 'Facebook',
      descriptor: 'Official Public Page',
      icon: <FacebookIcon className="w-5 h-5 text-white" />,
      url: SOCIAL_LINKS.facebook,
      callout: 'View Facebook Page',
      brandGradient: 'from-[#1877F2] to-[#0A52B5]',
      accentBorder: 'border-[#1877F2]/40 hover:border-[#1877F2]',
      glowColor: 'hover:shadow-[0_15px_30px_rgba(24,119,242,0.35)]',
      brandBg: 'bg-[#1877F2]'
    },
    {
      name: 'Instagram',
      descriptor: '@lalitsharmajaipur',
      icon: <InstagramIcon className="w-5 h-5 text-white" />,
      url: SOCIAL_LINKS.instagram,
      callout: 'Follow on Instagram',
      brandGradient: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
      accentBorder: 'border-[#E1306C]/40 hover:border-[#E1306C]',
      glowColor: 'hover:shadow-[0_15px_30px_rgba(225,48,108,0.35)]',
      brandBg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4]'
    }
  ]

  return (
    <section id="digital-presence" className="relative bg-[#000000] text-[#F3F2EE] py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-600/[0.02] animate-ambient rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-600/[0.015] animate-ambient rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="11" title="Digital Presence" theme="dark" />
          <h2 className="font-heading font-extrabold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Verified Digital Channels
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-ui text-slate-300 bg-white/[0.06] px-4 py-2 border border-white/15 rounded-full backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official public profiles — Bar Council verified digital presence</span>
          </div>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 rounded-full" />
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {channels.map((ch, idx) => (
            <motion.a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`card-dark border ${ch.accentBorder} ${ch.glowColor} p-6 sm:p-7 flex flex-col justify-between group rounded-xl transition-all duration-300 text-left relative overflow-hidden hover-lift`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ch.brandGradient}`} />

              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 ${ch.brandBg} flex items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {ch.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5" />
              </div>

              <div>
                <div className="font-ui text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase mb-1">{ch.descriptor}</div>
                <h3 className="font-heading text-xl text-white font-bold tracking-wide">{ch.name}</h3>
              </div>

              <div className="pt-4 mt-5 border-t border-white/10 text-xs font-ui font-bold tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors flex items-center justify-between">
                <span>{ch.callout}</span>
                <span>↗</span>
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatedVerificationRadar />
      </div>
    </section>
  )
}
