import mongoose  from "mongoose";

const connectDB =async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL! + "/test");

        console.log(`test-db connected: ${conn.connection.host}`);   
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export { connectDB };