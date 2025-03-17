import express from 'express'
import {updateRoleToEducator} from '../controllers/educatorController.js'
import upload from '../configs/multer.js'
import { protectEducator} from '../middlewares/authMidlleware.js'

const educatorController = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/add-course', upload.single('image'), protectEducator)

export default educatorRouter;