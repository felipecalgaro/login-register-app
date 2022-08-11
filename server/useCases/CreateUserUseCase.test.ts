import { expect, it, describe } from 'vitest'
import { CreateUserUseCase } from './CreateUserUseCase'

const userData = { name: 'Felipe', email: 'felipe@gmail.com', password: '123' }
const createdUser = new CreateUserUseCase(userData)

describe('create user', () => {
    it('should be instance of CreateUserUseCase', () => {
        expect(createdUser).toBeInstanceOf(CreateUserUseCase)
    })

    it('should return created user', () => {
        createdUser.create().then(result => {
            expect(result).toBe(userData)
        })

    })
})