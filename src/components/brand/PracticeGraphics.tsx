import React from 'react'

interface GraphicProps {
  className?: string
  color?: string
}

export const CivilLitigationGraphic: React.FC<GraphicProps> = ({
  className = 'w-full h-48',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 320 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`opacity-80 transition-opacity duration-500 hover:opacity-100 ${className}`}
  >
    {/* Property / Deed Title Boundary Geometry */}
    <rect x="20" y="20" width="280" height="160" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
    <rect x="40" y="40" width="240" height="120" stroke={color} strokeWidth="1" />
    <line x1="40" y1="70" x2="280" y2="70" stroke={color} strokeWidth="0.75" />
    <line x1="120" y1="40" x2="120" y2="160" stroke={color} strokeWidth="0.75" />
    {/* Architectural plot survey coordinates */}
    <circle cx="120" cy="70" r="3" fill={color} />
    <circle cx="280" cy="160" r="3" fill={color} />
    <circle cx="40" cy="160" r="3" fill={color} />
    <path d="M120 70L220 120L180 160" stroke={color} strokeWidth="1.25" />
    {/* Dimension lines */}
    <text x="50" y="60" fill={color} fontSize="8" fontFamily="monospace" letterSpacing="1">PARCEL.REF: 1908/CPC</text>
    <text x="135" y="105" fill={color} fontSize="7" fontFamily="monospace">BOUNDARY ADJUDICATION</text>
    <line x1="220" y1="120" x2="250" y2="120" stroke={color} strokeWidth="0.5" strokeDasharray="1 1" />
  </svg>
)

export const WritConstitutionalGraphic: React.FC<GraphicProps> = ({
  className = 'w-full h-48',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 320 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`opacity-80 transition-opacity duration-500 hover:opacity-100 ${className}`}
  >
    {/* High Court Arch & Constitutional Margins */}
    <path
      d="M60 170V80C60 40 160 30 160 30C160 30 260 40 260 80V170"
      stroke={color}
      strokeWidth="1.2"
    />
    <path
      d="M80 170V90C80 60 160 50 160 50C160 50 240 60 240 90V170"
      stroke={color}
      strokeWidth="0.75"
      strokeDasharray="3 2"
    />
    {/* Central Pillar of Prerogative Writs */}
    <line x1="160" y1="30" x2="160" y2="170" stroke={color} strokeWidth="1" />
    <line x1="40" y1="170" x2="280" y2="170" stroke={color} strokeWidth="1.5" />
    {/* High Court Inscriptions */}
    <text x="160" y="22" fill={color} fontSize="8" fontFamily="serif" textAnchor="middle" letterSpacing="3">
      ARTICLE 226 · ARTICLE 227
    </text>
    <text x="160" y="110" fill={color} fontSize="7" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">
      JUDICIAL REVIEW OF STATE ACTION
    </text>
    <circle cx="160" cy="50" r="4" fill={color} />
  </svg>
)

export const CriminalGraphic: React.FC<GraphicProps> = ({
  className = 'w-full h-48',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 320 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`opacity-80 transition-opacity duration-500 hover:opacity-100 ${className}`}
  >
    {/* Dark vertical architectural bars & liberty axis */}
    <line x1="60" y1="30" x2="60" y2="170" stroke={color} strokeWidth="2" />
    <line x1="90" y1="45" x2="90" y2="155" stroke={color} strokeWidth="1" />
    <line x1="120" y1="30" x2="120" y2="170" stroke={color} strokeWidth="1.5" />
    <line x1="150" y1="50" x2="150" y2="150" stroke={color} strokeWidth="0.75" />
    <line x1="180" y1="30" x2="180" y2="170" stroke={color} strokeWidth="1.5" />
    <line x1="210" y1="45" x2="210" y2="155" stroke={color} strokeWidth="1" />
    <line x1="240" y1="30" x2="240" y2="170" stroke={color} strokeWidth="2" />
    {/* Diagonal vector of intervention / liberty quashing */}
    <line x1="40" y1="140" x2="270" y2="60" stroke={color} strokeWidth="1.75" />
    <polygon points="275,60 262,56 266,68" fill={color} />
    <text x="160" y="185" fill={color} fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="2">
      SEC. 482 CR.P.C. / BNSS · BAIL & QUASHING
    </text>
  </svg>
)

export const RevenueGraphic: React.FC<GraphicProps> = ({
  className = 'w-full h-48',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 320 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`opacity-80 transition-opacity duration-500 hover:opacity-100 ${className}`}
  >
    {/* Cadastral / Land Record Khasra Geometry */}
    <polygon points="40,40 140,30 200,80 130,120 40,90" stroke={color} strokeWidth="1" fill="none" />
    <polygon points="140,30 270,45 280,130 200,80" stroke={color} strokeWidth="1" fill="none" />
    <polygon points="40,90 130,120 160,170 50,165" stroke={color} strokeWidth="1" fill="none" />
    <polygon points="130,120 200,80 280,130 230,175 160,170" stroke={color} strokeWidth="1.2" fill="none" />
    {/* Boundary markers (Patwar circles) */}
    <circle cx="130" cy="120" r="3" fill={color} />
    <circle cx="200" cy="80" r="3" fill={color} />
    <text x="80" y="65" fill={color} fontSize="7" fontFamily="monospace">KHASRA 42/1</text>
    <text x="210" y="115" fill={color} fontSize="7" fontFamily="monospace">BOARD OF REVENUE</text>
    <text x="85" y="140" fill={color} fontSize="6" fontFamily="monospace">TENANCY ACT 1955</text>
  </svg>
)

export const FamilyMatrimonialGraphic: React.FC<GraphicProps> = ({
  className = 'w-full h-48',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 320 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`opacity-80 transition-opacity duration-500 hover:opacity-100 ${className}`}
  >
    {/* Intersecting architectural elliptical rings of balance */}
    <ellipse cx="120" cy="100" rx="70" ry="45" stroke={color} strokeWidth="1" fill="none" />
    <ellipse cx="200" cy="100" rx="70" ry="45" stroke={color} strokeWidth="1" fill="none" />
    <path
      d="M160 65C175 80 175 120 160 135C145 120 145 80 160 65Z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    <line x1="80" y1="100" x2="240" y2="100" stroke={color} strokeWidth="0.75" strokeDasharray="2 2" />
    <text x="160" y="165" fill={color} fontSize="7" fontFamily="serif" textAnchor="middle" letterSpacing="2">
      FAMILY COURTS ACT · EQUITABLE RESOLUTION
    </text>
  </svg>
)

export const JudicialArchitectureGraphic: React.FC<GraphicProps> = ({
  className = 'w-full h-32',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 400 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`opacity-60 hover:opacity-90 transition-opacity ${className}`}
  >
    {/* Classical High Court Pediment and Colonnade */}
    <polygon points="200,15 30,50 370,50" stroke={color} strokeWidth="1" fill="none" />
    <line x1="20" y1="52" x2="380" y2="52" stroke={color} strokeWidth="1.5" />
    <line x1="10" y1="56" x2="390" y2="56" stroke={color} strokeWidth="0.75" />
    {/* Columns */}
    <line x1="50" y1="56" x2="50" y2="105" stroke={color} strokeWidth="1.5" />
    <line x1="100" y1="56" x2="100" y2="105" stroke={color} strokeWidth="1.5" />
    <line x1="150" y1="56" x2="150" y2="105" stroke={color} strokeWidth="1.5" />
    <line x1="200" y1="56" x2="200" y2="105" stroke={color} strokeWidth="1.5" />
    <line x1="250" y1="56" x2="250" y2="105" stroke={color} strokeWidth="1.5" />
    <line x1="300" y1="56" x2="300" y2="105" stroke={color} strokeWidth="1.5" />
    <line x1="350" y1="56" x2="350" y2="105" stroke={color} strokeWidth="1.5" />
    {/* Base plinth */}
    <rect x="25" y="105" width="350" height="8" stroke={color} strokeWidth="1" />
  </svg>
)
