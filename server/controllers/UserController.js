import { Message } from "svix/dist/api/message"
import User from "../models/User.js"

export const getUserData = async (req, res)=>{
    try {
        const userId = req.auth.userId
        const User = await User.findById(userId)

        if(!user){
            return res.json({ success: false, message: 'Użytkownik nie znaleziony'})
        }

        req.json({ success: true, user })
    } catch (error) {
        req.json({ success: false, message: error.message })
    }
}

export const userEnrolledCourses = async (req, res)=>{
    try {
        const userId = req.auth.userId
        const userData = await User.findById(userId).populate('enrolledCourses')

        res.json({success: true, enrolledCourses: userData.enrolledCourses})
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}