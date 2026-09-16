import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCMS } from '../../context/CMSContext'
import {
  Lock,
  LogOut,
  X,
  FileText,
  Calendar,
  BookOpen,
  Plus,
  Trash2,
  User,
  Phone,
  Globe,
  CheckCircle2,
  RotateCcw
} from 'lucide-react'

interface AdminDashboardModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose
}) => {
  const {
    profile,
    socialLinks,
    publications,
    enquiries,
    appointments,
    chamberTimings,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    updateProfile,
    updateSocialLinks,
    updateChamberTimings,
    updateGoogleProfileUrl,
    addPublication,
    deletePublication,
    togglePublicationStatus,
    updateEnquiryStatus,
    updateAppointmentStatus,
    resetToDefaults
  } = useCMS()

  const [passcode, setPasscode] = useState('')
  const [authError, setAuthError] = useState(false)
  const [activeTab, setActiveTab] = useState<
    'enquiries' | 'appointments' | 'profile' | 'contact' | 'social' | 'publications'
  >('enquiries')

  // Form states for profile
  const [profileForm, setProfileForm] = useState(profile)
  const [socialForm, setSocialForm] = useState(socialLinks)
  const [timingsForm, setTimingsForm] = useState(chamberTimings)
  const [saveFeedback, setSaveFeedback] = useState('')

  // Form to add a publication
  const [newPubTitle, setNewPubTitle] = useState('')
  const [newPubJournal, setNewPubJournal] = useState('')
  const [newPubYear, setNewPubYear] = useState('2026')
  const [newPubSource, setNewPubSource] = useState('Rajasthan Law Weekly')

  // Sync state when profile changes
  useEffect(() => {
    setProfileForm(profile)
  }, [profile])

  useEffect(() => {
    setSocialForm(socialLinks)
  }, [socialLinks])

  useEffect(() => {
    setTimingsForm(chamberTimings)
  }, [chamberTimings])

  if (!isOpen) return null

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const success = loginAdmin(passcode)
    if (!success) {
      setAuthError(true)
    } else {
      setAuthError(false)
      setPasscode('')
    }
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile(profileForm)
    setSaveFeedback('Chamber profile updated successfully.')
    setTimeout(() => setSaveFeedback(''), 3500)
  }

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile({
      phone: profileForm.phone,
      whatsapp: profileForm.whatsapp,
      email: profileForm.email,
      chamber: profileForm.chamber,
      residentialOffice: profileForm.residentialOffice,
      locationUrl: profileForm.locationUrl
    })
    updateChamberTimings(timingsForm)
    setSaveFeedback('Chamber contact details & timings updated successfully.')
    setTimeout(() => setSaveFeedback(''), 3500)
  }

  const handleSaveSocial = (e: React.FormEvent) => {
    e.preventDefault()
    updateSocialLinks(socialForm)
    if (socialForm.google) {
      updateGoogleProfileUrl(socialForm.google)
    }
    setSaveFeedback('Digital profiles & social media links updated successfully.')
    setTimeout(() => setSaveFeedback(''), 3500)
  }

  const handleAddPublication = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPubTitle.trim()) return
    addPublication({
      title: newPubTitle,
      publication: newPubJournal,
      year: newPubYear,
      source: newPubSource,
      status: 'PUBLISHED'
    })
    setNewPubTitle('')
    setNewPubJournal('')
    setSaveFeedback('Publication added successfully.')
    setTimeout(() => setSaveFeedback(''), 3500)
  }

  const handleReset = () => {
    if (window.confirm('Reset all website modifications back to original defaults?')) {
      resetToDefaults()
      setSaveFeedback('All website sections reset to defaults.')
      setTimeout(() => setSaveFeedback(''), 3500)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-[#0D0D0D] border border-white/20 max-w-5xl w-full p-5 sm:p-8 text-left shadow-2xl relative max-h-[92vh] flex flex-col my-auto"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-serif font-bold text-sm">
              LS
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif text-white font-medium">
                Chambers Administrative CMS
              </h3>
              <p className="text-[10px] font-mono text-[#8E8D88] uppercase tracking-wider">
                Advocate Lalit Sharma & Associates · High Court Chamber 259
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminLoggedIn && (
              <button
                onClick={logoutAdmin}
                className="px-3 py-1.5 border border-white/20 text-xs font-mono text-[#8E8D88] hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#8E8D88] hover:text-white border border-white/10 cursor-pointer"
              aria-label="Close admin modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Unauthenticated Login Screen */}
        {!isAdminLoggedIn ? (
          <div className="py-12 px-4 max-w-md mx-auto w-full text-center space-y-6">
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#E7E6E1]">
              <Lock className="w-6 h-6" />
            </div>

            <div>
              <h4 className="text-xl font-serif text-white">Chamber Staff Authentication</h4>
              <p className="text-xs text-[#8E8D88] mt-1 font-mono">
                Authorised chamber access only. Client communications and website content controls are confidential.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase tracking-wider mb-2 text-left">
                  Staff Security Passcode
                </label>
                <input
                  type="password"
                  placeholder="Enter chamber staff security key"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-[#141414] border border-white/20 px-4 py-3 text-sm text-white font-mono focus:border-white focus:outline-none"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="text-xs font-mono text-red-400 bg-red-950/40 p-2.5 border border-red-800">
                  Invalid authorization key. Please verify with Chamber 259.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#F7F7F5] text-black font-mono text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors cursor-pointer"
              >
                Access Chamber Controls
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Chamber Management Screen */
          <div className="pt-4 flex-1 flex flex-col overflow-hidden">
            {/* Notification alert */}
            {saveFeedback && (
              <div className="mb-3 px-3 py-2 bg-emerald-950/60 border border-emerald-500 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{saveFeedback}</span>
              </div>
            )}

            {/* Tabs Navigation */}
            <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 mb-4 shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'enquiries'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('appointments')}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'appointments'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Appointments ({appointments.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'profile'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'contact'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chamber &amp; Contact</span>
              </button>

              <button
                onClick={() => setActiveTab('social')}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'social'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Social &amp; Google</span>
              </button>

              <button
                onClick={() => setActiveTab('publications')}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'publications'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Publications ({publications.length})</span>
              </button>
            </div>

            {/* Tab Contents (Scrollable) */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-6">
              
              {/* TAB 1: Enquiries */}
              {activeTab === 'enquiries' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase">
                      Client Enquiries Received
                    </h4>
                    <span className="text-xs font-mono text-[#8E8D88]">
                      Confidentiality Protected
                    </span>
                  </div>

                  {enquiries.length === 0 ? (
                    <div className="p-8 border border-dashed border-white/15 text-center text-xs font-mono text-[#8E8D88]">
                      No enquiries received yet. Submissions from the public enquiry form will appear here.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {enquiries.map((enq) => (
                        <div
                          key={enq.id}
                          className="bg-[#141414] border border-white/10 p-4 space-y-2.5 text-xs"
                        >
                          <div className="flex items-start justify-between flex-wrap gap-2">
                            <div>
                              <span className="font-semibold text-white text-sm">{enq.name}</span>
                              <span className="ml-2 font-mono text-[10px] text-neutral-400">
                                {new Date(enq.createdAt).toLocaleDateString()} {new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                            <span className="px-2 py-0.5 border border-white/20 text-[10px] font-mono uppercase text-white">
                              {enq.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] text-neutral-300">
                            <div>Phone: {enq.phone}</div>
                            <div>Email: {enq.email || 'N/A'}</div>
                            <div>Category: {enq.matterType}</div>
                          </div>

                          <div className="bg-[#1C1C1C] p-2.5 font-mono text-neutral-200 text-xs border border-white/5">
                            {enq.message}
                          </div>

                          <div className="flex items-center gap-2 pt-1 font-mono text-[11px]">
                            <button
                              onClick={() => updateEnquiryStatus(enq.id, 'REVIEWED')}
                              className="px-2 py-1 bg-white/10 hover:bg-white text-white hover:text-black transition-all cursor-pointer"
                            >
                              Mark Reviewed
                            </button>
                            <button
                              onClick={() => updateEnquiryStatus(enq.id, 'ARCHIVED')}
                              className="px-2 py-1 bg-white/5 hover:bg-white/20 text-neutral-400 hover:text-white transition-all cursor-pointer"
                            >
                              Archive
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: Appointments */}
              {activeTab === 'appointments' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase">
                      Chamber Consultation Requests
                    </h4>
                    <span className="text-xs font-mono text-[#8E8D88]">
                      Subject to Chamber Confirmation
                    </span>
                  </div>

                  {appointments.length === 0 ? (
                    <div className="p-8 border border-dashed border-white/15 text-center text-xs font-mono text-[#8E8D88]">
                      No consultation requests received yet.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {appointments.map((apt) => (
                        <div
                          key={apt.id}
                          className="bg-[#141414] border border-white/10 p-4 space-y-2.5 text-xs"
                        >
                          <div className="flex items-start justify-between flex-wrap gap-2">
                            <div>
                              <span className="font-semibold text-white text-sm">{apt.name}</span>
                              <span className="ml-2 font-mono text-[10px] text-neutral-400">
                                {new Date(apt.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <span className="px-2 py-0.5 border border-white/20 text-[10px] font-mono uppercase text-white">
                              {apt.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-[11px] text-neutral-300">
                            <div>Phone: {apt.phone}</div>
                            <div>Email: {apt.email || 'N/A'}</div>
                            <div>Date: {apt.preferredDate}</div>
                            <div>Time: {apt.preferredTime}</div>
                          </div>

                          <div className="bg-[#1C1C1C] p-2.5 font-mono text-neutral-200 text-xs border border-white/5">
                            {apt.message}
                          </div>

                          <div className="flex items-center gap-2 pt-1 font-mono text-[11px]">
                            <button
                              onClick={() => updateAppointmentStatus(apt.id, 'CONFIRMED')}
                              className="px-2 py-1 bg-white/10 hover:bg-white text-white hover:text-black transition-all cursor-pointer"
                            >
                              Confirm Consultation
                            </button>
                            <button
                              onClick={() => updateAppointmentStatus(apt.id, 'ARCHIVED')}
                              className="px-2 py-1 bg-white/5 hover:bg-white/20 text-neutral-400 hover:text-white transition-all cursor-pointer"
                            >
                              Archive
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Edit Profile & Bio */}
              {activeTab === 'profile' && (
                <form onSubmit={handleSaveProfile} className="space-y-4 bg-[#141414] border border-white/15 p-5 text-xs">
                  <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase border-b border-white/10 pb-2">
                    Counsel Profile &amp; Bio Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Advocate Full Name
                      </label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Chamber / Firm Title
                      </label>
                      <input
                        type="text"
                        value={profileForm.firm}
                        onChange={(e) => setProfileForm({ ...profileForm, firm: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Bar Council Enrolment No.
                      </label>
                      <input
                        type="text"
                        value={profileForm.enrolmentNo}
                        onChange={(e) => setProfileForm({ ...profileForm, enrolmentNo: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Bar Council Authority
                      </label>
                      <input
                        type="text"
                        value={profileForm.barCouncil}
                        onChange={(e) => setProfileForm({ ...profileForm, barCouncil: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Appellate Court Jurisdiction
                      </label>
                      <input
                        type="text"
                        value={profileForm.court}
                        onChange={(e) => setProfileForm({ ...profileForm, court: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Years of Standing
                      </label>
                      <input
                        type="number"
                        value={profileForm.experienceYears}
                        onChange={(e) => setProfileForm({ ...profileForm, experienceYears: Number(e.target.value) || 0 })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                      Professional Quote / Introduction (About Section)
                    </label>
                    <textarea
                      rows={3}
                      value={profileForm.biographyIntro}
                      onChange={(e) => setProfileForm({ ...profileForm, biographyIntro: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/20 p-3 text-white font-sans focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                      Chamber Practice Narrative
                    </label>
                    <textarea
                      rows={3}
                      value={profileForm.biographyChamber}
                      onChange={(e) => setProfileForm({ ...profileForm, biographyChamber: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/20 p-3 text-white font-sans focus:border-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 cursor-pointer"
                    >
                      Save Profile Changes
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 4: Edit Contact & Chamber Details */}
              {activeTab === 'contact' && (
                <form onSubmit={handleSaveContact} className="space-y-4 bg-[#141414] border border-white/15 p-5 text-xs">
                  <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase border-b border-white/10 pb-2">
                    Chamber Addresses, Phone &amp; Consultations
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Primary Chamber Phone
                      </label>
                      <input
                        type="text"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Official WhatsApp Number
                      </label>
                      <input
                        type="text"
                        value={profileForm.whatsapp}
                        onChange={(e) => setProfileForm({ ...profileForm, whatsapp: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Official Chambers Email
                      </label>
                      <input
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Chamber Consultation Timings
                      </label>
                      <input
                        type="text"
                        value={timingsForm}
                        onChange={(e) => setTimingsForm(e.target.value)}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                      High Court Chamber Address
                    </label>
                    <input
                      type="text"
                      value={profileForm.chamber}
                      onChange={(e) => setProfileForm({ ...profileForm, chamber: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                      Residential Office Address
                    </label>
                    <input
                      type="text"
                      value={profileForm.residentialOffice}
                      onChange={(e) => setProfileForm({ ...profileForm, residentialOffice: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                      Google Maps / Directions Share URL
                    </label>
                    <input
                      type="text"
                      value={profileForm.locationUrl}
                      onChange={(e) => setProfileForm({ ...profileForm, locationUrl: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 cursor-pointer"
                    >
                      Save Contact &amp; Timings
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 5: Social & Google Profile */}
              {activeTab === 'social' && (
                <div className="space-y-4">
                  <form onSubmit={handleSaveSocial} className="space-y-4 bg-[#141414] border border-white/15 p-5 text-xs">
                    <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase border-b border-white/10 pb-2">
                      Digital Presence &amp; Social Links
                    </h4>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Google Business / Profile URL
                      </label>
                      <input
                        type="text"
                        value={socialForm.google}
                        onChange={(e) => setSocialForm({ ...socialForm, google: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="text"
                        value={socialForm.linkedin}
                        onChange={(e) => setSocialForm({ ...socialForm, linkedin: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Facebook Profile URL
                      </label>
                      <input
                        type="text"
                        value={socialForm.facebook}
                        onChange={(e) => setSocialForm({ ...socialForm, facebook: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                        Instagram Profile URL
                      </label>
                      <input
                        type="text"
                        value={socialForm.instagram}
                        onChange={(e) => setSocialForm({ ...socialForm, instagram: e.target.value })}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 cursor-pointer"
                      >
                        Save Digital Presence Links
                      </button>
                    </div>
                  </form>

                  {/* Reset to Original Defaults */}
                  <div className="bg-[#141414] border border-red-900/40 p-4 text-xs flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <div className="font-mono text-neutral-200 uppercase font-semibold">Chamber Site Reset</div>
                      <div className="font-mono text-[11px] text-neutral-400">Restore all website contents to factory default verified state.</div>
                    </div>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 border border-red-800 text-red-400 hover:bg-red-950/50 font-mono text-xs uppercase flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset To Defaults</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 6: Publications */}
              {activeTab === 'publications' && (
                <div className="space-y-5 text-xs">
                  {/* Add Publication Form */}
                  <form onSubmit={handleAddPublication} className="bg-[#141414] border border-white/15 p-5 space-y-3">
                    <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase border-b border-white/10 pb-2">
                      Publish Case Note / Legal Analysis
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                          Publication / Case Note Title
                        </label>
                        <input
                          type="text"
                          value={newPubTitle}
                          onChange={(e) => setNewPubTitle(e.target.value)}
                          placeholder="e.g. Appellate Procedure in Revenue Revisions"
                          className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                          Journal / Law Reporter
                        </label>
                        <input
                          type="text"
                          value={newPubJournal}
                          onChange={(e) => setNewPubJournal(e.target.value)}
                          placeholder="e.g. Rajasthan Law Weekly"
                          className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                          Year
                        </label>
                        <input
                          type="text"
                          value={newPubYear}
                          onChange={(e) => setNewPubYear(e.target.value)}
                          className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-mono focus:border-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] text-neutral-400 uppercase mb-1">
                          Source / Citation Index
                        </label>
                        <input
                          type="text"
                          value={newPubSource}
                          onChange={(e) => setNewPubSource(e.target.value)}
                          className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2 text-white font-sans focus:border-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-2 px-4 py-2 bg-white text-black font-mono text-xs uppercase font-semibold hover:bg-neutral-200 cursor-pointer flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Publication</span>
                    </button>
                  </form>

                  {/* Existing Publications List */}
                  <div className="space-y-2">
                    <h5 className="font-mono text-xs text-neutral-400 uppercase">
                      Current Publications ({publications.length})
                    </h5>

                    {publications.map((pub) => (
                      <div
                        key={pub.id}
                        className="bg-[#141414] border border-white/10 p-3.5 flex items-center justify-between gap-3 flex-wrap"
                      >
                        <div className="space-y-1">
                          <div className="font-sans font-semibold text-white text-xs">{pub.title}</div>
                          <div className="font-mono text-[11px] text-neutral-400">
                            {pub.publication} · {pub.year} · {pub.source}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => togglePublicationStatus(pub.id)}
                            className={`px-2.5 py-1 text-[10px] font-mono uppercase cursor-pointer border ${
                              pub.status === 'PUBLISHED'
                                ? 'bg-white/15 border-white/30 text-white'
                                : 'bg-black border-white/15 text-[#8E8D88]'
                            }`}
                          >
                            {pub.status}
                          </button>

                          <button
                            onClick={() => deletePublication(pub.id)}
                            className="p-1 text-[#8E8D88] hover:text-red-400 cursor-pointer"
                            title="Delete publication"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
