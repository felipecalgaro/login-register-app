import { PrismaClient } from "@prisma/client";
import { ReturnedUserFromDatabase } from "../../src/types/User";
import { CheckUserProps } from "../../src/types/User";
import { User } from "../entities/User";
import prisma from '../lib/prisma'

export class CheckUserCredentialsUseCase extends User {
	constructor({ name, email, password }: CheckUserProps) {
		super(name, email, password)
	}

	async check(): Promise<ReturnedUserFromDatabase> {
		await prisma.$connect()
		try {
			const user = await prisma.user.findFirst({
				where: {
					AND: [{ name: this.name }, { password: this.password }]
				}
			})
			await prisma.$disconnect()
			return user
		} catch (err) {
			console.log(err);
			await prisma.$disconnect()
			return null
		}
	}
}