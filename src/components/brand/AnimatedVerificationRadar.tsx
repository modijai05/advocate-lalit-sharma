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
      icon: <CheckCircle2 className="w-4 h-4 text-white" />
    },
    {
      id: 'high-court-chamber',
      title: 'Physical Chamber Allotment Inspection',
      status: 'VERIFIED',
      ref: 'Chamber 259, Block-E, High Court Jaipur',
      date: 'Rajasthan High Court Bar Association',
      icon: <CheckCircle2 className="w-4 h-4 text-white" />
    },
    {
      id: 'google-profile',
      title: 'Google Business Profile Geo-Tagging',
      status: 'PHYSICAL_VERIFICATION_ACTIVE',
      ref: 'Official Location Pin & Chamber Geo-Coordinates',
      date: 'Strict physical chamber compliance policy',
      icon: <Clock className="w-4 h-4 text-white" />
    }
  ]

  return (
    <div className="max-w-4xl mx-auto relative border border-white/20 bg-[#0A0A0A] p-6 sm:p-9 text-left">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 border border-white/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-ui text-[0.65rem] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                Physical Registry Status
              </span>
              <span className="inline-flex items-center px-2 py-0.5 text-[0.62rem] font-semibold border border-white/30 text-white">
                Verified
              </span>
            </div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
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
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-wider transition-all duration-150"
          >
            <MapPin className="w-3.5 h-3.5 text-black" />
            <span>High Court Pin ↗</span>
          </a>

          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-transparent text-neutral-300 hover:text-white border border-white/30 text-xs font-medium transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{showDetails ? 'Hide Details' : 'Protocol'}</span>
          </button>
        </div>
      </div>

      {/* Main Verification Statement & Highlight */}
      <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-white/10">
        <div className="md:col-span-8">
          <p className="font-ui text-sm text-neutral-200 leading-relaxed">
            <strong className="text-white font-semibold">Google Business Profile: </strong>
            <span className="text-white font-medium underline underline-offset-4">{CLIENT_PROFILE.googleProfileStatus}</span>. 
            Strictly published following physical chamber verification at Rajasthan High Court (Jaipur Bench) pursuant to Bar Council statutory norms.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-white" />
              <span>Chamber 259, Block-E, High Court Jaipur</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-white" />
              <span>Rajasthan Bar Council Reg: 2746/2005</span>
            </span>
          </div>
        </div>

        {/* Statutory Compliance Seal */}
        <div className="md:col-span-4 bg-[#111111] border border-white/15 p-4 flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-white shrink-0" />
          <div>
            <div className="font-ui text-[0.62rem] tracking-wider text-neutral-400 uppercase font-semibold">
              Statutory Standard
            </div>
            <div className="font-ui text-xs text-white font-medium">
              Zero Commercial Solicitation
            </div>
          </div>
        </div>
      </div>

      {/* Verification Pipeline Step Tracker */}
      <div className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {verificationStages.map((stage, idx) => (
            <div
              key={stage.id}
              className="p-4 border border-white/20 bg-[#111111] text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-ui text-[0.6rem] tracking-wider font-bold uppercase text-neutral-400">
                  Phase 0{idx + 1}
                </span>
                {stage.icon}
              </div>
              <div className="font-heading text-xs font-bold text-white mb-1">
                {stage.title}
              </div>
              <div className="font-ui text-[0.72rem] text-neutral-400">
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
            transition={{ duration: 0.25 }}
            className="pt-5 mt-5 border-t border-white/15 overflow-hidden"
          >
            <div className="bg-[#111111] p-4 border border-white/20 space-y-2.5 text-xs text-neutral-300 leading-relaxed">
              <div className="font-ui text-[0.68rem] tracking-[0.16em] uppercase text-white font-bold">
                Bar Council Compliance Protocol:
              </div>
              <p>
                In strict adherence to Rule 36 of Chapter II, Part VI of the Bar Council of India Rules (Standards of Professional Conduct and Etiquette), institutional listings and search engine chamber entries are maintained strictly for procedural direction and legitimate physical access by litigants having matter listings before the High Court.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[0.7rem] text-neutral-400 pt-2 border-t border-white/10 gap-1">
                <span>Verified Chamber Address: High Court of Judicature for Rajasthan, Jaipur Bench</span>
                <span className="text-white font-medium">Physical Registry Validated</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
