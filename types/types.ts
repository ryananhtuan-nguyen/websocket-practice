// types/types.ts
export interface User {
  id: number
  first_name: string
  last_name: string
  profile_picture: string
}

export interface Action {
  title: string
  url: string
}

export interface Notification {
  id: string
  user: User
  event: string
  action: Action | null
  message: string | null
  media: string | null
  created_at: string
}
