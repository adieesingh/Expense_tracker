import express from 'express';
import { transcationParse } from '../validation/validation.js';
import { Transacation } from '../db/db.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
export const userTranscation = express.Router();
userTranscation.post('/transcation', authMiddleware, async (req, res) => {
    try {
        const usertranscationParse = transcationParse.safeParse(req.body);
        if (!usertranscationParse.success) {
            return res.status(411).json({
                errors: `Input is invalid ${usertranscationParse.error}`
            });
        }
        const response = await Transacation.create({
            //@ts-ignore
            userId: req.userId,
            amount: usertranscationParse.data.amount,
            category: usertranscationParse.data.category,
            description: usertranscationParse.data.description,
            type: usertranscationParse.data.type,
            date: usertranscationParse.data.date
        });
        if (!response) {
            return res.status(411).json({
                errors: "Data not inserted"
            });
        }
        if (response) {
            return res.status(200).json({
                message: "Sucessfully added"
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            errors: `Interal Server ${error}`
        });
    }
});
//# sourceMappingURL=userTranscationModel.js.map