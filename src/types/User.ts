import { Prisma } from "@prisma/client"

export interface CreateUserProps {
    name: string
    password: string
    email: string
}

export interface CheckUserProps {
    name: string
    password: string
    email: string | undefined
}

export interface SignInProps {
    setUser: (arg: ReturnedUserFromDatabase) => void
    user: ReturnedUserFromDatabase
}

export type ReturnedUserFromDatabase = Prisma.UserCreateInput | void | null

export interface UserPageProps {
    user: ReturnedUserFromDatabase
}