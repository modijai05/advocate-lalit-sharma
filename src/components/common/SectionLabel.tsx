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
      className={`inline-flex items-center gap-3 mb-4 ${className}`}
    >
      <span
        className={`font-ui text-[0.62rem] font-black tracking-[0.24em] uppercase ${
          isLight ? 'text-black' : 'text-white'
        }`}
      >
        {number}
      </span>
      <span className={isLight ? 'text-neutral-300 text-[0.5rem]' : 'text-white/25 text-[0.5rem]'}>━━</span>
      <span
        className={`font-ui text-[0.62rem] font-bold tracking-[0.22em] uppercase ${
          isLight ? 'text-neutral-600' : 'text-neutral-400'
        }`}
      >
        {title}
      </span>
    </div>
  )
}
