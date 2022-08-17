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

export type ReturnedUserFromDatabase = Promise<null | Prisma.UserCreateInput>