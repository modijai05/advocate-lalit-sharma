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
    <section id="contact" className="relative bg-[#F8FAFC] text-slate-900 py-16 sm:py-24 border-b border-slate-200 overflow-hidden">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="12" title="Contact & Appointments" theme="light" />
          <h2 className="font-heading font-extrabold text-slate-900 tracking-tight text-3xl sm:text-4xl mt-1">
            Chambers &amp; Consultations
          </h2>
          <p className="font-ui text-sm sm:text-base text-slate-600 max-w-lg mt-3">
            Rajasthan High Court Campus Chamber &amp; Residential Office Coordination.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Official Contact Coordinates (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4 text-left">
            {/* High Court Chamber Box */}
            <div className="card-light p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all hover-lift">
              <div className="flex items-center gap-2.5 font-ui text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>High Court Chamber</span>
              </div>
              <div className="font-heading text-lg font-bold text-slate-900 leading-snug mb-3">
                {CLIENT_PROFILE.chamber}
              </div>
              <a
                href={CLIENT_PROFILE.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-ui font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Residential Office Box */}
            <div className="card-light p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-amber-300 transition-all hover-lift">
              <div className="flex items-center gap-2.5 font-ui text-xs font-bold tracking-wider text-amber-600 uppercase mb-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Residential Office</span>
              </div>
              <div className="font-ui text-sm text-slate-700 leading-relaxed">
                {CLIENT_PROFILE.residentialOffice}
              </div>
            </div>

            {/* Direct Connect Details */}
            <div className="card-light p-6 rounded-xl border border-slate-200/90 shadow-sm space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-blue-50 rounded-lg border border-blue-200">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">Direct Telephone</div>
                  <a href={`tel:${CLIENT_PROFILE.phone.replace(/\s+/g, '')}`} className="font-ui text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {CLIENT_PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* WhatsApp */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">WhatsApp Direct</div>
                  <a href={`https://wa.me/${CLIENT_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-ui text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                    {CLIENT_PROFILE.whatsapp}
                  </a>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-purple-50 rounded-lg border border-purple-200">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">Official Email</div>
                  <a href={`mailto:${CLIENT_PROFILE.email}`} className="font-ui text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors break-all">
                    {CLIENT_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Chamber Timings */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <div className="font-ui text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">Consultation Hours</div>
                  <div className="font-ui text-xs text-slate-700 font-medium">{chamberTimings}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Forms Panel (Cols 6-12) */}
          <div className="md:col-span-7 card-light p-6 sm:p-9 rounded-2xl border border-slate-200/90 shadow-xl text-left relative">
            {/* Tab Selection */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-5 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab('enquiry')}
                className={`px-5 py-2.5 rounded-full text-xs font-ui font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'enquiry'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Send Enquiry
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('appointment')}
                className={`px-5 py-2.5 rounded-full text-xs font-ui font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'appointment'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                    <label htmlFor="enquiry-name" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={enquiryData.name}
                      onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      placeholder="+91 98..."
                      value={enquiryData.phone}
                      onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={enquiryData.email}
                      onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-matter" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Nature of Matter *
                    </label>
                    <select
                      id="enquiry-matter"
                      value={enquiryData.matterType}
                      onChange={(e) => setEnquiryData({ ...enquiryData, matterType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
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
                  <label htmlFor="enquiry-message" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Message / Brief Overview *
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    rows={4}
                    placeholder="Provide a concise description of your query or procedural matter..."
                    value={enquiryData.message}
                    onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-y"
                  />
                </div>

                <div className="text-xs text-slate-500 font-ui leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  "Submissions are general enquiries and do not create an attorney-client relationship."
                </div>

                {enquiryFeedback && (
                  <div
                    className={`p-4 text-xs font-ui rounded-lg flex items-center gap-2.5 ${
                      enquiryFeedback.success
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {enquiryFeedback.success ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    )}
                    <span>{enquiryFeedback.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={enquiryLoading}
                  className="btn-vibrant-blue shimmer-hover w-full sm:w-auto shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
                    <label htmlFor="apt-name" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="apt-name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={appointmentData.name}
                      onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-phone" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="apt-phone"
                      type="tel"
                      required
                      placeholder="+91..."
                      value={appointmentData.phone}
                      onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="apt-email" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      id="apt-email"
                      type="email"
                      required
                      placeholder="name@mail.com"
                      value={appointmentData.email}
                      onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-date" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="apt-date"
                      type="date"
                      required
                      value={appointmentData.preferredDate}
                      onChange={(e) => setAppointmentData({ ...appointmentData, preferredDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="apt-time" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Time Slot *
                    </label>
                    <select
                      id="apt-time"
                      value={appointmentData.preferredTime}
                      onChange={(e) => setAppointmentData({ ...appointmentData, preferredTime: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                      <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="apt-matter" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Nature of Matter *
                  </label>
                  <select
                    id="apt-matter"
                    value={appointmentData.matterType}
                    onChange={(e) => setAppointmentData({ ...appointmentData, matterType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Civil Litigation">Civil Litigation / Property</option>
                    <option value="Writ Petition">Writ Petition (Article 226 / 227)</option>
                    <option value="Criminal Proceedings">Criminal Proceedings / Bail / Quashing</option>
                    <option value="Revenue & Land">Rajasthan Revenue &amp; Land Law</option>
                    <option value="Family & Matrimonial">Family &amp; Matrimonial Dispute</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="apt-message" className="block text-xs font-ui font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Conference Agenda / Matter Context *
                  </label>
                  <textarea
                    id="apt-message"
                    required
                    rows={3}
                    placeholder="Briefly describe the matter and background for the chamber consultation..."
                    value={appointmentData.message}
                    onChange={(e) => setAppointmentData({ ...appointmentData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-y"
                  />
                </div>

                <div className="text-xs text-slate-500 font-ui leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  "Chamber consultations are scheduled in advance to ensure thorough case preparation."
                </div>

                {appointmentFeedback && (
                  <div
                    className={`p-4 text-xs font-ui rounded-lg flex items-center gap-2.5 ${
                      appointmentFeedback.success
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {appointmentFeedback.success ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    )}
                    <span>{appointmentFeedback.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={appointmentLoading}
                  className="btn-vibrant-gold shimmer-hover w-full sm:w-auto shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
