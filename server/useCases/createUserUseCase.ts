import { PrismaClient } from "@prisma/client";
import { UserProps } from '../../src/types/UserProps'
import { User } from "../entities/User";

export class CreateUserUseCase extends User {
    constructor({ name, email, password }: UserProps) {
        super(name, email, password)
    }

    async create(): Promise<UserProps | null> {
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
    }
}
