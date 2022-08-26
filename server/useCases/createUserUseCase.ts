import { ReturnedUserFromDatabase, CreateUserProps } from '../../src/types/user'
import { User } from "../entities/User";
import prisma from "../lib/prisma";

export class CreateUserUseCase extends User {
    constructor({ name, email, password }: CreateUserProps) {
        super(name, email, password)
    }

    async create(): Promise<ReturnedUserFromDatabase> {
        try {
            const user = await prisma.user.create({
                data: {
                    name: this.name as string,
                    email: this.email as string,
                    password: this.password as string
                }
            })
            return user
        } catch (err) {
            console.log(err)
            return null
        }
    }
}
