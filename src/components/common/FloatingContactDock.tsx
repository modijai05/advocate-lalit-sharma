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
            {/* Direct WhatsApp Action */}
            <motion.a
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 bg-[#0A1128]/90 backdrop-blur-md text-white border border-emerald-500/40 hover:border-emerald-400 shadow-[0_10px_25px_rgba(16,185,129,0.3)] rounded-full text-xs font-semibold tracking-wide transition-all group"
              aria-label="Direct WhatsApp Message"
            >
              <span className="group-hover:text-emerald-300 transition-colors">WhatsApp Direct</span>
              <div className="w-8 h-8 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-md">
                <MessageSquare className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Direct Telephony Action */}
            <motion.a
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 px-4 py-2.5 bg-[#0A1128]/90 backdrop-blur-md text-white border border-blue-500/40 hover:border-blue-400 shadow-[0_10px_25px_rgba(37,99,235,0.3)] rounded-full text-xs font-semibold tracking-wide transition-all group"
              aria-label="Direct Phone Call"
            >
              <span className="group-hover:text-blue-300 transition-colors">Call: {CLIENT_PROFILE.phone}</span>
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-md">
                <Phone className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Official Chamber Email Action */}
            <motion.a
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${CLIENT_PROFILE.email}`}
              className="flex items-center gap-3 px-4 py-2.5 bg-[#0A1128]/90 backdrop-blur-md text-white border border-purple-500/40 hover:border-purple-400 shadow-[0_10px_25px_rgba(124,58,237,0.3)] rounded-full text-xs font-semibold tracking-wide transition-all group"
              aria-label="Email Chambers"
            >
              <span className="group-hover:text-purple-300 transition-colors">Email Chambers</span>
              <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-md">
                <Mail className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Schedule Consultation Action */}
            <motion.button
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setIsOpen(false)
                onOpenAppointment()
              }}
              className="flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-[0_10px_25px_rgba(245,158,11,0.4)] rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer group hover:from-amber-400 hover:to-amber-500"
            >
              <span>Schedule Consultation</span>
              <div className="w-8 h-8 bg-white text-amber-700 flex items-center justify-center rounded-full shadow-md">
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
        className="group relative flex items-center gap-3 px-5 py-3.5 bg-[#000000] text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-[0_12px_35px_rgba(37,99,235,0.4)] cursor-pointer border border-amber-500/40 hover:border-amber-400 focus-visible:outline-blue-400 transition-all"
        aria-label={isOpen ? 'Close consultation options' : 'Open consultation options'}
      >
        {/* Soft Animated Amber Beacon */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
        </span>

        <span className="font-bold tracking-[0.14em] drop-shadow-xs text-white">
          {isOpen ? 'Close' : 'Consult Chambers'}
        </span>

        <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 rounded-full transition-transform duration-300 shadow-sm">
          {isOpen ? (
            <X className="w-3.5 h-3.5" />
          ) : (
            <Calendar className="w-3.5 h-3.5" />
          )}
        </div>
      </motion.button>
    </div>
  )
}
