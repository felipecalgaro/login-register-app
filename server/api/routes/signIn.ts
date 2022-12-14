import express from "express";
import { ReturnedUserFromDatabase } from "../../../src/types/user";
import { CheckUserCredentialsUseCase } from "../../useCases/CheckUserCredentialsUseCase";

export const router = express.Router()

let user: ReturnedUserFromDatabase

router.post('/', (req, res) => {
  try {
    const name = req.body.name
    const password = req.body.password

    new CheckUserCredentialsUseCase({ name, email: undefined, password })
      .check()
      .then(returnedUser => {
        res.sendStatus(200) // res.status(200).send('OK')
        user = returnedUser
      })
  } catch (error) {
    console.log(error)
  }
})

router.get('/', (req, res) => {
  if (user) {
    res.status(201).send(JSON.stringify({ ...user, isNew: false }))
  } else {
    res.status(404).send(JSON.stringify(null))
  }
})