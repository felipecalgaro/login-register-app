import { PrismaClient } from "@prisma/client";
import { ReturnedUserFromDatabase, UserProps } from '../../src/types/UserTypes'
import { User } from "../entities/User";

export class CreateUserUseCase extends User {
    constructor({ name, email, password }: UserProps) {
        super(name, email, password)
    }

    async create(): ReturnedUserFromDatabase {
        try {
            const prisma = new PrismaClient()

            const user = await prisma.user.create({
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            })
            console.log(user);
            return user
        } catch (err) {
            console.log(err)
            return null
        }
    }
}
