import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educator.Routes.js'
import { clerkMiddleware } from '@clerk/express'

const app = express()

await connectDB()

app.use(cors())
app.use(clerkMiddleware())

app.get('/', (req, res)=> res.send("API Pracuje"))
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, ()=>{
    console.log(`Serwer pracuje na porcie ${PORT}`)
})

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use.`);
        process.exit(1);
    } else {
        throw error;
    }
});