import React from 'react'

interface AdvocateTieMotifProps {
  className?: string
  color?: string
  width?: number
  height?: number
  variant?: 'insignia' | 'spine' | 'divider'
}

export const AdvocateTieMotif: React.FC<AdvocateTieMotifProps> = ({
  className = '',
  color = 'currentColor',
  width = 36,
  height = 42,
  variant = 'insignia'
}) => {
  if (variant === 'spine') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 40 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Advocate collar neckband curve */}
          <path
            d="M8 12C12 18 28 18 32 12C28 8 12 8 8 12Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Two hanging advocate bands (tabs) */}
          <path
            d="M13 16L10 42L18 40L17 17"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M23 17L22 40L30 42L27 16"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <div className="w-[1px] h-full bg-gradient-to-b from-current/40 via-current/20 to-transparent" />
      </div>
    )
  }

  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-4 py-6 ${className}`}>
        <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-current/30" />
        <svg
          width="24"
          height="28"
          viewBox="0 0 40 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-75"
        >
          <path
            d="M8 12C12 18 28 18 32 12C28 8 12 8 8 12Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M13 16L10 42L18 40L17 17"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M23 17L22 40L30 42L27 16"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-current/30" />
      </div>
    )
  }

  // Default insignia
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Advocate's Tie Motif"
    >
      {/* Advocate's neckband collar */}
      <path
        d="M8 12C13 19 27 19 32 12C28 8 12 8 8 12Z"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Advocate left falling band */}
      <path
        d="M13 16.5L9.5 43L18 40.5L17 17"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Advocate right falling band */}
      <path
        d="M23 17L22 40.5L30.5 43L27 16.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
