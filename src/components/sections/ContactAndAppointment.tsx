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
    <section id="contact" className="relative bg-[#FFFFFF] text-black py-16 sm:py-24 border-b border-black/15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="09" title="Contact & Appointments" theme="light" />
          <h2 className="font-heading font-bold text-black tracking-tight text-3xl sm:text-4xl mt-1">
            Chambers &amp; Consultations
          </h2>
          <p className="font-ui text-sm sm:text-base text-neutral-600 max-w-lg mt-2">
            Rajasthan High Court Campus Chamber &amp; Residential Office Coordination.
          </p>
          <div className="mt-4 w-12 h-0.5 bg-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Official Contact Coordinates (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4 text-left">
            {/* High Court Chamber Box */}
            <div className="p-6 bg-white border border-neutral-300">
              <div className="flex items-center gap-2 font-ui text-xs font-bold tracking-wider text-black uppercase mb-2">
                <MapPin className="w-4 h-4 text-black" />
                <span>High Court Chamber</span>
              </div>
              <div className="font-heading text-lg font-bold text-black leading-snug mb-3">
                {CLIENT_PROFILE.chamber}
              </div>
              <a
                href={CLIENT_PROFILE.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-neutral-700 hover:text-black underline underline-offset-4"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Residential Office Box */}
            <div className="p-6 bg-white border border-neutral-300">
              <div className="flex items-center gap-2 font-ui text-xs font-bold tracking-wider text-black uppercase mb-2">
                <MapPin className="w-4 h-4 text-black" />
                <span>Residential Office</span>
              </div>
              <div className="font-ui text-sm text-neutral-700 leading-relaxed">
                {CLIENT_PROFILE.residentialOffice}
              </div>
            </div>

            {/* Direct Connect Details */}
            <div className="p-6 bg-white border border-neutral-300 space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="p-2 border border-neutral-300 text-black">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-neutral-500 uppercase tracking-wider">Direct Telephone</div>
                  <a href="tel:9829233334" className="font-ui text-sm font-bold text-black hover:underline">
                    Call now (9829233334)
                  </a>
                </div>
              </div>

              <div className="h-px bg-neutral-200" />

              {/* WhatsApp */}
              <div className="flex items-center gap-3.5">
                <div className="p-2 border border-neutral-300 text-black">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-neutral-500 uppercase tracking-wider">WhatsApp Direct</div>
                  <a href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-ui text-sm font-bold text-black hover:underline">
                    {CLIENT_PROFILE.whatsapp}
                  </a>
                </div>
              </div>

              <div className="h-px bg-neutral-200" />

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="p-2 border border-neutral-300 text-black">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-neutral-500 uppercase tracking-wider">Official Email</div>
                  <a href={`mailto:${CLIENT_PROFILE.email}`} className="font-ui text-sm font-medium text-black hover:underline break-all">
                    {CLIENT_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="h-px bg-neutral-200" />

              {/* Chamber Timings */}
              <div className="flex items-center gap-3.5">
                <div className="p-2 border border-neutral-300 text-black">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-neutral-500 uppercase tracking-wider">Consultation Hours</div>
                  <div className="font-ui text-xs text-neutral-700 font-medium">{chamberTimings}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Forms Panel (Cols 6-12) */}
          <div className="md:col-span-7 p-6 sm:p-9 border border-neutral-300 bg-white text-left relative">
            {/* Tab Selection */}
            <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-5 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab('enquiry')}
                className={`px-5 py-2.5 text-xs font-ui font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'enquiry'
                    ? 'bg-black text-white'
                    : 'text-neutral-700 hover:text-black border border-neutral-300 hover:border-black'
                }`}
              >
                Send Enquiry
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('appointment')}
                className={`px-5 py-2.5 text-xs font-ui font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'appointment'
                    ? 'bg-black text-white'
                    : 'text-neutral-700 hover:text-black border border-neutral-300 hover:border-black'
                }`}
              >
                Schedule Consultation
              </button>
            </div>

            {/* TAB 1: General Enquiry Form */}
            {activeTab === 'enquiry' && (
              <form onSubmit={handleEnquirySubmit} className="space-y-5">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enquiry-name" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={enquiryData.name}
                      onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      placeholder="+91 98..."
                      value={enquiryData.phone}
                      onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={enquiryData.email}
                      onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-matter" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Nature of Matter *
                    </label>
                    <select
                      id="enquiry-matter"
                      value={enquiryData.matterType}
                      onChange={(e) => setEnquiryData({ ...enquiryData, matterType: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    >
                      <option value="Civil Litigation">Civil Litigation / Property</option>
                      <option value="Writ Petition">Writ Petition (Article 226 / 227)</option>
                      <option value="Criminal Proceedings">Criminal Proceedings / Bail / Quashing</option>
                      <option value="Revenue & Land">Rajasthan Revenue &amp; Land Law</option>
                      <option value="Family & Matrimonial">Family &amp; Matrimonial Dispute</option>
                      <option value="General Legal Enquiry">General Legal Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiry-message" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Message / Brief Overview *
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    rows={4}
                    placeholder="Provide a concise description of your query or procedural matter..."
                    value={enquiryData.message}
                    onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all resize-y"
                  />
                </div>

                <div className="text-xs text-neutral-500 font-ui leading-relaxed bg-neutral-50 p-3 border border-neutral-200">
                  "Submissions are general enquiries and do not create an attorney-client relationship."
                </div>

                {enquiryFeedback && (
                  <div
                    className={`p-4 text-xs font-ui border flex items-center gap-2.5 ${
                      enquiryFeedback.success
                        ? 'bg-neutral-100 text-black border-black'
                        : 'bg-neutral-100 text-black border-neutral-400'
                    }`}
                  >
                    {enquiryFeedback.success ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-black" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-black" />
                    )}
                    <span>{enquiryFeedback.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={enquiryLoading}
                  className="w-full sm:w-auto px-6 py-3 bg-black text-white hover:bg-neutral-800 font-ui text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
                >
                  {enquiryLoading ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND ENQUIRY</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* TAB 2: Appointment Booking Form */}
            {activeTab === 'appointment' && (
              <form onSubmit={handleAppointmentSubmit} className="space-y-5">
                <input
                  type="text"
                  name="honeypot_apt"
                  value={appointmentData.honeypot}
                  onChange={(e) => setAppointmentData({ ...appointmentData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="apt-name" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="apt-name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={appointmentData.name}
                      onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-phone" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="apt-phone"
                      type="tel"
                      required
                      placeholder="+91..."
                      value={appointmentData.phone}
                      onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="apt-email" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      id="apt-email"
                      type="email"
                      required
                      placeholder="name@mail.com"
                      value={appointmentData.email}
                      onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-date" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="apt-date"
                      type="date"
                      required
                      value={appointmentData.preferredDate}
                      onChange={(e) => setAppointmentData({ ...appointmentData, preferredDate: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-time" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Time Slot *
                    </label>
                    <select
                      id="apt-time"
                      value={appointmentData.preferredTime}
                      onChange={(e) => setAppointmentData({ ...appointmentData, preferredTime: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                      <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="apt-matter" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Nature of Matter *
                  </label>
                  <select
                    id="apt-matter"
                    value={appointmentData.matterType}
                    onChange={(e) => setAppointmentData({ ...appointmentData, matterType: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all"
                  >
                    <option value="Civil Litigation">Civil Litigation / Property</option>
                    <option value="Writ Petition">Writ Petition (Article 226 / 227)</option>
                    <option value="Criminal Proceedings">Criminal Proceedings / Bail / Quashing</option>
                    <option value="Revenue & Land">Rajasthan Revenue &amp; Land Law</option>
                    <option value="Family & Matrimonial">Family &amp; Matrimonial Dispute</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="apt-message" className="block text-xs font-ui font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Conference Agenda / Matter Context *
                  </label>
                  <textarea
                    id="apt-message"
                    required
                    rows={3}
                    placeholder="Briefly describe the matter and background for the chamber consultation..."
                    value={appointmentData.message}
                    onChange={(e) => setAppointmentData({ ...appointmentData, message: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-sm text-black focus:bg-white focus:border-black outline-none transition-all resize-y"
                  />
                </div>

                <div className="text-xs text-neutral-500 font-ui leading-relaxed bg-neutral-50 p-3 border border-neutral-200">
                  "Chamber consultations are scheduled in advance to ensure thorough case preparation."
                </div>

                {appointmentFeedback && (
                  <div
                    className={`p-4 text-xs font-ui border flex items-center gap-2.5 ${
                      appointmentFeedback.success
                        ? 'bg-neutral-100 text-black border-black'
                        : 'bg-neutral-100 text-black border-neutral-400'
                    }`}
                  >
                    {appointmentFeedback.success ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-black" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-black" />
                    )}
                    <span>{appointmentFeedback.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={appointmentLoading}
                  className="w-full sm:w-auto px-6 py-3 bg-black text-white hover:bg-neutral-800 font-ui text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
                >
                  {appointmentLoading ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>SCHEDULE CONSULTATION</span>
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
