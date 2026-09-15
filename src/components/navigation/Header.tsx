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

  const navLinks: { label: string; href: string }[] = [
    { label: 'About', href: '#about' },
    { label: 'Practice', href: '#practice' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Academic', href: '#academic' },
    { label: 'Verification', href: '#digital-presence' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-[100vw] overflow-x-clip ${
          isScrolled
            ? 'bg-[#000000] border-b border-white/20 py-2 sm:py-3'
            : 'bg-black/90 border-b border-white/10 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-2 sm:gap-4">
          
          {/* ── Brand Identity (Left) ── */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-white outline-none min-w-0 flex-1 sm:flex-initial"
            aria-label="Advocate Lalit Sharma — Home"
          >
            {/* Logo Medallion */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 bg-white rounded-none overflow-hidden border border-white/40 p-0.5">
              <img
                src="/assets/images/lalit-sharma-logo.png"
                alt="Advocate Lalit Sharma & Associates Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Chamber Name */}
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-heading text-[0.9rem] sm:text-[1rem] font-bold text-white tracking-tight truncate">
                Lalit Sharma
              </span>
              <span className="font-ui text-[0.55rem] sm:text-[0.62rem] uppercase tracking-[0.14em] text-neutral-400 group-hover:text-white transition-colors truncate font-medium">
                <span className="hidden sm:inline">Advocate · </span>Rajasthan High Court
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation (Center, xl:flex) ── */}
          <nav
            className="hidden xl:flex items-center gap-6 2xl:gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative font-ui text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-neutral-300 hover:text-white transition-colors duration-200 group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* ── Desktop Right CTA (xl:flex) ── */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Direct Call Action */}
            <a
              href="tel:9829233334"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.68rem] font-semibold font-ui tracking-wider uppercase text-white hover:text-black bg-transparent hover:bg-white border border-white/40 hover:border-white transition-all duration-200 rounded-none"
              aria-label="Call now (9829233334)"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call now (9829233334)</span>
            </a>

            {/* Primary Consultation Button */}
            <button
              onClick={onOpenAppointment}
              id="header-appointment-button"
              className="btn-classic-primary py-2 px-4 text-[0.7rem] cursor-pointer shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* ── Mobile / Tablet Controls (< xl) ── */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <a
              href="tel:9829233334"
              className="py-1.5 px-2.5 sm:px-3 text-[0.65rem] font-bold font-ui uppercase border border-white/30 text-white hover:bg-white hover:text-black transition-all flex items-center gap-1.5"
              aria-label="Call now (9829233334)"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">Call now (9829233334)</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              id="mobile-menu-open-button"
              className="w-9 h-9 flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-black transition-colors cursor-pointer shrink-0"
              aria-label="Open navigation"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-4 h-4" />
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
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[200] bg-[#000000] text-white flex flex-col xl:hidden overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white flex items-center justify-center border border-white/30 p-0.5">
                  <img src="/assets/images/lalit-sharma-logo.png" alt="LS Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-heading text-sm sm:text-base font-bold text-white">Advocate Lalit Sharma</div>
                  <div className="font-ui text-[0.6rem] text-neutral-400 uppercase tracking-wider">Rajasthan High Court · Jaipur</div>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                id="mobile-menu-close-button"
                className="p-2 text-neutral-300 hover:text-white border border-white/20 transition-colors cursor-pointer"
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
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * idx, duration: 0.2 }}
                  className="group flex items-center justify-between font-heading text-xl text-neutral-300 hover:text-white py-3.5 border-b border-white/10 tracking-tight transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}

              <button
                onClick={() => { closeMobileMenu(); onOpenAdmin() }}
                className="flex items-center gap-2 font-ui text-xs font-semibold tracking-wider text-neutral-400 hover:text-white uppercase pt-6 transition-colors cursor-pointer text-left"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Chamber Staff Portal</span>
              </button>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto p-6 border-t border-white/20 space-y-3 bg-[#0A0A0A]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:9829233334"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold font-ui tracking-wider border border-white/30 text-white hover:bg-white hover:text-black transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call now (9829233334)</span>
                </a>
                <a
                  href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold font-ui tracking-wider border border-white/30 text-white hover:bg-white hover:text-black transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chamber</span>
                </a>
              </div>

              <button
                onClick={() => { closeMobileMenu(); onOpenAppointment() }}
                className="w-full btn-classic-primary justify-center cursor-pointer py-3.5 text-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
