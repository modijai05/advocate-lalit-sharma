import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'
import { useCMS } from '../../context/CMSContext'
import { AdvocateTieMotif } from '../brand/AdvocateTieMotif'
import { CLIENT_PROFILE } from '../../data/initialData'

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const { submitAppointment } = useCMS()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    matterType: 'Civil Litigation',
    message: '',
    honeypot: ''
  })
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honeypot) return
    if (!formData.name || !formData.phone || !formData.email || !formData.preferredDate || !formData.message) {
      setFeedback({
        success: false,
        message: 'Please complete all required fields.'
      })
      return
    }

    setLoading(true)
    setFeedback(null)
    const res = await submitAppointment({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      matterType: formData.matterType,
      message: formData.message
    })
    setLoading(false)
    setFeedback(res)

    if (res.success) {
      const waMsg = encodeURIComponent(
        `Hello Advocate Lalit Sharma,\n\nI wish to book a consultation at your chambers. Details below:\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Preferred Date:* ${formData.preferredDate}\n` +
        `*Preferred Time:* ${formData.preferredTime}\n` +
        `*Nature of Matter:* ${formData.matterType}\n\n` +
        `*Agenda / Context:*\n${formData.message}\n\n` +
        `Please confirm the appointment at your earliest convenience. Thank you.`
      )
      window.open(`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}?text=${waMsg}`, '_blank')
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          preferredDate: '',
          preferredTime: 'Morning (10:00 AM - 1:00 PM)',
          matterType: 'Civil Litigation',
          message: '',
          honeypot: ''
        })
        onClose()
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0D0D0D] border border-white/20 max-w-xl w-full p-6 sm:p-8 text-left shadow-2xl relative my-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#8E8D88] hover:text-white border border-white/10"
            aria-label="Close appointment modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <AdvocateTieMotif width={28} height={32} className="text-[#E7E6E1]" />
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#8E8D88] uppercase">
                Chamber 259, Block-E
              </div>
              <h3 className="text-xl font-serif text-white font-medium">
                Request a Consultation Appointment
              </h3>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="hp_modal"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase mb-1">
                  Time Slot *
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                  <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase mb-1">
                  Nature of Matter *
                </label>
                <select
                  value={formData.matterType}
                  onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                  className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                >
                  <option value="Civil Litigation">Civil Litigation / Property</option>
                  <option value="Writ Petition">Writ Petition (Article 226 / 227)</option>
                  <option value="Criminal Proceedings">Criminal Proceedings / Bail</option>
                  <option value="Revenue & Land">Rajasthan Revenue & Land</option>
                  <option value="Family & Matrimonial">Family & Matrimonial</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#8E8D88] uppercase mb-1">
                Context of Matter *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Brief summary of matter or stage of proceeding..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none resize-none"
              />
            </div>

            <div className="text-[11px] font-mono text-[#8E8D88] bg-black/40 p-2.5 border border-white/5">
              "Appointment requests are subject to confirmation."
            </div>

            {feedback && (
              <div
                className={`p-3 text-xs font-mono flex items-center gap-2 ${
                  feedback.success
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-red-950/40 text-red-300 border border-red-800'
                }`}
              >
                {feedback.success ? (
                  <CheckCircle2 className="w-4 h-4 text-[#E7E6E1]" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono text-[#8E8D88] hover:text-white uppercase cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-[#F7F7F5] text-black text-xs font-sans font-medium uppercase tracking-wider hover:bg-white transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{loading ? 'Submitting...' : 'Book via WhatsApp'}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
