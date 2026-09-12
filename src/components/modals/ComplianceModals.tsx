import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck } from 'lucide-react'
import { DISCLAIMER_TEXT } from '../../data/initialData'
import { AdvocateTieMotif } from '../brand/AdvocateTieMotif'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const DisclaimerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0D0D0D] border border-white/20 max-w-2xl w-full p-6 sm:p-10 text-left shadow-2xl relative my-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#8E8D88] hover:text-white border border-white/10"
            aria-label="Close disclaimer modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <AdvocateTieMotif width={28} height={32} className="text-[#E7E6E1]" />
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#8E8D88] uppercase">
                Bar Council Compliance
              </div>
              <h3 className="text-xl font-serif text-white font-medium">
                Website Disclaimer & Terms of Access
              </h3>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-[#B8B7B1] font-sans leading-relaxed text-justify space-y-4 border-l-2 border-white/20 pl-4 py-2">
            <p>{DISCLAIMER_TEXT}</p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8E8D88]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E7E6E1]" />
              <span>Advocate Lalit Sharma · Enrolment 2746/2005</span>
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export const PrivacyPolicyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0D0D0D] border border-white/20 max-w-2xl w-full p-6 sm:p-10 text-left shadow-2xl relative my-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#8E8D88] hover:text-white border border-white/10"
            aria-label="Close privacy policy modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <AdvocateTieMotif width={28} height={32} className="text-[#E7E6E1]" />
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#8E8D88] uppercase">
                Privacy & Confidentiality
              </div>
              <h3 className="text-xl font-serif text-white font-medium">
                Chamber Confidentiality & Data Policy
              </h3>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-[#B8B7B1] font-sans leading-relaxed space-y-4 border-l-2 border-white/20 pl-4 py-2">
            <p>
              Advocate Lalit Sharma & Associates is committed to the highest standards of professional discretion, confidentiality, and data protection in accordance with the Advocates Act, 1961, and Indian evidentiary privilege rules.
            </p>
            <p>
              Information transmitted through this website's enquiry or appointment forms is treated with strict professional confidentiality. We do not sell, disclose, or distribute client or visitor data to third parties.
            </p>
            <p>
              Submissions through web forms do not constitute formal retainer or attorney-client representation until explicitly engaged by counsel.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8E8D88]">
            <span>Chambers: High Court Campus, Jaipur</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
