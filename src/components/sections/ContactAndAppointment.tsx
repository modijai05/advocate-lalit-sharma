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
    <section id="contact" className="relative bg-[#050505] text-[#F7F7F5] py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="12" title="Contact & Appointments" theme="dark" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Chambers & Enquiries
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-[0.15em] text-[#8E8D88] uppercase mt-2">
            Rajasthan High Court & Residential Office Consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Official Contact Coordinates */}
          <div className="space-y-4 text-left">
            {/* Chamber Box */}
            <div className="bg-[#0C0C0C] border border-white/15 p-5 space-y-3">
              <div className="flex items-center gap-2.5 font-ui text-[0.58rem] font-bold tracking-widest text-[#E7E6E1] uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#FFFFFF]" />
                <span>High Court Chamber</span>
              </div>
              <div className="font-heading text-[0.95rem] text-[#FFFFFF] leading-snug">
                {CLIENT_PROFILE.chamber}
              </div>
              <a
                href={CLIENT_PROFILE.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-ui text-[0.7rem] text-[#C9A84C] hover:text-[#E5C368] transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                <span>View on Google Maps ↗</span>
              </a>
            </div>

            {/* Residential Office Box */}
            <div className="bg-[#0C0C0C] border border-white/15 p-5 space-y-2">
              <div className="flex items-center gap-2.5 font-ui text-[0.58rem] font-bold tracking-widest text-[#8E8D88] uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#E7E6E1]" />
                <span>Residential Office</span>
              </div>
              <div className="font-ui text-[0.88rem] text-[#FFFFFF] leading-relaxed">
                {CLIENT_PROFILE.residentialOffice}
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-[#0C0C0C] border border-white/15 p-5 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                <div>
                  <div className="font-ui text-[0.55rem] text-[#8E8D88] uppercase tracking-wider">Phone</div>
                  <a href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`} className="font-ui text-[0.9rem] text-[#FFFFFF] hover:text-[#F0EEE8] transition-colors">{CLIENT_PROFILE.phone}</a>
                </div>
              </div>
              <div className="h-px bg-white/8" />
              <div className="flex items-center gap-3">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <div>
                  <div className="font-ui text-[0.55rem] text-[#8E8D88] uppercase tracking-wider">WhatsApp</div>
                  <a href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-ui text-[0.9rem] text-[#FFFFFF] hover:text-[#F0EEE8] transition-colors">{CLIENT_PROFILE.whatsapp}</a>
                </div>
              </div>
              <div className="h-px bg-white/8" />
              <div className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[#9B9790] shrink-0" />
                <div>
                  <div className="font-ui text-[0.55rem] text-[#8E8D88] uppercase tracking-wider">Email</div>
                  <a href={`mailto:${CLIENT_PROFILE.email}`} className="font-ui text-[0.85rem] text-[#FFFFFF] hover:text-[#F0EEE8] transition-colors break-all">{CLIENT_PROFILE.email}</a>
                </div>
              </div>
              <div className="h-px bg-white/8" />
              <div className="flex items-center gap-3">
                <Clock className="w-3.5 h-3.5 text-[#9B9790] shrink-0" />
                <div>
                  <div className="font-ui text-[0.55rem] text-[#8E8D88] uppercase tracking-wider">Timings</div>
                  <div className="font-ui text-[0.85rem] text-[#B8B7B1]">{chamberTimings}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Forms Panel */}
          <div className="bg-[#0C0C0C] border border-white/15 p-5 sm:p-7 text-left relative">
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
