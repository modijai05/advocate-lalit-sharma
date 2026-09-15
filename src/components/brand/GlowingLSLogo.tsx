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
  const imageSize =
    size === 'sm'
      ? 'w-16 h-16'
      : size === 'md'
      ? 'w-24 h-24 sm:w-28 sm:h-28'
      : 'w-32 h-32 sm:w-36 sm:h-36'

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Plain White Circle Logo — no outer rings or decorations */}
      <div
        className={`
          ${imageSize}
          rounded-full bg-white
          p-3 sm:p-4
          flex items-center justify-center
          border-2 border-white/60
          overflow-hidden
        `}
      >
        <img
          src="/assets/images/lalit-sharma-logo.png"
          alt="Advocate Lalit Sharma Official LS Logo"
          className="w-full h-full object-contain"
        />
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
