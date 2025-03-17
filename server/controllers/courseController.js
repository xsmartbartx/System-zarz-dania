import Course from "../models/Course.js";

export const getAllCourse = async (req, res)=>{
    try {
        const courses = await Course.find({isPublished: true}).select
        (['-courseContent', '-enrolledStudents']).populate({path: 'educator'})

        res.json({ success: true, courses })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
} 

export const getCourseId = async (req, res)=>{
    const {id} = req.params

    try {
        const courseData = await Course.findById(id).populate({path: 'educator'})

        courseData.courseContent.forEach(chapter => {
            chapter
        })
    } catch (error) {

    }
}