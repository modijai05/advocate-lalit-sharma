import React, { useState } from 'react'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { useCMS } from '../../context/CMSContext'
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  Calendar,
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react'
import { AdvocateTieMotif } from '../brand/AdvocateTieMotif'

export const ContactAndAppointment: React.FC = () => {
  const { chamberTimings, submitEnquiry, submitAppointment } = useCMS()

  const [activeTab, setActiveTab] = useState<'enquiry' | 'appointment'>('enquiry')

  // Enquiry Form State
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    phone: '',
    email: '',
    matterType: 'Civil Litigation',
    message: '',
    honeypot: '' // Spam protection
  })
  const [enquiryLoading, setEnquiryLoading] = useState(false)
  const [enquiryFeedback, setEnquiryFeedback] = useState<{ success: boolean; message: string } | null>(null)

  // Appointment Form State
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    matterType: 'Civil Litigation',
    message: '',
    honeypot: ''
  })
  const [appointmentLoading, setAppointmentLoading] = useState(false)
  const [appointmentFeedback, setAppointmentFeedback] = useState<{ success: boolean; message: string } | null>(null)

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (enquiryData.honeypot) return // silently discard bots
    if (!enquiryData.name || !enquiryData.phone || !enquiryData.email || !enquiryData.message) {
      setEnquiryFeedback({
        success: false,
        message: 'Please fill in all mandatory fields.'
      })
      return
    }

    setEnquiryLoading(true)
    setEnquiryFeedback(null)
    const res = await submitEnquiry({
      name: enquiryData.name,
      phone: enquiryData.phone,
      email: enquiryData.email,
      matterType: enquiryData.matterType,
      message: enquiryData.message
    })
    setEnquiryLoading(false)
    setEnquiryFeedback(res)
    if (res.success) {
      setEnquiryData({
        name: '',
        phone: '',
        email: '',
        matterType: 'Civil Litigation',
        message: '',
        honeypot: ''
      })
    }
  }

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (appointmentData.honeypot) return
    if (
      !appointmentData.name ||
      !appointmentData.phone ||
      !appointmentData.email ||
      !appointmentData.preferredDate ||
      !appointmentData.message
    ) {
      setAppointmentFeedback({
        success: false,
        message: 'Please provide all details including preferred date.'
      })
      return
    }

    setAppointmentLoading(true)
    setAppointmentFeedback(null)
    const res = await submitAppointment({
      name: appointmentData.name,
      phone: appointmentData.phone,
      email: appointmentData.email,
      preferredDate: appointmentData.preferredDate,
      preferredTime: appointmentData.preferredTime,
      matterType: appointmentData.matterType,
      message: appointmentData.message
    })
    setAppointmentLoading(false)
    setAppointmentFeedback(res)
    if (res.success) {
      setAppointmentData({
        name: '',
        phone: '',
        email: '',
        preferredDate: '',
        preferredTime: 'Morning (10:00 AM - 1:00 PM)',
        matterType: 'Civil Litigation',
        message: '',
        honeypot: ''
      })
    }
  }

  return (
    <section id="contact" className="relative bg-[#050505] text-[#F7F7F5] py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="12" title="CONTACT & APPOINTMENTS" theme="dark" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-normal tracking-tight">
            Chambers & Enquiries
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#8E8D88] uppercase mt-2">
            Rajasthan High Court & Residential Office Consultation
          </p>
          <AdvocateTieMotif variant="divider" className="w-48 text-white/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Coordinates (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Chamber Box */}
            <div className="bg-[#0C0C0C] border border-white/15 p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#E7E6E1] uppercase">
                <MapPin className="w-4 h-4 text-[#FFFFFF]" />
                <span>HIGH COURT CHAMBER</span>
              </div>
              <div className="text-lg font-serif text-[#FFFFFF] leading-snug">
                {CLIENT_PROFILE.chamber}
              </div>
              <div>
                <a
                  href={CLIENT_PROFILE.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E7E6E1] hover:text-white uppercase tracking-wider underline underline-offset-4"
                >
                  <span>VIEW CLIENT LOCATION ↗</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Residential Office Box */}
            <div className="bg-[#0C0C0C] border border-white/15 p-8 space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#8E8D88] uppercase">
                <MapPin className="w-4 h-4 text-[#E7E6E1]" />
                <span>RESIDENTIAL OFFICE</span>
              </div>
              <div className="text-base font-serif text-[#FFFFFF] leading-relaxed">
                {CLIENT_PROFILE.residentialOffice}
              </div>
            </div>

            {/* Telephony & Messaging Coordinates */}
            <div className="bg-[#0C0C0C] border border-white/15 p-8 space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-[#E7E6E1] mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-[#8E8D88] uppercase tracking-wider">
                      PHONE
                    </div>
                    <a
                      href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`}
                      className="text-base font-mono text-[#FFFFFF] hover:text-[#E7E6E1] transition-colors"
                    >
                      {CLIENT_PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-4 h-4 text-[#E7E6E1] mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-[#8E8D88] uppercase tracking-wider">
                      WHATSAPP
                    </div>
                    <a
                      href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-mono text-[#FFFFFF] hover:text-[#E7E6E1] transition-colors"
                    >
                      {CLIENT_PROFILE.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-[#E7E6E1] mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-[#8E8D88] uppercase tracking-wider">
                      EMAIL
                    </div>
                    <a
                      href={`mailto:${CLIENT_PROFILE.email}`}
                      className="text-sm font-mono text-[#FFFFFF] hover:text-[#E7E6E1] transition-colors break-all"
                    >
                      {CLIENT_PROFILE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Chamber Timings Box */}
            <div className="bg-[#0C0C0C] border border-white/15 p-6 flex items-start gap-4">
              <Clock className="w-4 h-4 text-[#8E8D88] mt-1 shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-[#8E8D88] uppercase tracking-wider">
                  CHAMBER TIMINGS
                </div>
                <div className="text-sm font-mono text-[#B8B7B1] mt-1">
                  {chamberTimings}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Forms Panel (Tabs for Enquiry & Appointment) (Cols 6-12) */}
          <div className="lg:col-span-7 bg-[#0C0C0C] border border-white/15 p-6 sm:p-10 text-left relative">
            {/* Tab Selection */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab('enquiry')}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all cursor-pointer ${
                  activeTab === 'enquiry'
                    ? 'bg-[#F7F7F5] text-[#050505] font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                Send Enquiry
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('appointment')}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all cursor-pointer ${
                  activeTab === 'appointment'
                    ? 'bg-[#F7F7F5] text-[#050505] font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                Request Appointment
              </button>
            </div>

            {/* TAB 1: General Enquiry Form */}
            {activeTab === 'enquiry' && (
              <form onSubmit={handleEnquirySubmit} className="space-y-6">
                {/* Bot Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={enquiryData.honeypot}
                  onChange={(e) => setEnquiryData({ ...enquiryData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="enquiry-name" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={enquiryData.name}
                      onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      placeholder="+91 98..."
                      value={enquiryData.phone}
                      onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={enquiryData.email}
                      onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-matter" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Nature of Matter *
                    </label>
                    <select
                      id="enquiry-matter"
                      value={enquiryData.matterType}
                      onChange={(e) => setEnquiryData({ ...enquiryData, matterType: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    >
                      <option value="Civil Litigation">Civil Litigation / Property</option>
                      <option value="Writ Petition">Writ Petition (Article 226 / 227)</option>
                      <option value="Criminal Proceedings">Criminal Proceedings / Bail / Quashing</option>
                      <option value="Revenue & Land">Rajasthan Revenue & Land Law</option>
                      <option value="Family & Matrimonial">Family & Matrimonial Dispute</option>
                      <option value="General Legal Enquiry">General Legal Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiry-message" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                    Message / Brief Overview of Query *
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    rows={4}
                    placeholder="Provide a concise description of the query or procedural background..."
                    value={enquiryData.message}
                    onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
                    className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none resize-y"
                  />
                </div>

                <div className="text-xs text-[#8E8D88] font-mono leading-relaxed bg-[#111111] p-3 border border-white/5">
                  "Submissions are general enquiries and do not create an attorney-client relationship."
                </div>

                {enquiryFeedback && (
                  <div
                    className={`p-4 text-xs font-mono flex items-center gap-2 ${
                      enquiryFeedback.success
                        ? 'bg-white/10 text-[#FFFFFF] border border-white/20'
                        : 'bg-red-950/40 text-red-300 border border-red-800'
                    }`}
                  >
                    {enquiryFeedback.success ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#E7E6E1]" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{enquiryFeedback.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={enquiryLoading}
                  className="w-full sm:w-auto px-8 py-4 bg-[#F7F7F5] text-[#050505] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {enquiryLoading ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>SEND ENQUIRY</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* TAB 2: Appointment Booking Form */}
            {activeTab === 'appointment' && (
              <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot_apt"
                  value={appointmentData.honeypot}
                  onChange={(e) => setAppointmentData({ ...appointmentData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="apt-name" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="apt-name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={appointmentData.name}
                      onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-phone" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="apt-phone"
                      type="tel"
                      required
                      placeholder="+91..."
                      value={appointmentData.phone}
                      onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="apt-email" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="apt-email"
                      type="email"
                      required
                      placeholder="name@mail.com"
                      value={appointmentData.email}
                      onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-date" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="apt-date"
                      type="date"
                      required
                      value={appointmentData.preferredDate}
                      onChange={(e) => setAppointmentData({ ...appointmentData, preferredDate: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-time" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="apt-time"
                      value={appointmentData.preferredTime}
                      onChange={(e) => setAppointmentData({ ...appointmentData, preferredTime: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                      <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="apt-matter" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                    Nature of Matter *
                  </label>
                  <select
                    id="apt-matter"
                    value={appointmentData.matterType}
                    onChange={(e) => setAppointmentData({ ...appointmentData, matterType: e.target.value })}
                    className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none"
                  >
                    <option value="Civil Litigation">Civil Litigation / Property</option>
                    <option value="Writ Petition">Writ Petition (Article 226 / 227)</option>
                    <option value="Criminal Proceedings">Criminal Proceedings / Bail / Quashing</option>
                    <option value="Revenue & Land">Rajasthan Revenue & Land Law</option>
                    <option value="Family & Matrimonial">Family & Matrimonial Dispute</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="apt-message" className="block text-xs font-mono text-[#8E8D88] uppercase tracking-wider mb-2">
                    Conference Agenda / Matter Context *
                  </label>
                  <textarea
                    id="apt-message"
                    required
                    rows={3}
                    placeholder="Briefly state the context of consultation..."
                    value={appointmentData.message}
                    onChange={(e) => setAppointmentData({ ...appointmentData, message: e.target.value })}
                    className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#F7F7F5] focus:border-[#E7E6E1] focus:outline-none resize-y"
                  />
                </div>

                <div className="text-xs text-[#8E8D88] font-mono leading-relaxed bg-[#111111] p-3 border border-white/5">
                  "Appointment requests are subject to confirmation."
                </div>

                {appointmentFeedback && (
                  <div
                    className={`p-4 text-xs font-mono flex items-center gap-2 ${
                      appointmentFeedback.success
                        ? 'bg-white/10 text-[#FFFFFF] border border-white/20'
                        : 'bg-red-950/40 text-red-300 border border-red-800'
                    }`}
                  >
                    {appointmentFeedback.success ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#E7E6E1]" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{appointmentFeedback.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={appointmentLoading}
                  className="w-full sm:w-auto px-8 py-4 bg-[#F7F7F5] text-[#050505] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {appointmentLoading ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>REQUEST APPOINTMENT</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
