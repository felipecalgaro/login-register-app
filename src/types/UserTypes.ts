export interface UserProps {
    name: string
    password: string
    email: string
}

export type ReturnedUserFromDatabase = Promise<UserProps | null>