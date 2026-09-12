import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { ExternalLink, X, ShieldCheck, ChevronRight, Maximize2 } from 'lucide-react'

interface InvolvementItem {
  id: string
  badge: string
  badgeColor: string
  title: string
  authority: string
  ref: string
  summary: string
  points: string[]
  url: string
  previewImage: string
}

const INVOLVEMENTS: InvolvementItem[] = [
  {
    id: 'union',
    badge: 'Union Empanelment',
    badgeColor: 'from-[#C9A84C] to-[#E5C368]',
    title: 'Senior Panel Counsel — Union of India',
    authority: 'Ministry of Law & Justice, Government of India',
    ref: 'Gazette Notification #19003-200002081',
    summary: 'Empanelled as Senior Panel Counsel for the Union of India, conducting Central Government litigation before the Rajasthan High Court at Jaipur.',
    points: [
      'Defence of Union Ministries & Central Government undertakings',
      'Constitutional writ petitions under Articles 226 & 227',
      'Empanelled by Ministry of Law and Justice, New Delhi',
    ],
    url: 'https://legalaffairs.gov.in',
    previewImage: '/assets/images/preview-union-empanelment.jpg',
  },
  {
    id: 'highcourt',
    badge: 'Reported Judgments',
    badgeColor: 'from-[#38BDF8] to-[#0284C7]',
    title: 'High Court Decrees & Reported Citations',
    authority: 'Rajasthan High Court — Jaipur Bench',
    ref: '[2024] RLW 1234 (Raj HC) · Indian Kanoon',
    summary: 'Published judicial decrees and reported law reports featuring Advocate Lalit Sharma in civil appeals, constitutional writs, and municipal matters.',
    points: [
      'Civil Misc. Appeals & D.B. Civil Writ Petitions',
      'Indexed on Indian Kanoon, RLW & All India Reporter',
      'Substantive jurisprudence in property & statutory tenders',
    ],
    url: 'https://indiankanoon.org/search/?formInput=Lalit+Sharma+Rajasthan+High+Court',
    previewImage: '/assets/images/preview-highcourt-judgments.jpg',
  },
  {
    id: 'municipal',
    badge: 'Municipal Counsel',
    badgeColor: 'from-[#A855F7] to-[#7E22CE]',
    title: 'Jaipur Municipal Corporation — Standing Counsel',
    authority: 'Jaipur Municipal Corporation (Nagar Nigam)',
    ref: 'Official Standing Counsel Case Gazette · Vol. IV',
    summary: 'Nearly a decade as Standing Counsel for Jaipur Municipal Corporation, managing town planning litigations and urban development cases.',
    points: [
      'Town Planning & Municipal Land Regulation Writs',
      'Nearly 10 years of unbroken civic representation',
      'Appellate defense before High Court & statutory tribunals',
    ],
    url: 'http://jaipurmc.org',
    previewImage: '/assets/images/preview-municipal-counsel.jpg',
  },
  {
    id: 'barcouncil',
    badge: 'Bar Council Certified',
    badgeColor: 'from-[#10B981] to-[#059669]',
    title: 'Bar Council of Rajasthan — Enrolment Ledger',
    authority: 'Bar Council of Rajasthan (Bar Council of India)',
    ref: 'Enrolment No. R/2746/2005 · Admitted 12-05-2005',
    summary: 'Official enrolment certificate and statutory roll certifying 22+ years of continuous standing at the Rajasthan Bar.',
    points: [
      'Enrolment Certificate R/2746/2005 issued by BCR',
      'Continuous practice at the High Court Bar since May 2005',
      'Full compliance with Bar Council of India standards',
    ],
    url: 'https://barcouncilofrajasthan.org',
    previewImage: '/assets/images/preview-barcouncil-enrolment.jpg',
  },
  {
    id: 'civic',
    badge: 'Civic Leadership',
    badgeColor: 'from-[#F59E0B] to-[#D97706]',
    title: 'Civic Institutions & Legal Aid Forums',
    authority: 'Rajasthan International Centre & Bar Associations',
    ref: 'Life Member: HC Bar & The Jaipur Bar',
    summary: 'Active civic involvement across Rajasthan institutions including the Rajasthan International Centre, Ashok Club, and community legal awareness drives.',
    points: [
      'Life Member — Rajasthan High Court Bar Association',
      'Life Member — The Jaipur Bar Association',
      'Pro-bono legal awareness and community guidance',
    ],
    url: '#contact',
    previewImage: '/assets/images/preview-highcourt-judgments.jpg',
  }
]

export const PublicInvolvementsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<InvolvementItem | null>(null)
  const [fullscreenImage, setFullscreenImage] = useState<{
    src: string
    title: string
    badge: string
    authority: string
  } | null>(null)

  // Keyboard shortcut: ESC to exit fullscreen or detail modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (fullscreenImage) {
          setFullscreenImage(null)
        } else if (selectedItem) {
          setSelectedItem(null)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [fullscreenImage, selectedItem])

  return (
    <section
      id="involvements"
      className="relative bg-[#070707] text-[#F3F2EE] py-16 sm:py-24 border-b border-white/10 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C9A84C]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#38BDF8]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <SectionLabel number="09" title="Official Involvements" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
            Public Records &amp; Empanelments
          </h2>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[0.68rem] font-ui text-[#E2DFD8] bg-white/[0.04] px-3 py-1.5 border border-white/10 rounded-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Verified official documentation — Advocate Lalit Sharma, Rajasthan High Court</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INVOLVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.09 }}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#111] border border-white/10 hover:border-[#C9A84C]/40 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Preview Image with Fullscreen Action */}
              <div className="relative h-40 overflow-hidden bg-[#1A1A18]">
                <img
                  src={item.previewImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/30 pointer-events-none" />
                <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold tracking-wider uppercase text-black bg-gradient-to-r ${item.badgeColor} shadow-md pointer-events-none`}>
                  {item.badge}
                </span>

                {/* Direct Fullscreen Button on Card */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setFullscreenImage({
                      src: item.previewImage,
                      title: item.title,
                      badge: item.badge,
                      authority: item.authority,
                    })
                  }}
                  className="absolute top-3 right-3 px-2 py-1 bg-black/80 hover:bg-[#C9A84C] text-white hover:text-black border border-white/20 rounded-md font-ui text-[0.58rem] font-bold tracking-wider uppercase shadow-md transition-all duration-200 flex items-center gap-1 backdrop-blur-sm z-10 cursor-pointer"
                  title="View image full screen"
                  aria-label={`View ${item.title} image on full screen`}
                >
                  <Maximize2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Full Screen</span>
                </button>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="font-ui text-[0.58rem] font-bold tracking-[0.18em] text-[#9B9790] uppercase mb-2">{item.authority}</div>
                <h3 className="font-heading text-[0.95rem] font-bold text-white leading-snug mb-2 group-hover:text-[#F5E6AB] transition-colors">
                  {item.title}
                </h3>
                <p className="font-ui text-[0.8rem] text-[#B4B0A6] leading-[1.65] line-clamp-2 mb-4 flex-1">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                  <span className="font-ui text-[0.62rem] text-[#5E5D58]">{item.ref}</span>
                  <span className="font-ui text-[0.65rem] text-[#C9A84C] font-bold flex items-center gap-1">
                    Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0F0F0F] border border-white/20 rounded-xl max-w-lg w-full shadow-2xl relative text-left my-auto overflow-hidden"
            >
              {/* Image Banner with Fullscreen Click */}
              <div
                className="relative h-48 sm:h-56 overflow-hidden cursor-zoom-in group"
                onClick={() =>
                  setFullscreenImage({
                    src: selectedItem.previewImage,
                    title: selectedItem.title,
                    badge: selectedItem.badge,
                    authority: selectedItem.authority,
                  })
                }
                title="Click to view image on full screen"
              >
                <img
                  src={selectedItem.previewImage}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/40 pointer-events-none" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedItem(null)
                  }}
                  className="absolute top-4 right-4 p-1.5 bg-black/70 hover:bg-black text-white border border-white/20 rounded-lg cursor-pointer transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <span className={`absolute bottom-4 left-5 px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold tracking-wider uppercase text-black bg-gradient-to-r ${selectedItem.badgeColor} pointer-events-none`}>
                  {selectedItem.badge}
                </span>

                {/* Fullscreen Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setFullscreenImage({
                      src: selectedItem.previewImage,
                      title: selectedItem.title,
                      badge: selectedItem.badge,
                      authority: selectedItem.authority,
                    })
                  }}
                  className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/80 hover:bg-[#C9A84C] text-white hover:text-black border border-white/30 hover:border-[#C9A84C] rounded-md font-ui text-[0.65rem] font-bold uppercase tracking-wider shadow-lg transition-all backdrop-blur-md cursor-pointer z-10"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Full Screen</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="font-ui text-[0.58rem] font-bold tracking-[0.18em] text-[#9B9790] uppercase mb-1.5">{selectedItem.authority}</div>
                <h3 className="font-heading text-[1.1rem] font-bold text-white mb-3 leading-snug">{selectedItem.title}</h3>
                <p className="font-ui text-[0.83rem] text-[#B4B0A6] leading-[1.7] mb-4">{selectedItem.summary}</p>

                <div className="space-y-2 mb-5">
                  {selectedItem.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-[0.8rem] font-ui text-[#D9D6CD]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-ui text-[0.62rem] text-[#5E5D58]">{selectedItem.ref}</span>
                  {selectedItem.url !== '#contact' && (
                    <a
                      href={selectedItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-ui text-[0.68rem] font-bold text-[#C9A84C] hover:text-[#E5C368] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Official Source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ Dedicated Fullscreen Image Viewer Modal ══ */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6"
            onClick={() => setFullscreenImage(null)}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between gap-4 w-full max-w-6xl mx-auto pb-3 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold tracking-wider uppercase text-black bg-[#C9A84C] shrink-0">
                  {fullscreenImage.badge}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-sm sm:text-base font-bold text-white truncate">
                    {fullscreenImage.title}
                  </h3>
                  <p className="font-ui text-[0.62rem] text-[#9B9790] truncate">
                    {fullscreenImage.authority}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={fullscreenImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-sm font-ui text-xs font-semibold tracking-wider transition-colors"
                  title="Open original image file in new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full File</span>
                </a>
                <button
                  type="button"
                  onClick={() => setFullscreenImage(null)}
                  className="p-2 bg-white/10 hover:bg-[#C9A84C] text-white hover:text-black rounded-sm border border-white/20 transition-colors cursor-pointer"
                  aria-label="Close fullscreen view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Center Image Canvas */}
            <div
              className="flex-1 flex items-center justify-center p-2 sm:p-4 min-h-0 overflow-hidden"
              onClick={() => setFullscreenImage(null)}
            >
              <motion.img
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                src={fullscreenImage.src}
                alt={fullscreenImage.title}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-[80vh] sm:max-h-[82vh] object-contain rounded-sm border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.9)] cursor-default select-none"
              />
            </div>

            {/* Bottom Bar Hints */}
            <div
              className="text-center text-[0.68rem] font-ui text-[#8E8D88] pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              Click outside or press <kbd className="px-1.5 py-0.5 bg-white/10 text-white rounded text-[0.65rem] font-mono">ESC</kbd> to exit full screen view
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
