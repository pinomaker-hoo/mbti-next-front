export interface MbtiData {
  mbti: string
  text: string
  name: string
  guestMbti: string
  modifiedDate?: Date
  createdDate?: Date
  idx?: number
}

export interface UserInfo {
  name: string
  mbti: string
  id: string
  password: string
}
