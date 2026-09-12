import React, { createContext, useContext, useState, useEffect } from 'react'
import type {
  ProfileData,
  PublicationItem,
  LegalInsight,
  EnquirySubmission,
  AppointmentSubmission
} from '../types'
import {
  CLIENT_PROFILE,
  INITIAL_PUBLICATIONS,
  LEGAL_INSIGHTS
} from '../data/initialData'

interface CMSContextType {
  profile: ProfileData
  publications: PublicationItem[]
  insights: LegalInsight[]
  enquiries: EnquirySubmission[]
  appointments: AppointmentSubmission[]
  chamberTimings: string
  googleProfileUrl: string
  isAdminLoggedIn: boolean
  loginAdmin: (passcode: string) => boolean
  logoutAdmin: () => void
  submitEnquiry: (enquiry: Omit<EnquirySubmission, 'id' | 'createdAt' | 'status'>) => Promise<{ success: boolean; message: string }>
  submitAppointment: (appointment: Omit<AppointmentSubmission, 'id' | 'createdAt' | 'status'>) => Promise<{ success: boolean; message: string }>
  updateChamberTimings: (timings: string) => void
  updateGoogleProfileUrl: (url: string) => void
  addPublication: (pub: Omit<PublicationItem, 'id'>) => void
  deletePublication: (id: string) => void
  togglePublicationStatus: (id: string) => void
  updateEnquiryStatus: (id: string, status: EnquirySubmission['status']) => void
  updateAppointmentStatus: (id: string, status: AppointmentSubmission['status']) => void
}

const CMSContext = createContext<CMSContextType | undefined>(undefined)

const STORAGE_KEYS = {
  PUBLICATIONS: 'als_cms_publications_v1',
  INSIGHTS: 'als_cms_insights_v1',
  ENQUIRIES: 'als_cms_enquiries_v1',
  APPOINTMENTS: 'als_cms_appointments_v1',
  TIMINGS: 'als_cms_timings_v1',
  GOOGLE_PROFILE: 'als_cms_google_profile_v1',
  ADMIN_AUTH: 'als_admin_auth_v1'
}

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile] = useState<ProfileData>(CLIENT_PROFILE)
  const [publications, setPublications] = useState<PublicationItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PUBLICATIONS)
    return saved ? JSON.parse(saved) : INITIAL_PUBLICATIONS
  })
  const [insights] = useState<LegalInsight[]>(LEGAL_INSIGHTS)
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES)
    return saved ? JSON.parse(saved) : []
  })
  const [appointments, setAppointments] = useState<AppointmentSubmission[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)
    return saved ? JSON.parse(saved) : []
  })
  const [chamberTimings, setChamberTimings] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEYS.TIMINGS) || 'Information pending from client.'
  })
  const [googleProfileUrl, setGoogleProfileUrl] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEYS.GOOGLE_PROFILE) || 'Pending client verification'
  })
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(publications))
  }, [publications])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries))
  }, [enquiries])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments))
  }, [appointments])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TIMINGS, chamberTimings)
  }, [chamberTimings])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GOOGLE_PROFILE, googleProfileUrl)
  }, [googleProfileUrl])

  const loginAdmin = (passcode: string): boolean => {
    if (passcode.trim() === 'chamber259' || passcode.trim() === 'advocate2026') {
      setIsAdminLoggedIn(true)
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true')
      return true
    }
    return false
  }

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false)
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH)
  }

  const submitEnquiry = async (
    data: Omit<EnquirySubmission, 'id' | 'createdAt' | 'status'>
  ): Promise<{ success: boolean; message: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    try {
      const newEntry: EnquirySubmission = {
        ...data,
        id: 'enq-' + Date.now(),
        createdAt: new Date().toISOString(),
        status: 'NEW'
      }
      setEnquiries((prev) => [newEntry, ...prev])
      return {
        success: true,
        message: 'Your enquiry has been received. The chamber office will review your message.'
      }
    } catch {
      return {
        success: false,
        message:
          'Your submission could not be completed at this time. Please use the phone or WhatsApp contact provided.'
      }
    }
  }

  const submitAppointment = async (
    data: Omit<AppointmentSubmission, 'id' | 'createdAt' | 'status'>
  ): Promise<{ success: boolean; message: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    try {
      const newEntry: AppointmentSubmission = {
        ...data,
        id: 'apt-' + Date.now(),
        createdAt: new Date().toISOString(),
        status: 'PENDING'
      }
      setAppointments((prev) => [newEntry, ...prev])
      return {
        success: true,
        message: 'Appointment request submitted. Appointment requests are subject to confirmation.'
      }
    } catch {
      return {
        success: false,
        message:
          'Your submission could not be completed at this time. Please use the phone or WhatsApp contact provided.'
      }
    }
  }

  const updateChamberTimings = (timings: string) => {
    setChamberTimings(timings)
  }

  const updateGoogleProfileUrl = (url: string) => {
    setGoogleProfileUrl(url)
  }

  const addPublication = (pub: Omit<PublicationItem, 'id'>) => {
    const newItem: PublicationItem = {
      ...pub,
      id: 'pub-' + Date.now()
    }
    setPublications((prev) => [newItem, ...prev])
  }

  const deletePublication = (id: string) => {
    setPublications((prev) => prev.filter((p) => p.id !== id))
  }

  const togglePublicationStatus = (id: string) => {
    setPublications((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED' }
          : p
      )
    )
  }

  const updateEnquiryStatus = (id: string, status: EnquirySubmission['status']) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    )
  }

  const updateAppointmentStatus = (id: string, status: AppointmentSubmission['status']) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    )
  }

  return (
    <CMSContext.Provider
      value={{
        profile,
        publications,
        insights,
        enquiries,
        appointments,
        chamberTimings,
        googleProfileUrl,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        submitEnquiry,
        submitAppointment,
        updateChamberTimings,
        updateGoogleProfileUrl,
        addPublication,
        deletePublication,
        togglePublicationStatus,
        updateEnquiryStatus,
        updateAppointmentStatus
      }}
    >
      {children}
    </CMSContext.Provider>
  )
}

export const useCMS = () => {
  const context = useContext(CMSContext)
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider')
  }
  return context
}
