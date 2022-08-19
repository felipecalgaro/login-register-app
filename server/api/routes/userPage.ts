import express from "express";

export const router = express.Router()

router.get('/:id', (req, res) => {
  res.sendStatus(200)
})