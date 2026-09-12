import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { REPRESENTATIVE_MATTERS } from '../../data/initialData'
import { FileText, ShieldCheck } from 'lucide-react'

export const RepresentativeMatters: React.FC = () => {
  return (
    <section className="relative bg-[#F8F8F6] text-[#111111] py-24 sm:py-32 border-b border-[#DCD9D0]">
      {/* Paper grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#111_0.5px,transparent_0.5px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="04" title="REPRESENTATIVE MATTERS" theme="light" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#080808] font-normal tracking-tight max-w-2xl">
            Representative Matter Categories
          </h2>
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#55524B] uppercase mt-3">
            Non-Confidential Categorization of Matters Handled
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#33312C] bg-[#EFECE6] px-4 py-2 border border-[#DCD9D0] rounded-xs shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#8F7017] shrink-0" />
            <span>Compliance Notice: In accordance with Bar Council of India regulations, individual client names, case titles, numbers, and outcomes are strictly omitted.</span>
          </div>
        </div>

        {/* Categories Table / Index List */}
        <div className="divide-y divide-[#DCD9D0] border-y-2 border-[#DCD9D0]">
          {REPRESENTATIVE_MATTERS.map((matter, index) => (
            <motion.div
              key={matter.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-black/[0.03] px-4 sm:px-6 transition-colors rounded-xs"
            >
              <div className="lg:col-span-3 flex items-start gap-4">
                <span className="text-xs font-bold text-[#8F7017] bg-[#D4AF37]/15 px-2 py-0.5 rounded-xs mt-1">
                  {matter.code}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#080808]">
                    {matter.title}
                  </h3>
                  <div className="text-xs font-medium text-[#66635C] uppercase mt-1">
                    Forum: {matter.forums}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 text-sm sm:text-base text-[#2D2D2D] leading-relaxed font-normal">
                {matter.scope}
              </div>

              <div className="lg:col-span-4 bg-white p-5 border border-[#DCD9D0] text-xs space-y-2 rounded-xs shadow-xs">
                <div className="text-[#8F7017] uppercase text-[11px] font-bold tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#8F7017]" />
                  <span>Statutory Framework</span>
                </div>
                <div className="text-[#111111] font-medium leading-relaxed">
                  {matter.statutoryFramework}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
