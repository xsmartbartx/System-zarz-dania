import express from 'express'
import { getUserData } from '../controllers/UserController'

const userRouter = express.Router()

userRouter.get('/data', getUserData)
userRouter.get('enrolled-courses', userEnrolled)