import { clerkClient } from '@clerk/express'
import Course from '../models/Course'

export const updateRoleToEducator = async (req, res)=> {
    try {
        const userId = requestAnimationFrame.auth.userId

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })

        res.json({ success: true, message: 'Możesz kuż opublikować kurs' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const addCourse = async (req, res)=>{
    try {
        const { courseData } = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if(!imageFile){
            return res.json({ success: false, message: 'Plik nie załączony'})
        }

        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumnail = imageUpload.secure_url
        await newCourse.save()

        res.json({ success: true, message: 'Kurs dodany' })

    } catch (error) {

    }
}

export const getEducatorCourses = async (req, res)=>{
    try {
        const educator = req.auth.userId
        const courses = await Course.find({educator})
        res.json({ success: true, courses })
    } catch (error){

    }
}