import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DISCLAIMER_TEXT } from '../../data/initialData'
import { AdvocateTieMotif } from '../brand/AdvocateTieMotif'
import { ShieldCheck } from 'lucide-react'

interface DisclaimerGateProps {
  onAgree?: () => void
}

const STORAGE_KEY = 'als_disclaimer_accepted_v2'

export const DisclaimerGate: React.FC<DisclaimerGateProps> = ({ onAgree }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) {
      setIsOpen(true)
    }
    setIsReady(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setIsOpen(false)
    if (onAgree) onAgree()
  }

  if (!isReady || !isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[9999] bg-[#050505] text-[#F7F7F5] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      >
        {/* Architectural subtle background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Central Entrance Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl w-full bg-[#0D0D0D] border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md my-auto"
        >
          {/* Top Brass / Grey Bar Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7E6E1]/40 to-transparent" />

          {/* Chamber Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center p-2 bg-white rounded-sm shadow-md">
              <img
                src="/assets/images/lalit-sharma-logo.png"
                alt="Advocate Lalit Sharma LS Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="font-ui text-[0.6rem] tracking-[0.22em] text-[#5E5D58] uppercase mb-2">
              Bar Council of Rajasthan · Enrolment 2746/2005
            </div>
            <h1 className="font-heading text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] font-bold text-[#F0EEE8] tracking-tight">
              Advocate Lalit Sharma
            </h1>
            <p className="font-ui text-[0.7rem] text-[#9B9790] tracking-wider uppercase mt-1">
              Lalit Sharma &amp; Associates · Rajasthan High Court, Jaipur
            </p>

            <AdvocateTieMotif variant="divider" className="w-full max-w-xs text-white/30 my-2" />
          </div>

          {/* Formal Legal Chamber Declaration */}
          <div className="relative border-l-2 border-[#C9A84C]/30 pl-5 pr-2 py-2 mb-8 font-ui text-[0.875rem] leading-[1.8] text-[#9B9790] text-justify">
            <p>{DISCLAIMER_TEXT}</p>
          </div>

          {/* Verification Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 font-ui text-[0.6rem] text-[#5E5D58]">
              <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
              <span>Bar Council of India Rule 36 Compliance</span>
            </div>

            <button
              onClick={handleAccept}
              id="disclaimer-agree-button"
              className="w-full sm:w-auto btn-gold rounded-sm py-3.5 px-8 text-[0.72rem] shadow-lg cursor-pointer"
            >
              I Agree &amp; Enter Chambers
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
