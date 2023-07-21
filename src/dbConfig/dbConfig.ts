import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on('connected',()=>{
        console.log('MongoDB connected');
        
    })
    connection.on('error',()=>{
        console.log("MongoDB connection error!");
        process.exit()
    })
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
