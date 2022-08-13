import { PrismaClient } from "@prisma/client";
import { ReturnedUserFromDatabase } from "../../src/types/UserTypes";
import { UserProps } from "../../src/types/UserTypes";
import { User } from "../entities/User";

export class CheckUserCredentialsUseCase extends User {
    constructor({ name, email, password }: UserProps) {
        super(name, email, password)
    }

    async check(): ReturnedUserFromDatabase {
        try {
            const prisma = new PrismaClient()
            const user = await prisma.user.findFirst({
                where: {
                    name: this.name
                }
            })
            console.log(user);
            return user
        } catch (err) {
            console.log(err);
            return null
        }
    }
}