import { PrismaClient } from "@prisma/client";
import { ReturnedUserFromDatabase } from "../../src/types/User";
import { CheckUserProps } from "../../src/types/User";
import { User } from "../entities/User";

export class CheckUserCredentialsUseCase extends User {
	constructor({ name, email, password }: CheckUserProps) {
		super(name, email, password)
	}

	async check(): ReturnedUserFromDatabase {
		try {
			const prisma = new PrismaClient()
			const user = await prisma.user.findFirst({
				where: {
					AND: [{ name: this.name }, { password: this.password }]
				}
			})
			return user
		} catch (err) {
			console.log(err);
			return null
		}
	}
}