import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    chapterId: { type: String, required: true },
    chapterOrder: { type: Number, required: true },
    chapterTitle: { type: String, required: true },
    chapterContent: [lectureSchema]
}, {_id: false});

const courseSchema = new mongoose.Schema({
    courseTitle: { type: String, required: true},
    courseDescription: { type: String, required: true},
    courseThumnail: { type: String },
    coursePrice: { type: Number, required: true },
    isPublished: { type: Boolean, default: true },
    discount: { type: Number, required: true, min: 0, max: 100 },
    courseContent: [],
    courseRatings:[
        { userId: { type: String }, rating: { type: Number, min: 1, max: 5 }}
    ],
    educator: { type: String, ref: 'User', required: true },
    enrolledStudents: [
        {type: String, ref: 'User' }
    ],
}, {timestamps: true, minimize: fasle})