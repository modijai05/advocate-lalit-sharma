import React from 'react'
import { motion } from 'framer-motion'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink } from 'lucide-react'
import { GlowingLSLogo } from '../brand/GlowingLSLogo'

interface FooterProps {
  onOpenDisclaimer: () => void
  onOpenPrivacy: () => void
  onOpenAdmin: () => void
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDisclaimer,
  onOpenPrivacy,
  onOpenAdmin
}) => {
  const navLinks = [
    { label: 'About Chambers', href: '#about' },
    { label: 'Practice Areas', href: '#practice' },
    { label: 'Professional Timeline', href: '#timeline' },
    { label: 'Academic Archive', href: '#academic' },
    { label: 'Involvements & Records', href: '#involvements' },
    { label: 'Legal Insights', href: '#insights' },
    { label: 'Digital Presence', href: '#digital-presence' },
    { label: 'Contact & Enquiries', href: '#contact' },
  ]

  return (
    <footer className="relative bg-[#080808] text-[#F0EEE8] pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Architectural grid watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
          backgroundSize: '3rem 3rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* ── Glowing Animated LS Monogram Crest ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center mb-16 pb-14 border-b border-white/10 relative"
        >
          {/* Subtle horizontal fading golden lines */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none opacity-40 px-4 sm:px-12">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
            <div className="w-48 sm:w-64 shrink-0" />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
          </div>

          <GlowingLSLogo size="lg" showSubtitle={true} />
        </motion.div>

        {/* ── 4-Column Footer Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/10 text-left">
          
          {/* Col 1: Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-white rounded-sm flex items-center justify-center shrink-0 border border-[#C9A84C]/25">
                <img
                  src="/assets/images/lalit-sharma-logo.png"
                  alt="Lalit Sharma & Associates Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <div className="font-ui text-[0.6rem] tracking-[0.22em] text-[#5E5D58] uppercase">
                  Rajasthan High Court · Jaipur
                </div>
                <div className="font-heading text-[1.05rem] font-bold text-[#F0EEE8]">
                  Advocate Lalit Sharma
                </div>
              </div>
            </div>

            <p className="font-ui text-[0.85rem] text-[#9B9790] leading-[1.75]">
              Lalit Sharma &amp; Associates — practising before the Rajasthan High Court with over 22 years of continuous experience in civil, constitutional, criminal, revenue, and family law matters.
            </p>

            <div className="font-ui text-[0.8rem] text-[#5E5D58] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9B9790] shrink-0 mt-0.5" />
                <span>{CLIENT_PROFILE.chamber}</span>
              </div>
              <div className="pl-5 text-[#4A4843] text-[0.75rem]">
                Residential Office: {CLIENT_PROFILE.residentialOffice}
              </div>
            </div>

            <div className="font-ui text-[0.75rem] text-[#4A4843] space-y-1 pt-1">
              <div>Enrolment No. {CLIENT_PROFILE.enrolmentNo}</div>
              <div>{CLIENT_PROFILE.barCouncil}</div>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-ui text-[0.6rem] font-bold tracking-[0.2em] text-[#5E5D58] uppercase mb-5">
              Sections &amp; Portfolio
            </div>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-ui text-[0.8rem] text-[#9B9790] hover:text-[#F0EEE8] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-[#C9A84C] group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Compliance (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="font-ui text-[0.6rem] font-bold tracking-[0.2em] text-[#5E5D58] uppercase mb-5">
              Chamber Direct
            </div>

            <div className="space-y-3 font-ui text-[0.85rem]">
              <a
                href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-[#F0EEE8] hover:text-white transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                <span>{CLIENT_PROFILE.phone}</span>
              </a>

              <a
                href={`mailto:${CLIENT_PROFILE.email}`}
                className="flex items-center gap-2.5 text-[#9B9790] hover:text-[#F0EEE8] transition-colors break-all group"
              >
                <Mail className="w-3.5 h-3.5 text-[#9B9790] shrink-0" />
                <span>{CLIENT_PROFILE.email}</span>
              </a>

              <a
                href={CLIENT_PROFILE.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C9A84C] hover:text-[#E2C475] transition-colors pt-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="text-[0.78rem] underline underline-offset-4 decoration-[#C9A84C]/40">View on Google Maps</span>
              </a>
            </div>

            {/* Statutory Notice */}
            <div className="pt-5 border-t border-white/8">
              <div className="flex items-center gap-1.5 font-ui text-[0.6rem] font-bold tracking-[0.18em] text-[#9B9790] uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Statutory Notice</span>
              </div>
              <p className="font-ui text-[0.75rem] text-[#4A4843] leading-[1.7] italic">
                "This website is for informational purposes only and does not constitute legal advice or solicit professional employment."
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-ui text-[0.7rem] text-[#4A4843]">
          <div>
            &copy; {new Date().getFullYear()} Advocate Lalit Sharma &amp; Associates. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-[#9B9790] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#9B9790] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#9B9790] transition-colors cursor-pointer text-[#2E2D28]"
              title="Chamber Staff Portal"
            >
              Staff Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
