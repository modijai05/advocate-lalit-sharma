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
      : 'w-56 h-56 sm:w-68 sm:h-68'

  const imageSize =
    size === 'sm'
      ? 'w-16 h-16'
      : size === 'md'
      ? 'w-24 h-24 sm:w-28 sm:h-28'
      : 'w-32 h-32 sm:w-40 sm:h-40'

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Ambient Pulsing Multi-Color Aura (Warm Gold + Royal Sapphire) */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.45, 0.85, 0.45]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-amber-500/35 via-blue-600/25 to-purple-600/25 blur-3xl pointer-events-none"
      />

      {/* Rotating Astrolabe & Medallion Container */}
      <div className={`relative ${containerSize} flex items-center justify-center`}>
        {/* SVG Orbital Rings */}
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]"
        >
          <defs>
            <linearGradient id="goldRingMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="25%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="75%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>

            <linearGradient id="cyanBlueRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>

          {/* Outer Rotating Astrolabe Ring with 4 cardinal points */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '140px 140px' }}
          >
            <circle
              cx="140"
              cy="140"
              r="134"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              strokeOpacity="0.75"
            />
            {/* Celestial Astrolabe Marker Studs */}
            <circle cx="140" cy="6" r="4" fill="#FDE68A" className="drop-shadow-[0_0_6px_#f59e0b]" />
            <circle cx="274" cy="140" r="4" fill="#FDE68A" className="drop-shadow-[0_0_6px_#f59e0b]" />
            <circle cx="140" cy="274" r="4" fill="#FDE68A" className="drop-shadow-[0_0_6px_#f59e0b]" />
            <circle cx="6" cy="140" r="4" fill="#FDE68A" className="drop-shadow-[0_0_6px_#f59e0b]" />
          </motion.g>

          {/* Counter-Rotating Inner Ticked Ring */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '140px 140px' }}
          >
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke="#60A5FA"
              strokeWidth="1"
              strokeDasharray="3 7"
              strokeOpacity="0.6"
            />
          </motion.g>

          {/* Solid Polished Gold Outer Frame Ring */}
          <circle
            cx="140"
            cy="140"
            r="108"
            stroke="url(#goldRingMetallic)"
            strokeWidth="2.5"
            strokeOpacity="0.95"
          />

          {/* 8 Diamond Judicial Stars with Warm Amber Glow */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 140 140)`}>
              <polygon
                points="140,38 143,43 140,48 137,43"
                fill="#F59E0B"
                className="drop-shadow-[0_0_4px_#f59e0b]"
              />
            </g>
          ))}
        </svg>

        {/* ── Core Emblem: The Original LS Logo with Advocate Neck Tie ── */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          className={`
            relative z-10 ${imageSize}
            rounded-full bg-white
            p-3.5 sm:p-5
            flex items-center justify-center
            border-3 border-amber-400
            shadow-[0_0_40px_rgba(245,158,11,0.6),inset_0_0_20px_rgba(0,0,0,0.08)]
            overflow-hidden group cursor-pointer
          `}
        >
          {/* Original Client LS Logo Image */}
          <img
            src="/assets/images/lalit-sharma-logo.png"
            alt="Advocate Lalit Sharma Official LS Logo"
            className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
          />

          {/* Ambient Shimmer Sweep traversing across the logo */}
          <motion.div
            animate={{
              x: ['-120%', '160%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent skew-x-12 pointer-events-none z-20"
          />
        </motion.div>
      </div>

      {/* Subtitle / Professional Law Chamber Inscription */}
      {showSubtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-center"
        >
          <div className="font-heading text-lg sm:text-2xl tracking-[0.16em] text-white uppercase font-black drop-shadow-md">
            ADVOCATE LALIT SHARMA
          </div>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <span className="font-ui text-xs sm:text-sm tracking-[0.22em] text-amber-300 uppercase font-bold">
              Rajasthan High Court · Enrolment 2746/2005
            </span>
          </div>
          <div className="font-ui text-xs tracking-[0.16em] text-slate-300 uppercase mt-2 font-medium">
            Lalit Sharma &amp; Associates · Chamber 259, Block-E Campus
          </div>
        </motion.div>
      )}
    </div>
  )
}
