import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { CMSProvider } from './context/CMSContext'
import { Header } from './components/navigation/Header'
import { Hero } from './components/sections/Hero'
import { AtTheBar } from './components/sections/AtTheBar'
import { HighCourtChamber } from './components/sections/HighCourtChamber'
import { PracticeAreas } from './components/sections/PracticeAreas'
import { RepresentativeMatters } from './components/sections/RepresentativeMatters'
import { About } from './components/sections/About'
import { ProfessionalTimeline } from './components/sections/ProfessionalTimeline'
import { AcademicArchive } from './components/sections/AcademicArchive'
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
    <div className="relative min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-white selection:text-black">
      {/* Monochrome Classic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-50 origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* Primary Sticky Traditional Header */}
      <Header
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Visual Narrative Flow */}
      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <Hero onExploreClick={handleExploreProfile} />

        {/* 01 / AT THE BAR (Classic black section with 22+ Years standing) */}
        <AtTheBar />

        {/* 02 / RAJASTHAN HIGH COURT (Chamber 259, Block-E context) */}
        <HighCourtChamber />

        {/* 03 / PRACTICE AREAS */}
        <PracticeAreas />

        {/* 04 / REPRESENTATIVE MATTER CATEGORIES (strictly factual, Bar Council compliant) */}
        <RepresentativeMatters />

        {/* 05 / PROFILE & BIOGRAPHY */}
        <About />

        {/* 06 / PROFESSIONAL TIMELINE */}
        <ProfessionalTimeline />

        {/* 07 / ACADEMIC BACKGROUND & 08 / BAR MEMBERSHIPS (Black Background) */}
        <AcademicArchive />

        {/* 09 / CONTACT & APPOINTMENTS (Coordinates, Google maps link, Forms) */}
        <ContactAndAppointment />
      </main>

      {/* Floating Action Dock (Call, WhatsApp, Appointment) */}
      <FloatingContactDock onOpenAppointment={() => setIsAppointmentOpen(true)} />

      {/* Footer with Monogram Crest, Compliance links & Social Media */}
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
