export interface UserType {
  id: string
  first_name: string
  last_name: string
  email: string
  password?: string
  created_at?: string
  updated_at?: string
}
export interface CandidateType {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number?: string
  comment: string
  call_time?: string
  linkedin_profile_url?: string
  github_profile_url?: string
  user_id: string
  created_at?: string
  updated_at?: string
}
