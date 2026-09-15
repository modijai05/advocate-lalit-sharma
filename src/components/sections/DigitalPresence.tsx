import React from 'react'
import { SectionLabel } from '../common/SectionLabel'
import { ShieldCheck } from 'lucide-react'
import { AnimatedVerificationRadar } from '../brand/AnimatedVerificationRadar'

export const DigitalPresence: React.FC = () => {
  return (
    <section id="digital-presence" className="relative bg-[#000000] text-[#FFFFFF] py-16 sm:py-24 border-b border-white/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="08" title="Chamber Verification" theme="dark" />
          <h2 className="font-heading font-bold text-white tracking-tight mt-1 text-3xl sm:text-4xl">
            Google Business Profile &amp; Chamber Verification
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-ui text-neutral-300 border border-white/20 px-3.5 py-1.5">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Official High Court Registry · Advocate Lalit Sharma</span>
          </div>
          <div className="mt-4 w-12 h-0.5 bg-white" />
        </div>

        <AnimatedVerificationRadar />
      </div>
    </section>
  )
}
