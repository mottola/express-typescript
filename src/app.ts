import dotenv from 'dotenv'
dotenv.config()
import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

const PORT: string = process.env.PORT || '3000'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Node TypeScript server!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})