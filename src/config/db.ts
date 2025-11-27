import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_CONNECTION_URL;

if (!mongoURI) {
    throw new Error("MONGODB_CONNECTION_URL is not defined in environment variables");
}

const connectMongoDB = async () : Promise<void> => {

    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");

        mongoose.connection.on("disconnected", () => {
            console.log("MongoDB disconnected. Attempting to reconnect...");
        })
    } catch (error){
        console.error('Error connecting to MongoDB:', (error as Error).message);
    }
}

export default connectMongoDB;