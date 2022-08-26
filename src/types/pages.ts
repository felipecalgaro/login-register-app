import { ReturnedUserFromAPI } from "./user"

export interface SignInProps {
  setUser: (arg: ReturnedUserFromAPI) => void
}

export interface RegisterProps {
  setUser: (arg: ReturnedUserFromAPI) => void
}

export interface UserPageProps {
  user: ReturnedUserFromAPI | null
}
