import { Prisma } from '@prisma/client';
import express from 'express'
import { CheckUserProps } from '../../src/types/User';
import { User } from '../entities/User';
import { CheckUserCredentialsUseCase } from '../useCases/CheckUserCredentialsUseCase'

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'false');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello</h1>')
})

app.post('/', (req, res) => {
    try {
        const name = req.body.name
        const password = req.body.password

        const user = new CheckUserCredentialsUseCase({ name, email: undefined, password })
            .check()
            .then((user) => {
                res.status(201).send(`user ${user?.name} logged in\nId: ${user?.id}`)
                console.log(user);
            })
    } catch (error) {

    }
})

app.listen(3003, () => {
    console.log('server up on port 3003')
})