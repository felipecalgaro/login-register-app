import { PrismaClient } from "@prisma/client";
import { CreateUserProps } from '../../src/types/CreateUserProps'

export function createUser({ name, password, email }: CreateUserProps) {
    const prisma = new PrismaClient()

    async function main() {
        const user = await prisma.user.create({
            data: {
                name: name,
                password: password,
                email: email
            }
        })
        console.log(user);
    }
    main()
}
createUser({ name: 'name_test', password: 'pw_test', email: 'email_test' })