import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console.log(`Baza połączona`))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB