import { expect, it, describe } from 'vitest'
import { CreateUserUseCase } from './CreateUserUseCase'
import { UpdateUserPasswordUseCase } from './UpdateUserPasswordUseCase'

const userData = { name: 'Felipe', email: 'felipe@gmail.com', password: '123' }
const createdUser = new CreateUserUseCase(userData).create().then(result => result)

describe('update password', () => {
    it('should return user requested', () => {
        new UpdateUserPasswordUseCase(userData).update('123456').then(result => {
            expect(result).toBe(() => {
                userData.password = '123456'
                return userData
            })
        })
    })
})