import { PrismaClient } from "@prisma/client";
import { UserProps } from "../../src/types/UserProps";
import { User } from "../entities/User";

export class UpdateUserPasswordUseCase extends User {
    constructor({ name, email, password }: UserProps) {
        super(name, email, password)
    }

    async update(newPassword: string): Promise<UserProps | null> {
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
    }
}