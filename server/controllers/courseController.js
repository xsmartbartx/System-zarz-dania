import Course from "../models/Course.js";

export const getAllCourse = async (req, res)=>{
    try {
        const courses = await Course.find({isPublished: true}).select
        (['-courseContent', '-enrolledStudents']).populate({path: 'educator'})
    } catch (error) {
        
    }
} 