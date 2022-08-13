import { PrismaClient } from "@prisma/client";
import { ReturnedUserFromDatabase, UserProps } from "../../src/types/UserTypes";
import { User } from "../entities/User";

export class UpdateUserPasswordUseCase extends User {
    constructor({ name, email, password }: UserProps) {
        super(name, email, password)
    }

    async update(newPassword: string): ReturnedUserFromDatabase {
        try {
            const prisma = new PrismaClient()

            const user = await prisma.user.update({
                where: {
                    email: this.email
                },
                data: {
                    password: newPassword
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