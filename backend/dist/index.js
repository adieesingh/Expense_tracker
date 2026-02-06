import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './models/userModel.js';
import dotenv from 'dotenv';
import { userTranscation } from './models/userTranscationModel.js';
import cors from 'cors';
const PORT = process.env.PORT;
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', userRouter);
app.use('/api/v1', userTranscation);
mongoose
    .connect(process.env.MONGO_URL || "")
    .then(() => console.log("Mogodb is connected"))
    .catch((err) => console.log(err));
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map