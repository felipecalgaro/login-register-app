import express from "express";
import { CheckUserCredentialsUseCase } from "../../useCases/CheckUserCredentialsUseCase";

export const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('<h1>Hello</h1>')
})

router.post('/', (req, res) => {
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
    console.log(error)
  }
})