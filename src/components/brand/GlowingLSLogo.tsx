import React from 'react'
import { motion } from 'framer-motion'

interface GlowingLSLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showSubtitle?: boolean
}

export const GlowingLSLogo: React.FC<GlowingLSLogoProps> = ({
  className = '',
  size = 'lg',
  showSubtitle = true
}) => {
  const containerSize =
    size === 'sm'
      ? 'w-28 h-28'
      : size === 'md'
      ? 'w-40 h-40 sm:w-48 sm:h-48'
      : 'w-52 h-52 sm:w-64 sm:h-64'

  const imageSize =
    size === 'sm'
      ? 'w-16 h-16'
      : size === 'md'
      ? 'w-24 h-24 sm:w-28 sm:h-28'
      : 'w-32 h-32 sm:w-40 sm:h-40'

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Ambient Pulsing Gold Aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.75, 0.35]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#C9A84C]/35 via-[#E2C475]/20 to-transparent blur-3xl pointer-events-none"
      />

      {/* Rotating Astrolabe & Medallion Container */}
      <div className={`relative ${containerSize} flex items-center justify-center`}>
        {/* SVG Orbital Rings */}
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_25px_rgba(201,168,76,0.4)]"
        >
          <defs>
            <linearGradient id="goldRingMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="25%" stopColor="#E5C368" />
              <stop offset="50%" stopColor="#C9A84C" />
              <stop offset="75%" stopColor="#A8873A" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>

            <linearGradient id="shimmerBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFF7D1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Rotating Astrolabe Ring with 4 cardinal points */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '140px 140px' }}
          >
            <circle
              cx="140"
              cy="140"
              r="132"
              stroke="#C9A84C"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeOpacity="0.6"
            />
            {/* Celestial Astrolabe Marker Studs */}
            <circle cx="140" cy="8" r="3.5" fill="#FFF2B2" />
            <circle cx="272" cy="140" r="3.5" fill="#FFF2B2" />
            <circle cx="140" cy="272" r="3.5" fill="#FFF2B2" />
            <circle cx="8" cy="140" r="3.5" fill="#FFF2B2" />
          </motion.g>

          {/* Counter-Rotating Inner Ticked Ring */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '140px 140px' }}
          >
            <circle
              cx="140"
              cy="140"
              r="118"
              stroke="#E5C368"
              strokeWidth="0.75"
              strokeDasharray="2 6"
              strokeOpacity="0.45"
            />
          </motion.g>

          {/* Solid Polished Gold Outer Frame Ring */}
          <circle
            cx="140"
            cy="140"
            r="106"
            stroke="url(#goldRingMetallic)"
            strokeWidth="2"
            strokeOpacity="0.9"
          />

          {/* 8 Diamond Judicial Stars */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 140 140)`}>
              <polygon
                points="140,40 142,44 140,48 138,44"
                fill="#C9A84C"
                opacity="0.8"
              />
            </g>
          ))}
        </svg>

        {/* ── Core Emblem: The Original LS Logo with Advocate Neck Tie ── */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`
            relative z-10 ${imageSize}
            rounded-full bg-white
            p-3 sm:p-4.5
            flex items-center justify-center
            border-2 border-[#C9A84C]
            shadow-[0_0_35px_rgba(201,168,76,0.5),inset_0_0_15px_rgba(0,0,0,0.1)]
            overflow-hidden
          `}
        >
          {/* Original Client LS Logo Image */}
          <img
            src="/assets/images/lalit-sharma-logo.png"
            alt="Advocate Lalit Sharma Official LS Logo"
            className="w-full h-full object-contain relative z-10"
          />

          {/* Ambient Shimmer Sweep traversing across the logo */}
          <motion.div
            animate={{
              x: ['-120%', '160%']
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#C9A84C]/35 to-transparent skew-x-12 pointer-events-none z-20"
          />
        </motion.div>
      </div>

      {/* Subtitle / Professional Law Chamber Inscription */}
      {showSubtitle && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-center"
        >
          <div className="font-heading text-sm sm:text-base tracking-[0.2em] text-[#F3F0E6] uppercase font-bold">
            Advocate Lalit Sharma
          </div>
          <div className="font-ui text-[0.62rem] sm:text-[0.68rem] tracking-[0.24em] text-[#C9A84C] uppercase mt-1 font-semibold">
            Rajasthan High Court · Enrolment 2746/2005
          </div>
          <div className="font-ui text-[0.55rem] tracking-[0.18em] text-[#8E8B82] uppercase mt-0.5">
            Lalit Sharma &amp; Associates · Chamber 259, Block-E
          </div>
        </motion.div>
      )}
    </div>
  )
}
