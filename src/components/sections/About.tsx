import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../common/SectionLabel'
import { CLIENT_PROFILE } from '../../data/initialData'
import { Scale, Award, Landmark, Languages } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-white text-slate-900 py-16 sm:py-24 border-b border-slate-200 overflow-hidden">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel number="05" title="Profile & Biography" theme="light" />
          <h2 className="font-heading font-extrabold text-slate-900 tracking-tight mt-1 text-3xl sm:text-4xl">
            Advocate Lalit Sharma
          </h2>
          <p className="font-ui text-sm sm:text-base text-slate-600 max-w-lg mt-3">
            High Court of Judicature for Rajasthan · Senior Appellate Counsel
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-amber-500 via-blue-600 to-emerald-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Portrait in Full Vivid Color */}
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-[300px] sm:max-w-sm md:max-w-none group"
            >
              {/* Vibrant glowing corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-3 border-l-3 border-amber-500 z-20 group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-3 border-r-3 border-amber-500 z-20 group-hover:scale-110 transition-transform" />

              <div className="relative border-2 border-slate-200 overflow-hidden shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12)] bg-slate-900 rounded-xl group-hover:border-amber-400/80 group-hover:shadow-[0_25px_50px_-10px_rgba(245,158,11,0.2)] transition-all duration-500 hover-lift">
                <img
                  src="/assets/images/advocate-lalit-sharma.jpg"
                  alt="Advocate Lalit Sharma in his legal chambers"
                  className="w-full h-auto aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 text-left">
                  <div className="font-ui text-[0.62rem] font-bold tracking-[0.2em] text-amber-400 uppercase">
                    Chamber 259 · Block-E Campus
                  </div>
                  <div className="font-heading text-base font-bold text-white mt-0.5">
                    Lalit Sharma &amp; Associates
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial Biography & Credential Grid */}
          <div className="md:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              {/* Highlight Quote */}
              <p className="font-serif text-lg sm:text-xl text-slate-800 leading-relaxed italic border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/50 rounded-r-lg">
                "{CLIENT_PROFILE.biographyIntro}"
              </p>

              <p className="font-ui text-sm sm:text-base text-slate-600 leading-relaxed">
                {CLIENT_PROFILE.biographyChamber}
              </p>

              {/* 4 Colorful Credential Cards with Hover Lift */}
              <div className="grid grid-cols-2 gap-3.5 pt-4">
                {[
                  {
                    icon: <Award className="w-5 h-5 text-amber-600" strokeWidth={2.5} />,
                    bg: 'bg-amber-50 border-amber-200',
                    label: 'Bar Enrolment',
                    value: CLIENT_PROFILE.enrolmentNo,
                  },
                  {
                    icon: <Landmark className="w-5 h-5 text-blue-600" strokeWidth={2.5} />,
                    bg: 'bg-blue-50 border-blue-200',
                    label: 'High Court Chamber',
                    value: '259, Block-E',
                  },
                  {
                    icon: <Scale className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />,
                    bg: 'bg-emerald-50 border-emerald-200',
                    label: 'Judicial Standing',
                    value: '22+ Years',
                  },
                  {
                    icon: <Languages className="w-5 h-5 text-purple-600" strokeWidth={2.5} />,
                    bg: 'bg-purple-50 border-purple-200',
                    label: 'Courtroom Languages',
                    value: 'Hindi · English',
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="card-light p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-1.5 rounded-md border ${card.bg} group-hover:scale-110 transition-transform`}>
                        {card.icon}
                      </div>
                      <span className="font-ui text-[0.65rem] font-bold tracking-wider text-slate-500 uppercase">
                        {card.label}
                      </span>
                    </div>
                    <div className="font-heading text-base font-bold text-slate-900 leading-tight">
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
