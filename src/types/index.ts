export interface ProfileData {
  name: string
  firm: string
  court: string
  enrolmentNo: string
  barCouncil: string
  experienceYears: number
  languages: string[]
  phone: string
  whatsapp: string
  email: string
  chamber: string
  residentialOffice: string
  locationUrl: string
  googleProfileStatus: string
  biographyIntro: string
  biographyChamber: string
}

export interface PracticeArea {
  id: string
  number: string
  title: string
  summary: string
  scope: string[]
  proceduralContext: string
  svgType: 'civil' | 'writ' | 'criminal' | 'revenue' | 'family'
}

export interface RepresentativeCategory {
  id: string
  code: string
  title: string
  scope: string
  statutoryFramework: string
  forums: string
}

export interface TimelineEntry {
  period: string
  designation: string
  forum: string
  authority: string
  description?: string
}

export interface AcademicRecord {
  degree: string
  institution: string
  location?: string
  field: string
  notation: string
}

export interface PublicationItem {
  id: string
  title: string
  publication: string
  year: string
  source: string
  status: 'PENDING_FROM_CLIENT' | 'PUBLISHED' | 'DRAFT'
}

export interface LegalInsight {
  id: string
  category: 'CONSTITUTION' | 'CIVIL PROCEDURE' | 'CRIMINAL LAW' | 'REVENUE LAW' | 'FAMILY LAW'
  title: string
  readingTime: string
  summary: string
  framework: string
  proceduralSteps: string[]
  statutoryReference: string
  status: 'PUBLISHED' | 'DRAFT'
}

export interface EnquirySubmission {
  id: string
  name: string
  phone: string
  email: string
  matterType: string
  message: string
  createdAt: string
  status: 'NEW' | 'REVIEWED' | 'ARCHIVED'
}

export interface AppointmentSubmission {
  id: string
  name: string
  phone: string
  email: string
  preferredDate: string
  preferredTime: string
  matterType: string
  message: string
  createdAt: string
  status: 'PENDING' | 'CONFIRMED' | 'ARCHIVED'
}
