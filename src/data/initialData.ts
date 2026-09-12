import type {
  ProfileData,
  PracticeArea,
  RepresentativeCategory,
  TimelineEntry,
  AcademicRecord,
  PublicationItem,
  LegalInsight
} from '../types'

export const CLIENT_PROFILE: ProfileData = {
  name: 'Lalit Sharma',
  firm: 'Lalit Sharma & Associates',
  court: 'Rajasthan High Court, Jaipur',
  enrolmentNo: '2746/2005',
  barCouncil: 'Bar Council of Rajasthan',
  experienceYears: 22,
  languages: ['Hindi', 'English'],
  phone: '+91 98292 33334',
  whatsapp: '+91 98292 33334',
  email: 'adlalitsharmajaipur@gmail.com',
  chamber: 'Chamber 259, Block-E, Rajasthan High Court, Jaipur',
  residentialOffice: '231, Surya Nagar, Bharat Marg, Gopalpura Bypass, Jaipur',
  locationUrl: 'https://share.google/ubp0Pn0KX1aK9LBQT',
  googleProfileStatus: 'Pending client verification',
  biographyIntro:
    'I am an advocate enrolled with the Bar Council of Rajasthan (Enrolment No. 2746/2005), and I have practised before the Rajasthan High Court at Jaipur for over 22 years. My practice spans civil, constitutional, criminal, revenue, and family matters, appearing before the High Court and allied forums across a wide range of disputes.',
  biographyChamber:
    'I work from Chamber 259, Block-E, Rajasthan High Court, Jaipur. My work covers civil disputes, writ petitions under Articles 226 and 227 of the Constitution, criminal proceedings, revenue and land matters, and family and matrimonial cases. I approach each matter with careful preparation, attention to detail, and clear communication with my client at every stage.'
}

export const DISCLAIMER_TEXT =
  'This website is intended solely to provide general information about Advocate Lalit Sharma and is not intended to advertise or solicit work in any manner. By accessing this website, you acknowledge and confirm that you are seeking information relating to Advocate Lalit Sharma of your own accord, and that there has been no form of solicitation, advertisement, or inducement by Advocate Lalit Sharma or any associate. The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is created by accessing or using this website. The information furnished herein is true and correct to the best of the advocate’s knowledge. Advocate Lalit Sharma shall not be liable for any consequence of any action taken by relying on the material / information provided on this website.'

export const SOCIAL_LINKS = {
  linkedin:
    'https://www.linkedin.com/in/lalit-sharma-0abb57281?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  facebook: 'https://www.facebook.com/share/1BqXCMmSmz/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/lalitsharmajaipur?stkn=dHJhMmZiNGc1M2Q1'
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil-litigation',
    number: '01',
    title: 'CIVIL LITIGATION',
    summary:
      'Representation in civil disputes — property, contractual, recovery, and related matters — before the Rajasthan High Court and subordinate forums.',
    scope: [
      'Title, partition, possession, and boundary disputes',
      'Specific performance and contractual enforcement',
      'Money recovery and commercial civil claims',
      'Injunctions and declaration suits',
      'First Appeals (RFA) and Second Appeals (RSA)'
    ],
    proceduralContext: 'Governed under Code of Civil Procedure, 1908 & Specific Relief Act',
    svgType: 'civil'
  },
  {
    id: 'writ-constitutional',
    number: '02',
    title: 'WRIT & CONSTITUTIONAL',
    summary:
      'Writ petitions under Articles 226 and 227 of the Constitution, including service, administrative, and public-law matters.',
    scope: [
      'Writs of Mandamus, Certiorari, Prohibition, and Quo Warranto',
      'Service jurisprudence, disciplinary inquiries, and pensions',
      'Administrative decisions and arbitrary state actions',
      'Supervisory jurisdiction under Article 227 over tribunals',
      'Tender, licensing, and municipal regulatory disputes'
    ],
    proceduralContext: 'Constitutional remedies before the High Court of Judicature for Rajasthan',
    svgType: 'writ'
  },
  {
    id: 'criminal',
    number: '03',
    title: 'CRIMINAL',
    summary:
      'Representation in criminal proceedings, including bail, appeals, revisions, and quashing petitions.',
    scope: [
      'Regular bail, interim bail, and anticipatory bail',
      'Petitions under Section 482 CrPC / BNSS for quashing of FIR / chargesheet',
      'Criminal revisions and statutory criminal appeals',
      'Economic offences and statutory regulatory prosecutions',
      'Appellate representation before the High Court Bench'
    ],
    proceduralContext: 'Statutory criminal remedies under CrPC / Bharatiya Nagarik Suraksha Sanhita',
    svgType: 'criminal'
  },
  {
    id: 'revenue',
    number: '04',
    title: 'REVENUE',
    summary:
      'Matters under Rajasthan revenue and land laws, including proceedings before the Board of Revenue and revenue courts.',
    scope: [
      'Agricultural tenancy rights and khatedari determinations',
      'Proceedings under Rajasthan Tenancy Act, 1955',
      'Matters under Rajasthan Land Revenue Act, 1956',
      'Appeals and revisions before the Board of Revenue, Ajmer',
      'Mutation disputes and boundary regularizations'
    ],
    proceduralContext: 'Specialized agrarian and land jurisprudence of the State of Rajasthan',
    svgType: 'revenue'
  },
  {
    id: 'family-matrimonial',
    number: '05',
    title: 'FAMILY & MATRIMONIAL',
    summary:
      'Divorce, maintenance, custody, and related family and matrimonial matters.',
    scope: [
      'Dissolution of marriage and judicial separation',
      'Maintenance proceedings under Section 125 CrPC / BNSS',
      'Child custody, guardianship, and visitation rights',
      'Restitution of Conjugal Rights',
      'Appeals from Family Courts under the Family Courts Act'
    ],
    proceduralContext: 'Family Courts Act, 1984 & personal statutory codes',
    svgType: 'family'
  }
]

export const REPRESENTATIVE_MATTERS: RepresentativeCategory[] = [
  {
    id: 'cat-civil',
    code: 'CAT-01',
    title: 'Civil Disputes',
    scope: 'Substantive civil suits, property partitions, title adjudications, commercial declarations, and contractual recovery matters.',
    statutoryFramework: 'Code of Civil Procedure, 1908; Specific Relief Act, 1963; Transfer of Property Act, 1882',
    forums: 'Rajasthan High Court (Jaipur Bench), District Courts, Commercial Courts'
  },
  {
    id: 'cat-writ',
    code: 'CAT-02',
    title: 'Writ Petitions',
    scope: 'Constitutional challenges, enforcement of fundamental rights, judicial review of executive actions, and service matters.',
    statutoryFramework: 'Constitution of India, Articles 226 & 227; Rajasthan High Court Rules, 1952',
    forums: 'Rajasthan High Court (Jaipur Bench)'
  },
  {
    id: 'cat-criminal',
    code: 'CAT-03',
    title: 'Criminal Proceedings',
    scope: 'Inherent powers of the High Court, quashing petitions, regular and anticipatory bails, revisions against interlocutory orders.',
    statutoryFramework: 'Code of Criminal Procedure, 1973; Bharatiya Nagarik Suraksha Sanhita; Indian Penal Code',
    forums: 'High Court of Judicature for Rajasthan, Sessions Courts'
  },
  {
    id: 'cat-revenue',
    code: 'CAT-04',
    title: 'Revenue & Land Matters',
    scope: 'Agrarian land disputes, khatedari declaration, partition of agricultural holdings, and revisionary appeals.',
    statutoryFramework: 'Rajasthan Tenancy Act, 1955; Rajasthan Land Revenue Act, 1956',
    forums: 'Board of Revenue for Rajasthan (Ajmer), Revenue Appellate Authorities, High Court'
  },
  {
    id: 'cat-family',
    code: 'CAT-05',
    title: 'Family & Matrimonial Matters',
    scope: 'Matrimonial dispute resolution, maintenance claims, child welfare and custody determinations, and appeals from Family Courts.',
    statutoryFramework: 'Hindu Marriage Act, 1955; Family Courts Act, 1984; Guardians and Wards Act, 1890',
    forums: 'Principal Family Courts, High Court Appellate Jurisdiction'
  }
]

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    period: '2026',
    designation: 'Senior Panel Counsel',
    forum: 'Rajasthan High Court (Jaipur Bench)',
    authority: 'Ministry of Law and Justice, Government of India',
    description: 'Empanelled to represent the Union of India and its respective ministries in legal proceedings before the Rajasthan High Court Bench at Jaipur.'
  },
  {
    period: 'Nearly a Decade',
    designation: 'Standing Counsel',
    forum: 'Jaipur Municipal Corporation',
    authority: 'Jaipur Municipal Corporation (Nagar Nigam)',
    description: 'Represented the municipal corporation across urban land development, civic regulation, tender compliance, and administrative writ litigations.'
  },
  {
    period: '22+ Years',
    designation: 'At the Bar',
    forum: 'Rajasthan High Court & Allied Forums',
    authority: 'Bar Council of Rajasthan (Enrolment No. 2746/2005)',
    description: 'Continuous legal practice spanning civil, constitutional, criminal, revenue, and family matters since enrolment.'
  }
]

export const ACADEMIC_RECORDS: AcademicRecord[] = [
  {
    degree: 'LL.B.',
    institution: 'University of Rajasthan',
    field: 'Bachelor of Laws',
    notation: 'Foundational legal education in jurisprudence and procedural codes.'
  },
  {
    degree: 'LL.M.',
    institution: 'University of Rajasthan',
    field: 'Master of Laws',
    notation: 'Advanced post-graduate legal studies and constitutional principles.'
  },
  {
    degree: 'M.A. Sociology',
    institution: 'University of Rajasthan',
    field: 'Social Structure & Institutions',
    notation: 'Interdisciplinary grounding in societal dynamics, community structures, and institutional analysis.'
  },
  {
    degree: 'Diploma in Environmental Law',
    institution: 'Recognized Institute of Law',
    field: 'Environmental Jurisprudence',
    notation: 'Ecological governance, regulatory clearances, and sustainable developmental jurisprudence.'
  },
  {
    degree: 'Diploma in Photojournalism',
    institution: 'International Academy',
    location: 'Berlin, Germany',
    field: 'Documentary Visual Arts',
    notation: 'Visual documentation, precision observation, and editorial storytelling from Berlin.'
  }
]

export const BAR_MEMBERSHIPS = [
  {
    role: 'Life Member',
    organization: 'Rajasthan High Court Bar Association'
  },
  {
    role: 'Life Member',
    organization: 'The Jaipur Bar Association'
  }
]

export const CIVIC_INVOLVEMENT = [
  { name: 'Ashok Club', city: 'Jaipur', type: 'Civic & Social Institution' },
  { name: 'Rajasthan International Centre', city: 'Jaipur', type: 'Cultural & Intellectual Forum' },
  { name: 'Lions Club', city: 'Jaipur', type: 'Community Service Organization' },
  { name: 'Rotary Club', city: 'Jaipur', type: 'Civic Service Organization' }
]

export const INITIAL_PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-archive-placeholder',
    title: 'Content Pending from Client',
    publication: 'Legal Archive / Law Journals',
    year: 'Pending Verification',
    source: 'Bar Council of Rajasthan & Legal Archives',
    status: 'PENDING_FROM_CLIENT'
  }
]

export const LEGAL_INSIGHTS: LegalInsight[] = [
  {
    id: 'writ-petition-procedure',
    category: 'CONSTITUTION',
    title: 'Procedural Steps in a Writ Petition before the High Court',
    readingTime: '5 min procedural overview',
    summary: 'A procedural walkthrough of invoking the extraordinary writ jurisdiction of the High Court of Judicature for Rajasthan under Articles 226 and 227 of the Constitution of India.',
    framework: 'Extraordinary Original Jurisdiction of the High Court',
    proceduralSteps: [
      'Establishing Locus Standi & Violation of Fundamental / Legal Rights',
      'Demonstrating Exhaustion of Alternative Statutory Remedies',
      'Drafting the Synopsis, Chronology of Events, and Grounds of Challenge',
      'Filing with Affidavits and Supporting Annexures under High Court Rules',
      'Motion Stage: Preliminary Hearing for Notice & Interim Relief'
    ],
    statutoryReference: 'Articles 226, 227 of the Constitution of India & Rajasthan High Court Rules, 1952',
    status: 'PUBLISHED'
  },
  {
    id: 'articles-226-227-distinction',
    category: 'CONSTITUTION',
    title: 'Understanding Articles 226 and 227: Scope and Demarcation',
    readingTime: '4 min procedural overview',
    summary: 'An analytical examination of the distinct contours between the writ jurisdiction under Article 226 and the supervisory superintendence under Article 227.',
    framework: 'Judicial Review versus Supervisory Superintendence',
    proceduralSteps: [
      'Article 226: Enforcement of Part III Rights and "Any Other Purpose"',
      'Article 227: Power of Superintendence over all Courts and Subordinate Tribunals',
      'Limits of Supervisory Correction: Patent Illegality vs. Re-appreciation of Evidence',
      'Non-convertibility into an Ordinary Appellate Forum'
    ],
    statutoryReference: 'Constitution of India (Part V & VI)',
    status: 'PUBLISHED'
  },
  {
    id: 'rajasthan-revenue-proceedings',
    category: 'REVENUE LAW',
    title: 'Overview of Revenue Proceedings in Rajasthan',
    readingTime: '6 min procedural overview',
    summary: 'The statutory hierarchy and procedural progression of agricultural and land tenure disputes across Rajasthan revenue authorities.',
    framework: 'Hierarchy: Tehsildar → SDO → Revenue Appellate Authority → Board of Revenue',
    proceduralSteps: [
      'Filing of Khatedari or Partition Suits before the Sub-Divisional Officer (SDO)',
      'Interlocutory Applications for Temporary Injunctions on Possession',
      'First Appeals before the Revenue Appellate Authority (RAA)',
      'Revisionary and Second Appellate Jurisdiction before the Board of Revenue, Ajmer',
      'Writ Review before the High Court under Article 227 for Perversity'
    ],
    statutoryReference: 'Rajasthan Tenancy Act, 1955 & Rajasthan Land Revenue Act, 1956',
    status: 'PUBLISHED'
  },
  {
    id: 'civil-proceeding-stages',
    category: 'CIVIL PROCEDURE',
    title: 'Basic Stages of a Civil Proceeding under the Code',
    readingTime: '5 min procedural overview',
    summary: 'A structured roadmap outlining the journey of an original civil suit from institution of plaint to execution of final decree.',
    framework: 'Adjudicatory Progression under CPC, 1908',
    proceduralSteps: [
      'Institution of Suit: Presentation of Plaint with Statement of Valuation',
      'Service of Summons to Defendants and Filing of Written Statement',
      'Framing of Issues of Fact and Law by the Court (Order XIV)',
      'Plaintiff & Defendant Evidence: Examination-in-Chief & Cross-Examination',
      'Final Arguments, Pronouncement of Judgment, and Execution of Decree'
    ],
    statutoryReference: 'Code of Civil Procedure, 1908 (Act No. 5 of 1908)',
    status: 'PUBLISHED'
  }
]
