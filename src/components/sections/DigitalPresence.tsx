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
      glowColor: 'hover:shadow-[0_8px_24px_rgba(10,102,194,0.22)]',
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
      glowColor: 'hover:shadow-[0_8px_24px_rgba(24,119,242,0.22)]',
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
      glowColor: 'hover:shadow-[0_8px_24px_rgba(225,48,108,0.22)]',
      brandBg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4]'
    }
  ]

  return (
    <section id="digital-presence" className="relative bg-[#080808] text-[#F3F2EE] py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="11" title="Digital Presence" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Verified Digital Channels
          </h2>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[0.68rem] font-ui text-[#E2DFD8] bg-white/[0.05] px-3 py-1.5 border border-white/10 rounded-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>Official public profiles — no promotional claims</span>
          </div>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              className={`bg-[#121212] border ${ch.accentBorder} ${ch.glowColor} p-5 sm:p-6 flex flex-col justify-between group rounded-sm transition-all duration-300 text-left relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${ch.brandGradient}`} />

              <div className="flex items-start justify-between mb-5">
                <div className={`w-10 h-10 ${ch.brandBg} flex items-center justify-center rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110`}>
                  {ch.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B4B0A6] group-hover:text-white transition-colors mt-0.5" />
              </div>

              <div>
                <div className="font-ui text-[0.6rem] font-semibold tracking-widest text-[#B4B0A6] uppercase mb-0.5">{ch.descriptor}</div>
                <h3 className="font-heading text-[1.1rem] text-white font-semibold tracking-wide">{ch.name}</h3>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 text-[0.68rem] font-ui font-bold tracking-wider uppercase text-[#B4B0A6] group-hover:text-white transition-colors">
                {ch.callout} ↗
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatedVerificationRadar />
      </div>
    </section>
  )
}
