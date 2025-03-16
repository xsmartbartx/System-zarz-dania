import express from 'express'
import {updateRoleToEducator} from '../controllers/educatorController.js'

const educatorController = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator)

export default educatorRouter;