import mongoose from "mongoose";
const { Schema } = mongoose;

const transationSchema = new Schema({
  amount: Number,
  description: String,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now() },
});

export default new mongoose.model("Transation", transationSchema);
