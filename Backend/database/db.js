import mongoose from "mongoose"
import dotenv from 'dotenv'; 
dotenv.config();

const connectToDataBase = async ()=>{
    try {
        const connection = await mongoose.connect(
            process.env.MONGOOSE_CONNECTION_STRING)
        if(connection){
            console.log("connected to DataBase")
        }
    } catch (error) {
        console.log("error in connectToDatabase", error)
        throw error
    }
}

export default connectToDataBase