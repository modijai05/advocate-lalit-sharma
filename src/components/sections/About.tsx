import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { useCMS } from '../../context/CMSContext'
import { Scale, Award, Landmark, Languages } from 'lucide-react'

export const About: React.FC = () => {
  const { profile } = useCMS()
  return (
    <section id="about" className="relative bg-[#FFFFFF] text-black py-16 sm:py-24 border-b border-black/15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="05" title="Profile & Biography" theme="light" />
          <h2 className="font-heading font-bold text-black tracking-tight mt-1 text-3xl sm:text-4xl">
            Advocate Lalit Sharma
          </h2>
          <p className="font-ui text-sm sm:text-base text-neutral-600 max-w-lg mt-2">
            High Court of Judicature for Rajasthan · Senior Appellate Counsel
          </p>
          <div className="mt-4 w-12 h-0.5 bg-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Plain Unstyled Advocate Portrait */}
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[320px] sm:max-w-sm md:max-w-none">
              <img
                src="/assets/images/advocate-lalit-sharma.jpg"
                alt="Advocate Lalit Sharma in his legal chambers"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Editorial Biography & Credential Grid */}
          <div className="md:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {/* Highlight Quote */}
              <p className="font-serif text-lg sm:text-xl text-black leading-relaxed italic border-l-2 border-black pl-4 py-1 bg-neutral-50">
                "{profile.biographyIntro}"
              </p>

              <p className="font-ui text-sm sm:text-base text-neutral-700 leading-relaxed">
                {profile.biographyChamber}
              </p>

              {/* 4 Classic Monochrome Credential Cards */}
              <div className="grid grid-cols-2 gap-3.5 pt-4">
                {[
                  {
                    icon: <Award className="w-4 h-4 text-black" strokeWidth={2} />,
                    label: 'Bar Enrolment',
                    value: profile.enrolmentNo,
                  },
                  {
                    icon: <Landmark className="w-4 h-4 text-black" strokeWidth={2} />,
                    label: 'High Court Chamber',
                    value: profile.chamber ? profile.chamber.split(',')[0] : '259, Block-E',
                  },
                  {
                    icon: <Scale className="w-4 h-4 text-black" strokeWidth={2} />,
                    label: 'Judicial Standing',
                    value: `${profile.experienceYears}+ Years`,
                  },
                  {
                    icon: <Languages className="w-4 h-4 text-black" strokeWidth={2} />,
                    label: 'Courtroom Languages',
                    value: profile.languages?.join(' · ') || 'Hindi · English',
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="p-4 border border-neutral-200 bg-white"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1 border border-neutral-200">
                        {card.icon}
                      </div>
                      <span className="font-ui text-[0.62rem] font-bold tracking-wider text-neutral-500 uppercase">
                        {card.label}
                      </span>
                    </div>
                    <div className="font-heading text-base font-bold text-black leading-tight">
                      {card.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
