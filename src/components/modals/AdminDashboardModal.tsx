import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCMS } from '../../context/CMSContext'
import {
  Lock,
  LogOut,
  X,
  FileText,
  Calendar,
  Settings,
  BookOpen,
  Plus,
  Trash2
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
    publications,
    enquiries,
    appointments,
    chamberTimings,
    googleProfileUrl,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    updateChamberTimings,
    updateGoogleProfileUrl,
    addPublication,
    deletePublication,
    togglePublicationStatus,
    updateEnquiryStatus,
    updateAppointmentStatus
  } = useCMS()

  const [passcode, setPasscode] = useState('')
  const [authError, setAuthError] = useState(false)
  const [activeTab, setActiveTab] = useState<'enquiries' | 'appointments' | 'publications' | 'settings'>('enquiries')

  // Form to add a publication
  const [newPubTitle, setNewPubTitle] = useState('')
  const [newPubJournal, setNewPubJournal] = useState('')
  const [newPubYear, setNewPubYear] = useState('2026')
  const [newPubSource, setNewPubSource] = useState('Rajasthan Law Weekly')

  // Setting edit states
  const [editTimings, setEditTimings] = useState(chamberTimings)
  const [editGoogleUrl, setEditGoogleUrl] = useState(googleProfileUrl)
  const [saveFeedback, setSaveFeedback] = useState('')

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

  const handleAddPublication = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPubTitle) return
    addPublication({
      title: newPubTitle,
      publication: newPubJournal,
      year: newPubYear,
      source: newPubSource,
      status: 'PUBLISHED'
    })
    setNewPubTitle('')
    setNewPubJournal('')
  }

  const handleSaveSettings = () => {
    updateChamberTimings(editTimings)
    updateGoogleProfileUrl(editGoogleUrl)
    setSaveFeedback('Settings successfully updated.')
    setTimeout(() => setSaveFeedback(''), 3000)
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0D0D0D] border border-white/20 max-w-4xl w-full p-6 sm:p-8 text-left shadow-2xl relative max-h-[90vh] flex flex-col"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-serif font-bold text-sm">
              LS
            </div>
            <div>
              <h3 className="text-lg font-serif text-white font-medium">
                Chambers Administrative Portal
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
                <span>Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#8E8D88] hover:text-white border border-white/10"
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
                Authorised chamber access only. Client communications are protected under legal professional confidentiality.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#8E8D88] uppercase tracking-wider mb-2 text-left">
                  Staff Passcode
                </label>
                <input
                  type="password"
                  placeholder="Enter passcode (e.g. chamber259)"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-[#141414] border border-white/20 px-4 py-3 text-sm text-white font-mono focus:border-white focus:outline-none"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="text-xs font-mono text-red-400 bg-red-950/40 p-2.5 border border-red-800">
                  Invalid authorization passcode. Please verify with Chamber 259.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#F7F7F5] text-black font-mono text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors cursor-pointer"
              >
                Access Chamber Records
              </button>

              <div className="text-[11px] font-mono text-[#666560]">
                Demo staff key: <code className="text-[#B8B7B1]">chamber259</code>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Chamber Management Screen */
          <div className="pt-6 flex-1 flex flex-col overflow-hidden">
            {/* Tabs Navigation */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-6 shrink-0 flex-wrap">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 ${
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
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'appointments'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Appointments ({appointments.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('publications')}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'publications'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Publications CMS ({publications.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'settings'
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8D88] hover:text-white'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Chamber Settings</span>
              </button>
            </div>

            {/* Tab Contents (Scrollable) */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-6">
              {/* TAB 1: Enquiries */}
              {activeTab === 'enquiries' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-mono tracking-widest text-[#E7E6E1] uppercase">
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
                          className="bg-[#141414] border border-white/10 p-5 space-y-3"
                        >
                          <div className="flex items-start justify-between flex-wrap gap-2">
                            <div>
                              <div className="text-base font-serif text-white font-medium">
                                {enq.name}
                              </div>
                              <div className="text-xs font-mono text-[#8E8D88]">
                                {enq.phone} · {enq.email}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-white/5 border border-white/15 text-[10px] font-mono text-[#E7E6E1]">
                                {enq.matterType}
                              </span>
                              <select
                                value={enq.status}
                                onChange={(e) =>
                                  updateEnquiryStatus(enq.id, e.target.value as any)
                                }
                                className="bg-[#1C1C1C] border border-white/20 text-[11px] font-mono text-white px-2 py-1"
                              >
                                <option value="NEW">Status: NEW</option>
                                <option value="REVIEWED">Status: REVIEWED</option>
                                <option value="ARCHIVED">Status: ARCHIVED</option>
                              </select>
                            </div>
                          </div>

                          <p className="text-xs text-[#B8B7B1] bg-black/40 p-3 border border-white/5 leading-relaxed font-sans">
                            {enq.message}
                          </p>

                          <div className="text-[10px] font-mono text-[#666560]">
                            Received: {new Date(enq.createdAt).toLocaleString()}
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
                    <h4 className="text-sm font-mono tracking-widest text-[#E7E6E1] uppercase">
                      Chamber Appointment Requests
                    </h4>
                    <span className="text-xs font-mono text-[#8E8D88]">
                      Subject to Confirmation
                    </span>
                  </div>

                  {appointments.length === 0 ? (
                    <div className="p-8 border border-dashed border-white/15 text-center text-xs font-mono text-[#8E8D88]">
                      No appointment requests yet. Bookings from the appointment form will appear here.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {appointments.map((apt) => (
                        <div
                          key={apt.id}
                          className="bg-[#141414] border border-white/10 p-5 space-y-3"
                        >
                          <div className="flex items-start justify-between flex-wrap gap-2">
                            <div>
                              <div className="text-base font-serif text-white font-medium">
                                {apt.name}
                              </div>
                              <div className="text-xs font-mono text-[#8E8D88]">
                                {apt.phone} · {apt.email}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-white/10 text-[10px] font-mono text-white">
                                {apt.preferredDate} ({apt.preferredTime})
                              </span>
                              <select
                                value={apt.status}
                                onChange={(e) =>
                                  updateAppointmentStatus(apt.id, e.target.value as any)
                                }
                                className="bg-[#1C1C1C] border border-white/20 text-[11px] font-mono text-white px-2 py-1"
                              >
                                <option value="PENDING">PENDING</option>
                                <option value="CONFIRMED">CONFIRMED</option>
                                <option value="ARCHIVED">ARCHIVED</option>
                              </select>
                            </div>
                          </div>

                          <div className="text-xs font-mono text-[#E7E6E1]">
                            Matter: {apt.matterType}
                          </div>

                          <p className="text-xs text-[#B8B7B1] bg-black/40 p-3 border border-white/5 leading-relaxed font-sans">
                            {apt.message}
                          </p>

                          <div className="text-[10px] font-mono text-[#666560]">
                            Requested: {new Date(apt.createdAt).toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Publications CMS */}
              {activeTab === 'publications' && (
                <div className="space-y-6">
                  {/* Add New Publication Form */}
                  <div className="bg-[#141414] border border-white/15 p-5">
                    <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase mb-4 flex items-center gap-2">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Verified Legal Publication</span>
                    </h4>

                    <form onSubmit={handleAddPublication} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-mono text-[#8E8D88] uppercase mb-1">
                          Article / Paper Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Scope of Interference under Article 227"
                          value={newPubTitle}
                          onChange={(e) => setNewPubTitle(e.target.value)}
                          className="w-full bg-[#1C1C1C] border border-white/15 px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-[#8E8D88] uppercase mb-1">
                          Journal / Publication
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rajasthan Law Weekly"
                          value={newPubJournal}
                          onChange={(e) => setNewPubJournal(e.target.value)}
                          className="w-full bg-[#1C1C1C] border border-white/15 px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-mono text-[#8E8D88] uppercase mb-1">
                            Year
                          </label>
                          <input
                            type="text"
                            value={newPubYear}
                            onChange={(e) => setNewPubYear(e.target.value)}
                            className="w-full bg-[#1C1C1C] border border-white/15 px-3 py-2 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-[#8E8D88] uppercase mb-1">
                            Source
                          </label>
                          <input
                            type="text"
                            value={newPubSource}
                            onChange={(e) => setNewPubSource(e.target.value)}
                            className="w-full bg-[#1C1C1C] border border-white/15 px-3 py-2 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider font-medium hover:bg-[#E7E6E1]"
                        >
                          Add to Publications
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Existing Publications List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono tracking-widest text-[#8E8D88] uppercase">
                      Current Publications Index ({publications.length})
                    </h4>
                    {publications.map((pub) => (
                      <div
                        key={pub.id}
                        className="bg-[#141414] border border-white/10 p-4 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-sm font-serif text-white font-medium">
                            {pub.title}
                          </div>
                          <div className="text-xs font-mono text-[#8E8D88]">
                            {pub.publication} · {pub.year} · {pub.source}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => togglePublicationStatus(pub.id)}
                            className={`px-2 py-1 text-[10px] font-mono uppercase border ${
                              pub.status === 'PUBLISHED'
                                ? 'bg-white/15 border-white/30 text-white'
                                : 'bg-black border-white/15 text-[#8E8D88]'
                            }`}
                          >
                            {pub.status}
                          </button>

                          <button
                            onClick={() => deletePublication(pub.id)}
                            className="p-1 text-[#8E8D88] hover:text-red-400"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Chamber Settings */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div className="bg-[#141414] border border-white/15 p-6 space-y-4">
                    <h4 className="text-xs font-mono tracking-widest text-[#E7E6E1] uppercase">
                      Chamber Operational Metadata
                    </h4>

                    <div>
                      <label className="block text-xs font-mono text-[#8E8D88] uppercase mb-1">
                        Chamber Timings
                      </label>
                      <input
                        type="text"
                        value={editTimings}
                        onChange={(e) => setEditTimings(e.target.value)}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2.5 text-xs text-white"
                        placeholder="Information pending from client."
                      />
                      <span className="text-[10px] font-mono text-[#666560]">
                        Note: In accordance with client specification, do not invent hours until supplied.
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8E8D88] uppercase mb-1">
                        Google Business Profile Status
                      </label>
                      <input
                        type="text"
                        value={editGoogleUrl}
                        onChange={(e) => setEditGoogleUrl(e.target.value)}
                        className="w-full bg-[#1C1C1C] border border-white/20 px-3 py-2.5 text-xs text-white"
                        placeholder="Pending client verification"
                      />
                      <span className="text-[10px] font-mono text-[#666560]">
                        Only publish once verified with Advocate Lalit Sharma.
                      </span>
                    </div>

                    {saveFeedback && (
                      <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 p-2.5 border border-emerald-800">
                        {saveFeedback}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        onClick={handleSaveSettings}
                        className="px-6 py-2.5 bg-[#F7F7F5] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white"
                      >
                        Save Configuration
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/10 text-xs font-mono text-[#8E8D88] space-y-1">
                    <div>Enrolment: {profile.enrolmentNo}</div>
                    <div>High Court Chamber: {profile.chamber}</div>
                    <div>Office Phone: {profile.phone}</div>
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
