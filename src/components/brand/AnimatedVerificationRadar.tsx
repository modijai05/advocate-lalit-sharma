import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, MapPin, CheckCircle2, Clock, Info, Building2, Compass } from 'lucide-react'
import { CLIENT_PROFILE } from '../../data/initialData'

export const AnimatedVerificationRadar: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false)

  const verificationStages = [
    {
      id: 'bar-registry',
      title: 'Bar Council of Rajasthan Registry',
      status: 'VERIFIED',
      ref: 'Roll No. R/2746/2005',
      date: 'Admitted May 12, 2005',
      icon: <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
    },
    {
      id: 'high-court-chamber',
      title: 'Physical Chamber Allotment Inspection',
      status: 'VERIFIED',
      ref: 'Chamber 259, Block-E, High Court Jaipur',
      date: 'Rajasthan High Court Bar Association',
      icon: <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
    },
    {
      id: 'google-profile',
      title: 'Google Business Profile Geo-Tagging',
      status: 'PENDING_PHYSICAL_VERIFICATION',
      ref: 'Official Location Pin & Chamber Geo-Coordinates',
      date: 'Strict physical chamber compliance policy',
      icon: <Clock className="w-4 h-4 text-[#F59E0B] animate-pulse" />
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mt-16 max-w-4xl mx-auto relative rounded-2xl overflow-hidden border border-[#C9A84C]/30 bg-gradient-to-b from-[#161614] via-[#0F0F0E] to-[#0A0A09] p-6 sm:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Background Animated Radar Scan Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-[#C9A84C]/20 flex items-center justify-center">
          <div className="w-60 h-60 rounded-full border border-[#C9A84C]/25 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#C9A84C]/10 animate-ping" />
            </div>
          </div>
        </div>

        {/* Radar Sweeping Beam */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: 'calc(100% - 60px) 60px' }}
          className="absolute -right-20 -top-20 w-80 h-80 pointer-events-none"
        >
          <div className="w-40 h-40 bg-gradient-to-tr from-transparent via-[#C9A84C]/15 to-transparent rounded-tl-full" />
        </motion.div>
      </div>

      {/* Header Bar with Live Pulsing Radar Beacon */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          {/* Animated Radar Beacon Node */}
          <div className="relative w-10 h-10 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/40 flex items-center justify-center shrink-0">
            <span className="absolute w-3 h-3 rounded-full bg-[#F59E0B] animate-ping opacity-75" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-ui text-[0.65rem] font-bold tracking-[0.2em] text-[#C9A84C] uppercase">
                Physical Registry Status
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-semibold bg-[#F59E0B]/15 text-[#FBBF24] border border-[#F59E0B]/30">
                ● In Verification
              </span>
            </div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
              Google Business Profile &amp; Chamber Verification
            </h4>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <a
            href={CLIENT_PROFILE.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#C9A84C]/15 hover:bg-[#C9A84C]/25 text-[#E5C368] hover:text-white border border-[#C9A84C]/40 text-xs font-semibold tracking-wider transition-all duration-200"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>High Court Pin ↗</span>
          </a>

          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#C4C0B6] hover:text-white border border-white/10 text-xs font-medium transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{showDetails ? 'Hide Details' : 'Protocol'}</span>
          </button>
        </div>
      </div>

      {/* Main Verification Statement & Highlight */}
      <div className="relative z-10 py-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8">
          <p className="font-ui text-sm text-[#E2DFD8] leading-relaxed">
            <strong className="text-white font-semibold">Google Business Profile: </strong>
            <span className="text-[#FBBF24] font-medium">{CLIENT_PROFILE.googleProfileStatus}</span>. 
            Strictly published following physical chamber verification at Rajasthan High Court (Jaipur Bench) pursuant to Bar Council statutory norms.
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9E9B93]">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Chamber 259, Block-E, High Court Jaipur</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Rajasthan Bar Council Reg: 2746/2005</span>
            </span>
          </div>
        </div>

        {/* Mini Live Security Seal */}
        <div className="md:col-span-4 bg-[#0A0A0A]/70 border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-[#4ADE80] shrink-0" />
          <div>
            <div className="font-ui text-[0.62rem] tracking-wider text-[#9E9B93] uppercase font-semibold">
              Statutory Standard
            </div>
            <div className="font-ui text-xs text-white font-medium">
              Zero Commercial Solicitation
            </div>
          </div>
        </div>
      </div>

      {/* Verification Pipeline Step Tracker */}
      <div className="relative z-10 pt-4 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {verificationStages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`p-3.5 rounded-xl border transition-all duration-200 ${
                stage.status === 'VERIFIED'
                  ? 'bg-[#121814]/80 border-[#4ADE80]/30'
                  : 'bg-[#1C180E]/80 border-[#F59E0B]/35'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-ui text-[0.58rem] tracking-wider font-bold uppercase text-[#9E9B93]">
                  Phase 0{idx + 1}
                </span>
                {stage.icon}
              </div>
              <div className="font-heading text-xs font-bold text-white line-clamp-1 mb-1">
                {stage.title}
              </div>
              <div className="font-ui text-[0.72rem] text-[#C4C0B6]">
                {stage.ref}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Protocol Details */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 pt-5 mt-5 border-t border-white/10 overflow-hidden"
          >
            <div className="bg-[#0A0A0A] p-4 rounded-xl border border-white/10 space-y-2.5 text-xs text-[#9E9B93] leading-relaxed">
              <div className="font-ui text-[0.68rem] tracking-[0.16em] uppercase text-[#E5C368] font-bold">
                Bar Council Compliance Protocol:
              </div>
              <p>
                In strict adherence to Rule 36 of Chapter II, Part VI of the Bar Council of India Rules (Standards of Professional Conduct and Etiquette), institutional listings and search engine chamber entries are maintained strictly for procedural direction and legitimate physical access by litigants having matter listings before the High Court.
              </p>
              <div className="flex items-center justify-between text-[0.7rem] text-[#C4C0B6] pt-1">
                <span>Verified Chamber Address: High Court of Judicature for Rajasthan, Jaipur Bench</span>
                <span className="text-[#4ADE80]">Physical Registry Validated</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
