import React from 'react'

interface SectionLabelProps {
  number: string
  title: string
  theme?: 'dark' | 'light'
  className?: string
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  title,
  theme = 'dark',
  className = ''
}) => {
  const isLight = theme === 'light'
  return (
    <div
      className={`inline-flex items-center gap-3 mb-5 ${className}`}
    >
      <span
        className={`font-ui text-[0.6rem] font-black tracking-[0.22em] uppercase ${
          isLight ? 'text-[#A8873A]' : 'text-[#C9A84C]'
        }`}
      >
        {number}
      </span>
      <span className={isLight ? 'text-[#D8D4C8] text-[0.5rem]' : 'text-white/20 text-[0.5rem]'}>━━</span>
      <span
        className={`font-ui text-[0.6rem] font-bold tracking-[0.22em] uppercase ${
          isLight ? 'text-[#5A5750]' : 'text-[#9B9790]'
        }`}
      >
        {title}
      </span>
    </div>
  )
}
