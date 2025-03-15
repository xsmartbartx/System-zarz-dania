import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'

const app = express()

await connectDB()

app.use(cors())

app.get('/', (req, res)=> res.send("API Pracuje"))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Serwer pracuje na porcie ${PORT}`)
})