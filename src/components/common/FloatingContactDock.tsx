import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare, Calendar, Mail, X } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

interface FloatingContactDockProps {
  onOpenAppointment: () => void
}

export const FloatingContactDock: React.FC<FloatingContactDockProps> = ({ onOpenAppointment }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Expandable Quick Action Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {/* Direct WhatsApp Action - Authentic WhatsApp Green */}
            <motion.a
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 bg-[#121212] text-white border border-[#25D366]/40 hover:border-[#25D366] shadow-2xl rounded-full text-xs font-semibold tracking-wide transition-all group"
              aria-label="Direct WhatsApp Message"
            >
              <span className="group-hover:text-[#25D366] transition-colors">WhatsApp Direct</span>
              <div className="w-8 h-8 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-md">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
            </motion.a>

            {/* Direct Telephony Action - Emerald Green */}
            <motion.a
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 px-4 py-2.5 bg-[#121212] text-white border border-[#22C55E]/40 hover:border-[#22C55E] shadow-2xl rounded-full text-xs font-semibold tracking-wide transition-all group"
              aria-label="Direct Phone Call"
            >
              <span className="group-hover:text-[#22C55E] transition-colors">Call: +91 98292 33334</span>
              <div className="w-8 h-8 bg-[#22C55E] text-white flex items-center justify-center rounded-full shadow-md">
                <Phone className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Official Chamber Email Action - Regal Blue */}
            <motion.a
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${CLIENT_PROFILE.email}`}
              className="flex items-center gap-3 px-4 py-2.5 bg-[#121212] text-white border border-[#3B82F6]/40 hover:border-[#3B82F6] shadow-2xl rounded-full text-xs font-semibold tracking-wide transition-all group"
              aria-label="Email Chambers"
            >
              <span className="group-hover:text-[#60A5FA] transition-colors">Email Chambers</span>
              <div className="w-8 h-8 bg-[#2563EB] text-white flex items-center justify-center rounded-full shadow-md">
                <Mail className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Schedule Consultation Action - Gold Accent */}
            <motion.button
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setIsOpen(false)
                onOpenAppointment()
              }}
              className="flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-[#C9A84C] to-[#A8873A] text-[#0A0A0A] shadow-2xl rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer group"
            >
              <span>Schedule Consultation</span>
              <div className="w-8 h-8 bg-[#0A0A0A] text-[#C9A84C] flex items-center justify-center rounded-full shadow-md">
                <Calendar className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Animated Pulsing FAB Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#C9A84C] via-[#E2C475] to-[#A8873A] text-[#0A0A0A] font-bold text-xs tracking-wider uppercase rounded-full shadow-2xl cursor-pointer border border-[#E2C475]/50 animate-fab-pulse focus-visible:outline-[#C9A84C]"
        aria-label={isOpen ? 'Close consultation options' : 'Open consultation options'}
      >
        {/* Soft Animated Radar Beacon */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A0A0A]"></span>
        </span>

        <span className="font-bold tracking-[0.14em] drop-shadow-xs">
          {isOpen ? 'Close' : 'Consult Chambers'}
        </span>

        <div className="w-6 h-6 flex items-center justify-center bg-[#0A0A0A] text-[#D4AF37] rounded-full transition-transform duration-300">
          {isOpen ? (
            <X className="w-3.5 h-3.5 text-white" />
          ) : (
            <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" />
          )}
        </div>
      </motion.button>
    </div>
  )
}
