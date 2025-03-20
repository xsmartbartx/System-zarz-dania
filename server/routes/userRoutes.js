import express from 'express'
import { getUserData, userEnrolledCourses } from '../controllers/UserController.js'

const userRouter = express.Router()

userRouter.get('/data', geUserData)
userRouter.get('enrolled-courses', userEnrolledCourses)

export default userRouter;