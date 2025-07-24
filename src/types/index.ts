export interface CurrentInfo {
  exchange_date: string | null
  company_name: string
  current_department: string
  current_title: string
}

export interface PastBusinessCard {
  exchange_date: string
  company_name: string
  department_at_time: string
  title_at_time: string
}

export interface InterviewRecord {
  id: number
  date: string
  title: string
  interviewer: string
  summary: string
  isLatest: boolean
}

export interface Activity {
  category: "ニュース" | "書籍" | "論文" | "イベント"
  date: string
  title: string
  details: string
}

export interface ContactStaff {
  id: number
  name: string
  department: string
}

export interface RelatedPerson {
  id: number
  name: string
  company: string
}

export interface TalentProfile {
  name: string
  skillTags: string[]
  currentInfo: CurrentInfo
  pastBusinessCards: PastBusinessCard[]
  interviewRecords: InterviewRecord[]
  activities: Activity[]
  contactStaff: ContactStaff[]
  relatedPeople: RelatedPerson[]
  contactInfo: {
    email: string
    phone: string
  }
}