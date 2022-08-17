import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello</h1>')
})

app.listen(3003, () => {
    console.log('server up on port 3003')
})