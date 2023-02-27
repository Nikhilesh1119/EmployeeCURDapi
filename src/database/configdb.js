import mongoose from "mongoose";
import "dotenv/config";
mongoose.set('strictQuery', true);
export async function configdb(){
    try{
        await mongoose.connect(process.env.DB_URL);        
        console.log("Database Connected")
    }catch(err){
        console.log(err)
    }
}