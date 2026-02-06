import mongoose from "mongoose";
import dotenv from "dotenv";
import { lowercase } from "zod";
dotenv.config();
console.log(process.env.MONGO_URL);
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
}, { timestamps: true });
const transactionModel = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    amount: { type: Number, required: true },
    category: { type: String, enum: ["Food", "Rent", "Salary"], required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }
});
export const Transacation = mongoose.model("Transcation", transactionModel);
export const User = mongoose.model("User", userSchema);
//# sourceMappingURL=db.js.map