import mongoose from "mongoose"
import {DATABASE_NAME} from "../constants"

const dbConnect = async () => {
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`DB is connected at: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed!", error);
        // if db connection failed exit teh process
        process.exit(1);
    }
}

export default dbConnect;