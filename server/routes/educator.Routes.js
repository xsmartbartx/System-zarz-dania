import express from 'express'
import {addCourse, educatorDasboardData, getEducatorCourses, getEnrolledStudentsData, updateRoleToEducator} from '../controllers/educatorController.js'
import upload from '../configs/multer.js'
import { protectEducator} from '../middlewares/authMidlleware.js'

const educatorController = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/add-course', upload.single('image'),
 protectEducator, addCourse)
educatorRouter.get('/corses', protectEducator, getEducatorCourses)
educatorRouter.get('/dashboard', protectEducator, educatorDasboardData)
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData)

export default educatorRouter;