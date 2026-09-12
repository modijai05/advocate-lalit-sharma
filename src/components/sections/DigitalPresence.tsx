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
      name: 'LINKEDIN',
      title: 'Professional Network',
      descriptor: 'Advocate · High Court of Judicature for Rajasthan',
      icon: <LinkedInIcon className="w-6 h-6 text-white" />,
      url: SOCIAL_LINKS.linkedin,
      callout: 'Connect on LinkedIn ↗',
      brandGradient: 'from-[#0A66C2] to-[#004182]',
      accentBorder: 'border-[#0A66C2]/40 hover:border-[#0A66C2]',
      glowColor: 'hover:shadow-[0_10px_30px_rgba(10,102,194,0.25)]',
      brandBg: 'bg-[#0A66C2]'
    },
    {
      name: 'FACEBOOK',
      title: 'Public Engagement',
      descriptor: 'Official Presence · Advocate Lalit Sharma',
      icon: <FacebookIcon className="w-6 h-6 text-white" />,
      url: SOCIAL_LINKS.facebook,
      callout: 'View Facebook Page ↗',
      brandGradient: 'from-[#1877F2] to-[#0A52B5]',
      accentBorder: 'border-[#1877F2]/40 hover:border-[#1877F2]',
      glowColor: 'hover:shadow-[0_10px_30px_rgba(24,119,242,0.25)]',
      brandBg: 'bg-[#1877F2]'
    },
    {
      name: 'INSTAGRAM',
      title: 'Visual Journal',
      descriptor: '@lalitsharmajaipur · Judicial, Civic & Architectural Moments',
      icon: <InstagramIcon className="w-6 h-6 text-white" />,
      url: SOCIAL_LINKS.instagram,
      callout: 'Follow on Instagram ↗',
      brandGradient: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
      accentBorder: 'border-[#E1306C]/40 hover:border-[#E1306C]',
      glowColor: 'hover:shadow-[0_10px_30px_rgba(225,48,108,0.25)]',
      brandBg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4]'
    }
  ]

  return (
    <section id="digital-presence" className="relative bg-[#080808] text-[#F3F2EE] py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="11" title="DIGITAL PRESENCE" theme="dark" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white font-normal tracking-tight">
            Verified Digital Channels
          </h2>
          <p className="text-sm text-[#B4B0A6] uppercase tracking-[0.16em] mt-3 font-semibold">
            Direct & Verified Public Institutional Profiles
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#E2DFD8] bg-white/[0.05] px-3.5 py-1.5 border border-white/10 rounded-xs">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Official public profiles without promotional claims</span>
          </div>
        </div>

        {/* Vibrant Brand Panels for the 3 verified channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((ch, idx) => (
            <motion.a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`bg-[#121212] border ${ch.accentBorder} ${ch.glowColor} p-8 sm:p-10 flex flex-col justify-between group rounded-xs transition-all duration-300 text-left relative overflow-hidden`}
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${ch.brandGradient}`} />

              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Vibrant colorful brand icon badge */}
                  <div className={`w-14 h-14 ${ch.brandBg} flex items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    {ch.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#B4B0A6] group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="text-xs font-semibold tracking-widest text-[#B4B0A6] uppercase mb-1">
                  {ch.title}
                </div>

                <h3 className="text-2xl font-heading text-white font-semibold mb-3 tracking-wide">
                  {ch.name}
                </h3>

                <p className="text-sm text-[#D8D5CC] font-normal leading-relaxed">
                  {ch.descriptor}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-white group-hover:text-[#D4AF37] transition-colors">
                <span>{ch.callout}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Google Business Profile Animated Radar & Physical Chamber Verification Hub */}
        <AnimatedVerificationRadar />
      </div>
    </section>
  )
}
