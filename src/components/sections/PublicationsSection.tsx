import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { useCMS } from '../../context/CMSContext'
import { BookOpen, Clock, Archive } from 'lucide-react'

export const PublicationsSection: React.FC = () => {
  const { publications } = useCMS()

  return (
    <section id="publications" className="relative bg-[#F7F7F5] text-[#111111] py-24 sm:py-32 border-b border-[#E7E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel number="09" title="PUBLICATIONS" theme="light" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#050505] font-normal tracking-tight">
            Publications Archive
          </h2>
          <p className="text-sm font-serif italic text-[#666560] mt-2 max-w-xl">
            "Articles and papers authored by Advocate Lalit Sharma."
          </p>
        </div>

        {/* Client Pending Publication Notice & Archive Frame */}
        <div className="max-w-3xl mx-auto">
          {publications.some((p) => p.status === 'PUBLISHED') ? (
            <div className="space-y-6">
              {publications
                .filter((p) => p.status === 'PUBLISHED')
                .map((pub) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white border border-[#E7E6E1] text-left"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#8E8D88] uppercase mb-2">
                      <span>{pub.year}</span>
                      <span>{pub.source}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-[#050505] font-medium mb-2">
                      {pub.title}
                    </h3>
                    <div className="text-sm font-serif text-[#666560]">
                      {pub.publication}
                    </div>
                  </motion.div>
                ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border-2 border-dashed border-[#D8D7D0] p-12 sm:p-16 bg-white/60 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#EAE8E3] flex items-center justify-center mx-auto mb-4 text-[#111111]">
                <Archive className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#F7F7F5] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>CONTENT PENDING FROM CLIENT</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-[#050505] font-medium mb-3">
                Archival Records in Collation
              </h3>

              <p className="text-sm text-[#666560] max-w-md mx-auto leading-relaxed font-sans mb-6">
                Scholarly articles, case commentary, and symposium papers are being curated from past High Court proceedings and will be published following editorial verification.
              </p>

              <div className="text-xs font-mono text-[#8E8D88] uppercase tracking-wider flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Structured CMS Architecture Ready</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
