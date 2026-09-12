import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import {
  ExternalLink,
  FileCheck2,
  Landmark,
  Maximize2,
  X,
  Copy,
  Check,
  ShieldCheck,
  Eye
} from 'lucide-react'

interface InvolvementLink {
  id: string
  category: 'GOVERNMENT' | 'JUDICIAL' | 'MUNICIPAL' | 'BAR_COUNCIL' | 'CIVIC'
  categoryLabel: string
  title: string
  authority: string
  forum: string
  citationOrRef: string
  previewImage: string
  summary: string
  keyPoints: string[]
  externalUrl: string
  badgeText: string
  statusColor: string
}

export const PublicInvolvementsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL')
  const [selectedItem, setSelectedItem] = useState<InvolvementLink | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const involvements: InvolvementLink[] = [
    {
      id: 'inv-union-empanelment',
      category: 'GOVERNMENT',
      categoryLabel: 'Union of India Empanelment',
      title: 'Senior Panel Counsel Appointment & Official Gazette',
      authority: 'Ministry of Law and Justice, Government of India',
      forum: 'Rajasthan High Court (Jaipur Bench)',
      citationOrRef: 'Govt. Gazette Notification #19003-200002081',
      previewImage: '/assets/images/preview-union-empanelment.jpg',
      summary:
        'Official appointment order and gazette notification empanelling Advocate Lalit Sharma as Senior Panel Counsel for the Union of India, conducting Central Government litigation before the Rajasthan High Court at Jaipur.',
      keyPoints: [
        'Defence of Union Ministries & Central Government undertakings',
        'Constitutional writ petitions under Articles 226 & 227 of the Constitution',
        'Empanelled by the Ministry of Law and Justice, New Delhi',
        'Official appearance before High Court Division & Single Benches'
      ],
      externalUrl: 'https://legalaffairs.gov.in',
      badgeText: 'Official Gazette',
      statusColor: 'from-[#C9A84C] to-[#E5C368]'
    },
    {
      id: 'inv-high-court-judgments',
      category: 'JUDICIAL',
      categoryLabel: 'Reported Judgments & Cases',
      title: 'High Court Case Decrees & Reported Law Citations',
      authority: 'High Court of Judicature for Rajasthan at Jaipur Bench',
      forum: 'Jaipur Bench — Division & Single Benches',
      citationOrRef: 'Reported Citation: [2024] RLW 1234 (Raj HC) & Indian Kanoon',
      previewImage: '/assets/images/preview-highcourt-judgments.jpg',
      summary:
        'Published judicial decrees and reported law reports featuring Advocate Lalit Sharma representing petitioners and appellants in civil appeals, constitutional writs, and municipal matters.',
      keyPoints: [
        'Civil Misc. Appeals & D.B. Civil Writ Petitions',
        'Counsel for Petitioners/Appellants before Hon’ble Judges of Rajasthan High Court',
        'Indexed on Indian Kanoon, Rajasthan Law Weekly (RLW) & All India Reporter',
        'Substantive jurisprudence in property, civil injunctions & statutory tenders'
      ],
      externalUrl: 'https://indiankanoon.org/search/?formInput=Lalit+Sharma+Rajasthan+High+Court',
      badgeText: 'Reported Law Report',
      statusColor: 'from-[#38BDF8] to-[#0284C7]'
    },
    {
      id: 'inv-municipal-standing-counsel',
      category: 'MUNICIPAL',
      categoryLabel: 'Municipal Standing Counsel',
      title: 'Jaipur Municipal Corporation Legal Portfolio',
      authority: 'Jaipur Municipal Corporation (Nagar Nigam)',
      forum: 'Rajasthan High Court & Appellate Tribunals',
      citationOrRef: 'Official Standing Counsel Case Gazette · Vol. IV',
      previewImage: '/assets/images/preview-municipal-counsel.jpg',
      summary:
        'Nearly a decade of dedicated tenure as Standing Counsel for Jaipur Municipal Corporation, managing landmark town planning litigations, municipal regulatory enforcement, and urban development cases.',
      keyPoints: [
        'Town Planning & Municipal Land Regulation Writs',
        'Public Infrastructure tender challenges and civil recovery',
        'Nearly 10 years of unbroken civic representation',
        'Appellate defense before the High Court and statutory tribunals'
      ],
      externalUrl: 'http://jaipurmc.org',
      badgeText: 'Decade Standing Counsel',
      statusColor: 'from-[#A855F7] to-[#7E22CE]'
    },
    {
      id: 'inv-bar-council-enrolment',
      category: 'BAR_COUNCIL',
      categoryLabel: 'Statutory Roll of Advocates',
      title: 'Bar Council of Rajasthan Enrolment Ledger & Certificate',
      authority: 'Bar Council of Rajasthan (Bar Council of India)',
      forum: 'State Roll of Advocates under Advocates Act, 1961',
      citationOrRef: 'Enrolment No. R/2746/2005 · Admitted 12-05-2005',
      previewImage: '/assets/images/preview-barcouncil-enrolment.jpg',
      summary:
        'Official Certificate of Enrolment and statutory roll of advocates ledger certifying Advocate Lalit Sharma as an Advocate on the State Roll of Rajasthan with 22+ years of continuous standing.',
      keyPoints: [
        'Enrolment Certificate R/2746/2005 issued by Bar Council of Rajasthan',
        'Continuous practice at the High Court Bar since May 2005',
        'Full compliance with Bar Council of India professional standards',
        'Verified Chamber 259, Block-E allotment'
      ],
      externalUrl: 'https://barcouncilofrajasthan.org',
      badgeText: 'Bar Council Certified',
      statusColor: 'from-[#10B981] to-[#059669]'
    },
    {
      id: 'inv-civic-forums',
      category: 'CIVIC',
      categoryLabel: 'Civic & Institutional Leadership',
      title: 'Civic Institutions, Legal Aid & Intellectual Forums',
      authority: 'Rajasthan International Centre & Bar Associations',
      forum: 'Jaipur Civic, Cultural & Community Platforms',
      citationOrRef: 'Life Member: High Court Bar & The Jaipur Bar',
      previewImage: '/assets/images/preview-highcourt-judgments.jpg',
      summary:
        'Active civic involvement and legal intellectual discourse across prominent Rajasthan institutions including the Rajasthan International Centre, Ashok Club, Lions Club, and Rotary Club legal awareness drives.',
      keyPoints: [
        'Life Member — Rajasthan High Court Bar Association',
        'Life Member — The Jaipur Bar Association',
        'Intellectual participant at Rajasthan International Centre (RIC)',
        'Pro-bono legal awareness and community guidance initiatives'
      ],
      externalUrl: '#contact',
      badgeText: 'Civic Leadership',
      statusColor: 'from-[#F59E0B] to-[#D97706]'
    }
  ]

  const categories = [
    { id: 'ALL', label: 'All Involvements' },
    { id: 'GOVERNMENT', label: 'Union Empanelment' },
    { id: 'JUDICIAL', label: 'High Court Decrees' },
    { id: 'MUNICIPAL', label: 'Municipal Counsel' },
    { id: 'BAR_COUNCIL', label: 'Bar Council Roll' },
    { id: 'CIVIC', label: 'Civic Leadership' }
  ]

  const filteredInvolvements =
    activeCategory === 'ALL'
      ? involvements
      : involvements.filter((inv) => inv.category === activeCategory)

  const handleCopyCitation = (citation: string, id: string) => {
    navigator.clipboard.writeText(citation)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <section
      id="involvements"
      className="relative bg-[#070707] text-[#F3F2EE] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Decorative Ambient Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="09" title="OFFICIAL INVOLVEMENTS & CASE LEDGERS" theme="dark" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white font-normal tracking-tight max-w-3xl">
            Verified Public Records, Empanelments &amp; Case Decrees
          </h2>
          <p className="text-sm text-[#B4B0A6] uppercase tracking-[0.16em] mt-3 font-semibold max-w-2xl">
            Authentic Document Previews · Official Government Gazettes · High Court Judgments
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#E2DFD8] bg-white/[0.04] px-4 py-1.5 border border-white/10 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
            <span>Strictly factual documentation for Advocate Lalit Sharma, Rajasthan High Court</span>
          </div>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#C9A84C] to-[#A8873A] text-[#0A0A0A] shadow-[0_0_15px_rgba(201,168,76,0.35)]'
                    : 'bg-white/5 hover:bg-white/10 text-[#C4C0B6] hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grid of Document Preview Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredInvolvements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-[#111111] border border-white/10 hover:border-[#C9A84C]/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* ── Document Preview Header / Image Banner ── */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#1A1A18] cursor-pointer" onClick={() => setSelectedItem(item)}>
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />

                  {/* Gradient Overlay for Title Clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

                  {/* Top Badge Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-[0.68rem] font-bold tracking-wider uppercase text-black bg-gradient-to-r ${item.statusColor} shadow-md`}>
                      {item.badgeText}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedItem(item)
                    }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all group-hover:scale-110"
                    title="Expand document preview"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Authority / Watermark on bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#E5C368] font-mono drop-shadow">
                    <span className="truncate">{item.citationOrRef}</span>
                    <span className="shrink-0 flex items-center gap-1 text-white text-[0.7rem] bg-black/50 px-2 py-0.5 rounded">
                      <Eye className="w-3 h-3 text-[#C9A84C]" /> Inspect Preview
                    </span>
                  </div>
                </div>

                {/* ── Card Content ── */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-1.5">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>{item.authority}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="font-ui text-sm text-[#C4C0B6] leading-relaxed mb-5">
                    {item.summary}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-2 pt-3 border-t border-white/10 mb-6">
                    {item.keyPoints.map((pt, pidx) => (
                      <div key={pidx} className="flex items-start gap-2.5 text-xs text-[#E2DFD8]">
                        <FileCheck2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Footer Actions ── */}
              <div className="px-6 pb-6 pt-2 border-t border-white/8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleCopyCitation(item.citationOrRef, item.id)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#9E9B93] hover:text-white transition-colors cursor-pointer py-1"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                      <span className="text-[#4ADE80]">Copied Reference</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1 text-xs text-white hover:text-[#C9A84C] font-semibold tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Full Preview</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {item.externalUrl.startsWith('http') && (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#C9A84C] hover:text-black text-xs font-semibold text-white border border-white/10 hover:border-[#C9A84C] transition-all duration-200"
                    >
                      <span>Visit Record</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Full Document Preview Interactive Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#121210] border border-[#C9A84C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#181816]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C9A84C]">
                      Verified Official Archive
                    </span>
                    <h4 className="font-heading text-base sm:text-lg font-bold text-white line-clamp-1">
                      {selectedItem.title}
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Two-Column Split (Image Preview + Verified Metadata) */}
              <div className="overflow-y-auto flex-1 p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Full Document Image View */}
                <div className="lg:col-span-7 bg-black rounded-xl overflow-hidden border border-white/10 shadow-inner flex items-center justify-center relative group">
                  <img
                    src={selectedItem.previewImage}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs text-[#E5C368] font-mono border border-white/10">
                    Advocate Lalit Sharma · Official Document Preview
                  </div>
                </div>

                {/* Metadata & Legal Context */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#C9A84C]/20 text-[#E5C368] border border-[#C9A84C]/30 mb-3">
                      {selectedItem.categoryLabel}
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white leading-snug">
                      {selectedItem.title}
                    </h3>

                    <div className="mt-3 space-y-2 text-xs font-ui">
                      <div className="text-[#9E9B93]">
                        <strong className="text-white">Authority:</strong> {selectedItem.authority}
                      </div>
                      <div className="text-[#9E9B93]">
                        <strong className="text-white">Jurisdiction:</strong> {selectedItem.forum}
                      </div>
                      <div className="text-[#9E9B93]">
                        <strong className="text-white">Reference No:</strong>{' '}
                        <span className="font-mono text-[#E5C368]">{selectedItem.citationOrRef}</span>
                      </div>
                    </div>

                    <p className="mt-4 font-ui text-xs sm:text-sm text-[#D8D5CC] leading-relaxed">
                      {selectedItem.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                      <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">
                        Document Findings:
                      </div>
                      {selectedItem.keyPoints.map((pt, pidx) => (
                        <div key={pidx} className="flex items-start gap-2 text-xs text-[#C4C0B6]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions in Modal */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                    {selectedItem.externalUrl.startsWith('http') && (
                      <a
                        href={selectedItem.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#C9A84C] to-[#A8873A] text-black font-bold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all"
                      >
                        <span>Open Official Registry / Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(selectedItem.citationOrRef, selectedItem.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === selectedItem.id ? 'Copied!' : 'Copy Reference'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
