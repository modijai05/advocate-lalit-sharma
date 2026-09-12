import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Calendar, Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react'

interface HeaderProps {
  onOpenAppointment: () => void
  onOpenAdmin: () => void
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointment,
  onOpenAdmin
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks: { label: string; href: string; highlight?: boolean }[] = [
    { label: 'About', href: '#about' },
    { label: 'Practice', href: '#practice' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Academic', href: '#academic' },
    { label: 'Involvements', href: '#involvements', highlight: true },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C9A84C]/25 shadow-[0_4px_24px_rgba(0,0,0,0.7)] py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3.5 sm:py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          
          {/* ── Brand Identity (Left) ── */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-[#C9A84C] outline-none shrink-0"
            aria-label="Advocate Lalit Sharma — Home"
          >
            {/* Logo Medallion */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 bg-white rounded-sm overflow-hidden border border-[#C9A84C]/40 group-hover:border-[#C9A84C] shadow-md transition-all duration-300 group-hover:scale-105 p-0.5">
              <img
                src="/assets/images/lalit-sharma-logo.png"
                alt="Advocate Lalit Sharma & Associates Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Chamber Name */}
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-sm sm:text-[0.95rem] font-bold text-[#F3F0E6] group-hover:text-white tracking-tight transition-colors">
                Lalit Sharma
              </span>
              <span className="font-ui text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.16em] text-[#9B9790] group-hover:text-[#C9A84C] transition-colors">
                Advocate · Rajasthan High Court
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation (Center, xl:flex) ── */}
          <nav
            className="hidden xl:flex items-center gap-6 2xl:gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((item) =>
              item.highlight ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A84C]/15 hover:bg-[#C9A84C]/25 text-[#F5E6AB] hover:text-white border border-[#C9A84C]/45 shadow-[0_0_12px_rgba(201,168,76,0.25)] font-ui text-[0.7rem] font-bold tracking-[0.12em] uppercase transition-all duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                  <span>{item.label}</span>
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative font-ui text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#D9D6CD] hover:text-[#F0EEE8] transition-colors duration-200 group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A84C] group-hover:w-full transition-all duration-300 origin-left" />
                </a>
              )
            )}
          </nav>

          {/* ── Desktop Right CTA (xl:flex) ── */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Direct Chamber Line (2xl screens) */}
            <a
              href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-2 text-[0.68rem] font-semibold font-ui tracking-wider uppercase text-[#D9D6CD] hover:text-white border border-white/15 hover:border-[#C9A84C]/50 bg-white/[0.04] transition-all duration-200 rounded-sm"
              aria-label="Call Chamber 259"
            >
              <Phone className="w-3.5 h-3.5 text-[#4ADE80]" strokeWidth={2.5} />
              <span>Chamber Direct</span>
            </a>

            {/* Primary Consultation Button */}
            <button
              onClick={onOpenAppointment}
              id="header-appointment-button"
              className="btn-gold rounded-sm shadow-md py-2 px-4 text-[0.7rem] cursor-pointer shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* ── Mobile / Tablet Controls (< xl) ── */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <button
              onClick={onOpenAppointment}
              className="btn-gold py-2 px-3.5 text-[0.68rem] rounded-sm cursor-pointer"
              aria-label="Schedule consultation"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consult</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              id="mobile-menu-open-button"
              className="p-2 text-[#F0EEE8] hover:text-[#C9A84C] border border-white/15 bg-white/[0.04] rounded-sm focus-visible:outline-[#C9A84C] transition-colors cursor-pointer"
              aria-label="Open navigation"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ══ Full-Screen Mobile Drawer ══ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-[#0C0C0C] text-[#F0EEE8] flex flex-col xl:hidden overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-sm flex items-center justify-center border border-[#C9A84C]/40 p-0.5">
                  <img src="/assets/images/lalit-sharma-logo.png" alt="LS Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-heading text-sm sm:text-base font-bold text-white">Advocate Lalit Sharma</div>
                  <div className="font-ui text-[0.6rem] text-[#9B9790] uppercase tracking-wider">Rajasthan High Court · Jaipur</div>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                id="mobile-menu-close-button"
                className="p-2 text-[#D9D6CD] hover:text-white border border-white/15 rounded-sm transition-colors cursor-pointer"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-6 sm:px-8 py-6 gap-1" aria-label="Mobile navigation">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  className="group flex items-center justify-between font-heading text-xl sm:text-2xl text-[#D9D6CD] hover:text-[#C9A84C] py-3.5 border-b border-white/8 tracking-tight transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span>{item.label}</span>
                    {item.highlight && (
                      <span className="text-[0.62rem] px-2.5 py-0.5 rounded-full bg-[#C9A84C]/20 text-[#E5C368] border border-[#C9A84C]/40 font-ui uppercase tracking-wider font-bold">
                        Official Records
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => { closeMobileMenu(); onOpenAdmin() }}
                className="flex items-center gap-2 font-ui text-xs font-semibold tracking-wider text-[#9B9790] hover:text-[#C9A84C] uppercase pt-5 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Chamber Staff Portal</span>
              </motion.button>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto p-6 border-t border-white/10 space-y-3 bg-[#080808]">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold font-ui tracking-wider border border-white/15 text-[#F0EEE8] hover:border-white/30 hover:bg-white/5 transition-all rounded-sm"
                >
                  <Phone className="w-4 h-4 text-[#4ADE80]" />
                  <span>Call Chamber</span>
                </a>
                <a
                  href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold font-ui tracking-wider border border-white/15 text-[#F0EEE8] hover:border-white/30 hover:bg-white/5 transition-all rounded-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => { closeMobileMenu(); onOpenAppointment() }}
                className="w-full btn-gold rounded-sm shadow-lg justify-center cursor-pointer py-3.5 text-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Chamber Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
