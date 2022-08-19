import { Prisma } from "@prisma/client";
import express from "express";
import { ReturnedUserFromDatabase } from "../../../src/types/User";
import { CheckUserCredentialsUseCase } from "../../useCases/CheckUserCredentialsUseCase";

export const router = express.Router()

let user: Prisma.UserCreateInput | void | null

router.post('/', (req, res) => {
  try {
    const name = req.body.name
    const password = req.body.password

    new CheckUserCredentialsUseCase({ name, email: undefined, password })
      .check()
      .then(returnedUser => {
        user = returnedUser
        res.sendStatus(200) // res.status(200).send('OK')
      })
  } catch (error) {
    console.log(error)
  }
})

router.get('/', (req, res) => {
  res.status(201).send(JSON.stringify({ ...user, isNewUser: false }))
})

// redireciona pro id do usuario logado (nao registrado)
// rota q pega esse id e faz um query no db
// envia usuario retornado pro fornt end pra ele mostra

// pq ta dando problema qnd da o handleregister?? (as vezes tem usuario as vezes nao)