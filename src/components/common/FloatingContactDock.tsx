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
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.03, x: -4 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 bg-black text-white border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-sm text-xs font-semibold tracking-wide transition-all"
              aria-label="Direct WhatsApp Message"
            >
              <span>WhatsApp Direct</span>
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm border border-white/20 group-hover:bg-black group-hover:text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Phone Call */}
            <motion.a
              whileHover={{ scale: 1.03, x: -4 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 px-4 py-2.5 bg-black text-white border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-sm text-xs font-semibold tracking-wide transition-all"
              aria-label="Direct Phone Call"
            >
              <span>Call: {CLIENT_PROFILE.phone}</span>
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
                <Phone className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.03, x: -4 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${CLIENT_PROFILE.email}`}
              className="flex items-center gap-3 px-4 py-2.5 bg-black text-white border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-sm text-xs font-semibold tracking-wide transition-all"
              aria-label="Email Chambers"
            >
              <span>Email Chambers</span>
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
                <Mail className="w-4 h-4" />
              </div>
            </motion.a>

            {/* Schedule Consultation */}
            <motion.button
              whileHover={{ scale: 1.03, x: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setIsOpen(false)
                onOpenAppointment()
              }}
              className="flex items-center gap-3 px-4 py-2.5 bg-white text-black border border-white hover:bg-black hover:text-white rounded-sm text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
            >
              <span>Schedule Consultation</span>
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-sm">
                <Calendar className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Toggle Button — pure black & white */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-5 py-3.5 bg-black text-white font-bold text-xs tracking-wider uppercase rounded-sm shadow-lg cursor-pointer border border-white/30 hover:border-white focus-visible:outline-white transition-all"
        aria-label={isOpen ? 'Close consultation options' : 'Open consultation options'}
      >
        {/* Static white indicator dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>

        <span className="font-bold tracking-[0.14em] text-white">
          {isOpen ? 'Close' : 'Consult Chambers'}
        </span>

        <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-sm transition-all duration-200 shadow-sm">
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
