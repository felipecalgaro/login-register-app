import { ReturnedUserFromDatabase } from "./user"

export interface SignInProps {
  setUser: (arg: ReturnedUserFromDatabase) => void
}

export interface UserPageProps {
  user: ReturnedUserFromDatabase
}