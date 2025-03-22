import { Message } from "svix/dist/api/message"
import Course from "../models/Course.js";
import Stripe from "stripe";
import { Purchase } from "../models/Purchase.js";
import User from "../models/User.js";
import { CourseProgress } from "../models/CourseProgress.js";

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
        const line_items =[{
            price_data:{
                currency,
                product_data: {
                    name: courseData.courseTitle
                },
                unit_amount: Math.floor(newPurchase.amount) * 100
            },
            quantity: 1
        }]

        const session = await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/loading/my-enrollments`,
            cancel_url: `${origin}/`,
            line_items: line_items,
            mode: 'payment',
            metadata: {
                purchaseId: newPurchase._id.toString()
            }
        })

        res.json({success: true, session_url: session.url})

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const updateUserCouirseProgress = async (req, res)=>{
    try {
        const UserId = req.auth.userId
        const { courseId, lectureId } = req.body
        const progressData = await CourseProgress.findOne({userId, courseId })

        if(progressData){
            if(progressData.lectureCompleted.includes(lectureId)){
                return res.json({success: true, messag: 'Wykład już skończony'})
            }

            progressData.lectureCompleted.push(lectureId)
            await progressData.save()
        } else {
            await CourseProgress.create({
                userId,
                courseId,
                lectureCompleted: [lectureId]
            })
        }

        res.json({success:true, message: 'Postęp zaaktualizowany'})

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const getUserCourseProgress = async (req, res) =>{
    try {
        const userId = req.auth.userId
        const { courseId } = req.body
        const progressData = await CourseProgress.findOne({userId, courseId})
        res.json({success: true, progressData})
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const addUserRating = async (req, res)=>{
    const userId = req.auth.userId;
    const { courseId, rating } = req.body;

    if(!course || !userId || !rating || rating < 1 || rating > 5){
        return res.json({ success: false, message: 'Niepoprawne Dane' });
    }

    try {
        const course = await course.findById(courseId);

        if(!course) {
            
        }

    } catch (error) {
        
    }
}