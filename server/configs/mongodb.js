import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console.log(`Baza połączona`))
}