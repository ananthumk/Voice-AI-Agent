import mongoose from "mongoose"

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)

    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

export default connectDb