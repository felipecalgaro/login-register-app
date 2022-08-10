import { PrismaClient } from "@prisma/client";
import { UserProps } from "../../src/types/UserProps";
import { User } from "../entities/User";

export class CheckUserCredentialsUseCase extends User {
    constructor({ name, email, password }: UserProps) {
        super(name, email, password)
    }

    async check() {
        const prisma = new PrismaClient()
        const user = await prisma.user.findFirst({
            where: {
                name: this.name
            }
        })
        console.log(user);
        return user
    }
}