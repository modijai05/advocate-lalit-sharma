import React from 'react'
import { getChamberWhatsAppLink } from '../../data/initialData'
import { useCMS } from '../../context/CMSContext'
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, MessageSquare, Scale, CheckCircle2 } from 'lucide-react'
import { LinkedInIcon, FacebookIcon, InstagramIcon, GoogleIcon } from '../brand/SocialIcons'
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
  const { profile, socialLinks } = useCMS()
  const navLinks = [
    { label: 'About Chambers', href: '#about' },
    { label: 'Practice Areas', href: '#practice' },
    { label: 'Professional Timeline', href: '#timeline' },
    { label: 'Academic Archive', href: '#academic' },
    { label: 'Contact & Enquiries', href: '#contact' },
  ]

  const practicePills = [
    'Civil Law',
    'Constitutional Writs',
    'Criminal Appeals',
    'Revenue & Land',
    'Family Law',
  ]

  return (
    <footer className="relative bg-[#000000] text-neutral-300 pt-16 pb-12 border-t border-white/20 overflow-hidden">
      {/* Subtle Background Law Scale Watermark */}
      <div className="absolute -left-12 bottom-12 opacity-[0.03] pointer-events-none">
        <Scale className="w-96 h-96 text-white" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* ── Solid Monochrome LS Monogram Crest ── */}
        <div className="flex flex-col items-center justify-center mb-14 pb-12 border-b border-white/15 relative">
          <GlowingLSLogo size="lg" showSubtitle={true} />
        </div>

        {/* ── 3-Column Traditional Law Firm Footer Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/15 text-left">

          {/* Col 1: Identity & Chambers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-white flex items-center justify-center shrink-0 border border-white/40 p-1">
                <img
                  src="/assets/images/lalit-sharma-logo.png"
                  alt="Lalit Sharma & Associates Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-ui text-[0.65rem] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                  Rajasthan High Court · Jaipur
                </div>
                <div className="font-heading text-xl font-bold text-white">
                  Advocate Lalit Sharma
                </div>
              </div>
            </div>

            <p className="font-ui text-sm text-neutral-300 leading-relaxed">
              Lalit Sharma &amp; Associates — offering over 22 years of continuous appellate representation before the Hon'ble Rajasthan High Court across civil, constitutional, criminal, revenue, and matrimonial law.
            </p>

            {/* Coordinates Card */}
            <div className="p-4 bg-[#0A0A0A] border border-white/15 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="font-ui text-xs text-neutral-200 font-medium">
                  {profile.chamber}
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span className="font-ui text-xs text-neutral-400">
                  Residential Office: {profile.residentialOffice}
                </span>
              </div>
            </div>

            {/* Verification Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/20 text-neutral-300 text-xs font-ui">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Enrolment: {profile.enrolmentNo}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/20 text-neutral-300 text-xs font-ui">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>{profile.barCouncil}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation & Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="font-ui text-xs font-bold tracking-[0.2em] text-white uppercase border-b border-white/20 pb-2">
              Sections &amp; Portfolio
            </div>

            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-ui text-sm text-neutral-300 hover:text-white transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="text-neutral-500">―</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Practice Domain Pills */}
            <div className="pt-4 border-t border-white/10">
              <div className="font-ui text-[0.68rem] font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                Core Domains
              </div>
              <div className="flex flex-wrap gap-1.5">
                {practicePills.map((name, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-[0.65rem] font-ui border border-white/20 text-neutral-300"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Contact & Statutory Compliance (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="font-ui text-xs font-bold tracking-[0.2em] text-white uppercase border-b border-white/20 pb-2">
              Chamber Direct
            </div>

            <div className="space-y-3 font-ui text-sm">
              {/* Telephone */}
              <a
                href="tel:9829233334"
                className="flex items-center gap-3 p-3 bg-[#0A0A0A] border border-white/15 hover:border-white text-white transition-all group"
              >
                <div className="p-2 border border-white/20 text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase font-bold text-neutral-400">Direct Telephone</div>
                  <div className="font-bold">Call now (9829233334)</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getChamberWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#0A0A0A] border border-white/15 hover:border-white text-white transition-all group"
              >
                <div className="p-2 border border-white/20 text-white">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase font-bold text-neutral-400">WhatsApp Chambers</div>
                  <div className="font-bold">{profile.whatsapp}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-3 bg-[#0A0A0A] border border-white/15 hover:border-white text-white transition-all group break-all"
              >
                <div className="p-2 border border-white/20 text-white shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase font-bold text-neutral-400">Chamber Email</div>
                  <div className="font-medium text-xs sm:text-sm">{profile.email}</div>
                </div>
              </a>

              {/* Google Maps Button */}
              <a
                href={profile.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0A0A0A] border border-white/20 hover:border-white text-white transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2 font-bold text-xs">
                  <MapPin className="w-4 h-4 text-white" />
                  <span>Rajasthan High Court Location Pin</span>
                </div>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Statutory Compliance Notice */}
            <div className="p-3.5 bg-[#0A0A0A] border border-white/15">
              <div className="flex items-center gap-2 font-ui text-xs font-bold tracking-wider text-neutral-300 uppercase mb-1">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Statutory Compliance</span>
              </div>
              <p className="font-ui text-xs text-neutral-400 leading-relaxed italic">
                "This website is designed strictly for informational purposes under Bar Council of India guidelines and does not solicit client engagement or advertise legal services."
              </p>
            </div>
          </div>
        </div>

        {/* ── Social Media & Compliance (Absolute Bottom of the Page) ── */}
        <div className="pt-8 pb-4 border-b border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Media Channels (Relocated Exclusively to the Bottom) */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-ui text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Official Profiles:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Advocate Lalit Sharma on LinkedIn"
                className="flex items-center gap-2 px-3 py-1.5 border border-white/25 hover:border-white text-white hover:bg-white hover:text-black transition-all text-xs font-ui"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Advocate Lalit Sharma on Facebook"
                className="flex items-center gap-2 px-3 py-1.5 border border-white/25 hover:border-white text-white hover:bg-white hover:text-black transition-all text-xs font-ui"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Facebook</span>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Advocate Lalit Sharma on Instagram"
                className="flex items-center gap-2 px-3 py-1.5 border border-white/25 hover:border-white text-white hover:bg-white hover:text-black transition-all text-xs font-ui"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a
                href={socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Advocate Lalit Sharma on Google"
                className="flex items-center gap-2 px-3 py-1.5 border border-white/25 hover:border-white text-white hover:bg-white hover:text-black transition-all text-xs font-ui"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Google</span>
              </a>
            </div>
          </div>

          {/* Legal Compliance Links */}
          <div className="flex flex-wrap items-center gap-6 font-ui text-xs">
            <button
              onClick={onOpenDisclaimer}
              className="text-neutral-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              Bar Council Disclaimer
            </button>
            <button
              onClick={onOpenPrivacy}
              className="text-neutral-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            {/* Hidden staff portal trigger — only visible to authorised chamber staff */}
            <button
              onClick={onOpenAdmin}
              className="opacity-0 hover:opacity-100 transition-opacity duration-300 w-2 h-2 rounded-full bg-white/20 cursor-pointer"
              title=""
              aria-label="Chamber Portal"
            />
          </div>
        </div>

        {/* ── Copyright Line ── */}
        <div className="pt-6 text-center sm:text-left font-ui text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Advocate Lalit Sharma &amp; Associates. Rajasthan High Court, Jaipur. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
