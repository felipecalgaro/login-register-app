import express from 'express'
import { router as signInRouter } from './routes/signIn'
import { router as registerRouter } from './routes/register'

const app = express()

app.use(express.json())
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', 'false');
	next();
});

app.use('/', signInRouter)
app.use('/register', registerRouter)

app.listen(process.env.PORT || 3003, () => {
	console.log('server up')
})