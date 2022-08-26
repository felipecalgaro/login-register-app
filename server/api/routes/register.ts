import express from "express";
import { ReturnedUserFromDatabase } from "../../../src/types/user";
import { CreateUserUseCase } from "../../useCases/CreateUserUseCase";

export const router = express.Router()

let user: ReturnedUserFromDatabase

router.post('/', (req, res) => {
  try {
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email

    new CreateUserUseCase({ name, email, password })
      .create()
      .then(returnedUser => {
        res.sendStatus(200)
        user = returnedUser
      })
  } catch (error) {
    console.log(error)
  }
})

router.get('/', (req, res) => {
  if (user) {
    res.status(201).send(JSON.stringify({ ...user, isNew: true }))
  } else {
    res.status(404).send(JSON.stringify(null))
  }
})