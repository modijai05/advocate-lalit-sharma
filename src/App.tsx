import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { CMSProvider } from './context/CMSContext'
import { DisclaimerGate } from './components/common/DisclaimerGate'
import { Header } from './components/navigation/Header'
import { Hero } from './components/sections/Hero'
import { AtTheBar } from './components/sections/AtTheBar'
import { HighCourtChamber } from './components/sections/HighCourtChamber'
import { PracticeAreas } from './components/sections/PracticeAreas'
import { RepresentativeMatters } from './components/sections/RepresentativeMatters'
import { About } from './components/sections/About'
import { ProfessionalTimeline } from './components/sections/ProfessionalTimeline'
import { AcademicArchive } from './components/sections/AcademicArchive'
import { PublicInvolvementsSection } from './components/sections/PublicInvolvementsSection'
import { LegalInsightsSection } from './components/sections/LegalInsightsSection'
import { DigitalPresence } from './components/sections/DigitalPresence'
import { ContactAndAppointment } from './components/sections/ContactAndAppointment'
import { FloatingContactDock } from './components/common/FloatingContactDock'
import { Footer } from './components/navigation/Footer'
import { AppointmentModal } from './components/modals/AppointmentModal'
import { DisclaimerModal, PrivacyPolicyModal } from './components/modals/ComplianceModals'
import { AdminDashboardModal } from './components/modals/AdminDashboardModal'

export function AppContent() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isAdminOpen, setIsAdminOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const handleExploreProfile = () => {
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#050816] text-[#FFFFFF] selection:bg-blue-600 selection:text-white">
      {/* Dynamic Vibrant Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-400 z-50 origin-left shadow-[0_0_14px_rgba(59,130,246,0.8)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Subtle Ambient Colorful Orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-2/3 -right-32 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none z-0" />

      {/* 00: Initial Disclaimer Gate (Full-screen chamber entrance) */}
      <DisclaimerGate />

      {/* Primary Sticky Editorial Header */}
      <Header
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Visual Narrative Flow */}
      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <Hero onExploreClick={handleExploreProfile} />

        {/* 01 / AT THE BAR (Dramatic black section with animated 22+) */}
        <AtTheBar />

        {/* 02 / RAJASTHAN HIGH COURT (Chamber 259, Block-E context) */}
        <HighCourtChamber />

        {/* 03 / PRACTICE AREAS (5 distinct visual chapters with custom SVGs) */}
        <PracticeAreas />

        {/* 04 / REPRESENTATIVE MATTER CATEGORIES (strictly factual, Bar Council compliant) */}
        <RepresentativeMatters />

        {/* 05 / PROFILE & BIOGRAPHY (Editorial split layout) */}
        <About />

        {/* 06 / PROFESSIONAL TIMELINE (Vertical animated tie-spine) */}
        <ProfessionalTimeline />

        {/* 07 / ACADEMIC BACKGROUND & 08 / MEMBERSHIPS & CIVIC */}
        <AcademicArchive />

        {/* 09 / OFFICIAL INVOLVEMENTS, CASE LEDGERS & PUBLIC RECORDS (Authentic Document Previews) */}
        <PublicInvolvementsSection />

        {/* 10 / LEGAL INSIGHTS (Journal-style procedural guides) */}
        <LegalInsightsSection />

        {/* 11 / DIGITAL PRESENCE (Verified LinkedIn, Facebook, Instagram + Animated Radar) */}
        <DigitalPresence />

        {/* 12 / CONTACT & APPOINTMENT (Coordinates, Google maps link, Forms) */}
        <ContactAndAppointment />
      </main>

      {/* Floating Action Dock (Call, WhatsApp, Appointment) */}
      <FloatingContactDock onOpenAppointment={() => setIsAppointmentOpen(true)} />

      {/* Footer with Judicial Architecture SVG Art & Compliance links */}
      <Footer
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <AdminDashboardModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  )
}

export default function App() {
  return (
    <CMSProvider>
      <AppContent />
    </CMSProvider>
  )
}
