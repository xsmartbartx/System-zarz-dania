import { Message } from "svix/dist/api/message"
import Course from "../models/Course.js";
import Stripe from "stripe";
import { Purchase } from "../models/Purchase.js";
import User from "../models/User.js";

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

export const purchaseCourse = async (req, res)=>{
    try{
        const { courseId } = req.body
        const { origin } = req.headers
        const userId = req.auth.userId
        const userData = await User.findById(userId)
        const courseData = await Course.findById(courseId)

        if(!userData || !courseData){
            return res.json({ success: false, message: 'Dane nie znalezione'})
        }

        const purchaseData = {
            courseId: courseData._id,
            userId,
            amount: (courseData.coursePrice - courseData.discount *
             courseData.coursePrice / 100).toFixed(2),
        }

        const newPurchase = await Purchase.create(purchaseData)

        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

        const currency = process.env.CURRENCY.toLowerCase()
    } catch (error) {

    }
}