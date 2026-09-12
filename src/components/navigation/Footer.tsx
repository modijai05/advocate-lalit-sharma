import React from 'react'
import { motion } from 'framer-motion'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, MessageSquare, Scale, CheckCircle2 } from 'lucide-react'
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

  const practicePills = [
    { name: 'Civil Law', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { name: 'Constitutional Writs', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
    { name: 'Criminal Appeals', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
    { name: 'Revenue & Land', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    { name: 'Family Law', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  ]

  return (
    <footer className="relative bg-[#000000] text-slate-200 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Top Multi-Color Jewel-Tone Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-400 via-emerald-500 to-indigo-600 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />

      {/* Ambient Colorful Depth Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/[0.02] animate-ambient rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/[0.015] animate-ambient rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-500/[0.01] animate-ambient rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Background Law Scale Watermark */}
      <div className="absolute -left-12 bottom-12 opacity-[0.03] pointer-events-none">
        <Scale className="w-96 h-96 text-amber-300" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* ── Glowing Animated LS Monogram Crest ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center mb-16 pb-14 border-b border-white/12 relative"
        >
          {/* Radiant horizontal golden accent beams */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none px-4 sm:px-12">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            <div className="w-56 sm:w-80 shrink-0" />
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>

          <GlowingLSLogo size="lg" showSubtitle={true} />
        </motion.div>

        {/* ── 3-Column Rich Law Firm Footer Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/12 text-left">

          {/* Col 1: Identity & Chambers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border-2 border-amber-400/70 shadow-[0_0_20px_rgba(245,158,11,0.3)] p-1">
                <img
                  src="/assets/images/lalit-sharma-logo.png"
                  alt="Lalit Sharma & Associates Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-ui text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                  Rajasthan High Court · Jaipur
                </div>
                <div className="font-heading text-xl font-black text-white">
                  Advocate Lalit Sharma
                </div>
              </div>
            </div>

            <p className="font-ui text-sm text-slate-300 leading-relaxed">
              Lalit Sharma &amp; Associates — offering over 22 years of continuous appellate representation before the Hon'ble Rajasthan High Court across civil, constitutional, criminal, revenue, and matrimonial law.
            </p>

            {/* Coordinates Card */}
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/12 backdrop-blur-md space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="font-ui text-xs text-slate-200 font-medium">
                  {CLIENT_PROFILE.chamber}
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-ui text-xs text-slate-300">
                  Residential Office: {CLIENT_PROFILE.residentialOffice}
                </span>
              </div>
            </div>

            {/* Verification Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-ui font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enrolment: {CLIENT_PROFILE.enrolmentNo}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-ui font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>{CLIENT_PROFILE.barCouncil}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation & Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <div className="font-ui text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                Sections &amp; Portfolio
              </div>
            </div>

            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-ui text-sm text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-2 group hover:translate-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:bg-amber-400 transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Practice Domain Pills */}
            <div className="pt-4 border-t border-white/10">
              <div className="font-ui text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Core Domains
              </div>
              <div className="flex flex-wrap gap-1.5">
                {practicePills.map((pill, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-0.5 rounded-md text-[0.65rem] font-ui font-semibold border ${pill.color}`}
                  >
                    {pill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Contact & Statutory Compliance (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="font-ui text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                Chamber Direct
              </div>
            </div>

            <div className="space-y-3 font-ui text-sm">
              {/* Telephone */}
              <a
                href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/12 hover:border-emerald-400/60 text-white hover:text-emerald-300 transition-all group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase font-bold text-slate-400">Direct Line</div>
                  <div className="font-bold">{CLIENT_PROFILE.phone}</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/12 hover:border-emerald-400/60 text-white hover:text-emerald-300 transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase font-bold text-slate-400">WhatsApp Chambers</div>
                  <div className="font-bold">{CLIENT_PROFILE.whatsapp}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CLIENT_PROFILE.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/12 hover:border-purple-400/60 text-white hover:text-purple-300 transition-all group break-all"
              >
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase font-bold text-slate-400">Chamber Email</div>
                  <div className="font-semibold text-xs sm:text-sm">{CLIENT_PROFILE.email}</div>
                </div>
              </a>

              {/* Google Maps Button */}
              <a
                href={CLIENT_PROFILE.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 hover:text-amber-200 transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-2 font-bold text-xs">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Navigate to Chamber in High Court</span>
                </div>
                <ExternalLink className="w-4 h-4 text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Statutory Compliance Notice */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 font-ui text-xs font-bold tracking-wider text-amber-400 uppercase mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Statutory Compliance Notice</span>
              </div>
              <p className="font-ui text-xs text-slate-300 leading-relaxed italic">
                "This website is designed strictly for informational purposes under Bar Council of India guidelines and does not solicit client engagement or advertise legal services."
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-ui text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Advocate Lalit Sharma &amp; Associates. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenDisclaimer}
              className="text-slate-300 hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer"
            >
              Bar Council Disclaimer
            </button>
            <button
              onClick={onOpenPrivacy}
              className="text-slate-300 hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenAdmin}
              className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
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
