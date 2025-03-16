import mongoose from "mongoose";

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
})