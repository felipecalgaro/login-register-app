import { describe, expect, it } from "vitest";
import { CheckUserCredentialsUseCase } from "./CheckUserCredentialsUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userData = { name: 'Felipe', email: 'felipe@gmail.com', password: '123' }
const createdUser = new CreateUserUseCase(userData).create().then(result => result)
const requestedUser = new CheckUserCredentialsUseCase(userData)

describe('check user credentials', () => {
    it('should be instance of CheckUserCredentialsUseCase', () => {
        expect(requestedUser).toBeInstanceOf(CheckUserCredentialsUseCase)
    })

    it('should return requested user', () => {
        requestedUser.check().then(result => {
            expect(result).toBe(userData)
        })
    })

    it('should return a single user', () => {
        requestedUser.check().then(result => {
            expect(result).toBeTypeOf('object')
        })
    })
})