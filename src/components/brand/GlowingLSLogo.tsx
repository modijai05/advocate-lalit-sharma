import React from 'react'

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
      ? 'w-24 h-24'
      : size === 'md'
      ? 'w-36 h-36 sm:w-44 sm:h-44'
      : 'w-48 h-48 sm:w-56 sm:h-56'

  const imageSize =
    size === 'sm'
      ? 'w-14 h-14'
      : size === 'md'
      ? 'w-20 h-20 sm:w-24 sm:h-24'
      : 'w-28 h-28 sm:w-32 sm:h-32'

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Astrolabe & Medallion Container (Solid Monochrome, Static) */}
      <div className={`relative ${containerSize} flex items-center justify-center`}>
        {/* SVG Orbital Rings — Solid Pure White, No Rotation */}
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Outer Astrolabe Ring with 4 cardinal points */}
          <g>
            <circle
              cx="140"
              cy="140"
              r="134"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeDasharray="4 8"
              strokeOpacity="0.4"
            />
            {/* Celestial Astrolabe Marker Studs */}
            <circle cx="140" cy="6" r="3" fill="#FFFFFF" opacity="0.6" />
            <circle cx="274" cy="140" r="3" fill="#FFFFFF" opacity="0.6" />
            <circle cx="140" cy="274" r="3" fill="#FFFFFF" opacity="0.6" />
            <circle cx="6" cy="140" r="3" fill="#FFFFFF" opacity="0.6" />
          </g>

          {/* Inner Ticked Ring */}
          <circle
            cx="140"
            cy="140"
            r="120"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeDasharray="2 6"
            strokeOpacity="0.3"
          />

          {/* Solid White Outer Frame Ring */}
          <circle
            cx="140"
            cy="140"
            r="108"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.85"
          />

          {/* 8 Diamond Judicial Stars */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 140 140)`}>
              <polygon
                points="140,38 143,43 140,48 137,43"
                fill="#FFFFFF"
                opacity="0.8"
              />
            </g>
          ))}
        </svg>

        {/* ── Core Emblem: Plain White Circle with Original Client Logo ── */}
        <div
          className={`
            relative z-10 ${imageSize}
            rounded-full bg-white
            p-3 sm:p-4
            flex items-center justify-center
            border-2 border-white
            overflow-hidden
          `}
        >
          <img
            src="/assets/images/lalit-sharma-logo.png"
            alt="Advocate Lalit Sharma Official LS Logo"
            className="w-full h-full object-contain relative z-10"
          />
        </div>
      </div>

      {/* Subtitle / Professional Law Chamber Inscription */}
      {showSubtitle && (
        <div className="mt-4 text-center">
          <div className="font-heading text-lg sm:text-xl tracking-[0.16em] text-white uppercase font-bold">
            ADVOCATE LALIT SHARMA
          </div>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 border border-white/20">
            <span className="font-ui text-xs tracking-[0.2em] text-neutral-300 uppercase font-semibold">
              Rajasthan High Court · Enrolment 2746/2005
            </span>
          </div>
          <div className="font-ui text-xs tracking-[0.14em] text-neutral-400 uppercase mt-2">
            Lalit Sharma &amp; Associates · Chamber 259, Block-E Campus
          </div>
        </div>
      )}
    </div>
  )
}
