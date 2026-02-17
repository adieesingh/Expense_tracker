import express from "express";
import { transcationParse } from "../validation/validation.js";
import { Transacation } from "../db/db.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import mongoose from "mongoose";

export const userTranscation = express.Router();
// Added Transcation
userTranscation.post("/transcation", authMiddleware, async (req, res) => {
  try {
    const usertranscationParse = transcationParse.safeParse(req.body);
    const errors: Record<string, string> = {};
    if (!usertranscationParse.success) {
      usertranscationParse.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field == "string") {
          errors[field] = issue.message;
        }
      });
      return res.status(411).json({
        errors,
        success: false,
      });
    }
    const response = await Transacation.create({
      //@ts-ignore
      userId: req.userId,
      amount: usertranscationParse.data.amount,
      category: usertranscationParse.data.category,
      description: usertranscationParse.data.description,
      type: usertranscationParse.data.type,
      date: usertranscationParse.data.date,
    });
    if (!response) {
      return res.status(411).json({
        errors: "Data not inserted",
      });
    }
    if (response) {
      return res.status(200).json({
        message: "Sucessfully added",
      });
    }
  } catch (error) {
    return res.status(500).json({
      errors: `Interal Server ${error}`,
    });
  }
});

//getting the transcation user

userTranscation.get("/user", authMiddleware, async (req, res) => {
  try {
    //@ts-ignore
    const response = await Transacation.findById({_id:req.userId});
    if (!response) {
      return res.status(411).json({
        errors: `Can't get transcation`,
      });
    }
    if (response) {
      console.log(response);
      return res.status(200).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      errors: `Internal Server error ${error}`,
    });
  }
});

//summaryy total expense or total balanace

userTranscation.get("/summary", authMiddleware, async (req, res) => {
  const summary = await Transacation.aggregate([
    //@ts-ignore
    { $match: { userId: new mongoose.Types.ObjectId(req.userId) } },
    {
      $group: {
        _id: {
          month: { $month: "$date" },
          type: "$type",
        },
        total: { $sum: "$amount" },
      },
    },
    {
      $sort: { "_id.month": 1 },
    },
  ]);
  if (!summary) {
    return res.status(411).json({
      errors: "Summary Not Found",
    });
  }
  const result: any = {};
  const monthsName = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  summary.forEach((item) => {
    const month = item._id.month;
    const type = item._id.type;
    if (!result[month]) {
      result[month] = {
        monthName: monthsName[month],
        income: 0,
        expense: 0,
        balance: 0,
      };
    }
    if (type == "income") {
      result[month].income = item.total;
    }
    if (type === "expense") {
      result[month].expense = item.total;
    }
  });
  Object.values(result).forEach((item: any) => {
    item.balance = item.income - item.expense;
  });
  console.log(result);
  const finalData = Object.values(result);
  return res.status(200).json(finalData);
});

//sort by expense
userTranscation.get("/expense", authMiddleware, async (req, res) => {
  try {
    //@ts-ignore
    const summary = await Transacation.aggregate([
      {
        $match: {
          //@ts-ignore
          userId: new mongoose.Types.ObjectId(req.userId),
          type: "expense",
        },
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    const finalData = summary.map((item) => ({
      name: item._id,
      value: item.total,
    }));
    console.log(finalData);
    return res.status(200).json(finalData);
  } catch (error) {
    return res.status(411).json({ error: "Server error" });
  }
});

//delete

userTranscation.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const transcationId = req.params.id;
    //@ts-ignore
    const deleted = await Transacation.findOneAndDelete({
      _id: transcationId,
      //@ts-ignore
      userId: req.userId,
    });
    if (!deleted) {
      return res.status(404).json({ error: "Not deleetd " });
    }

    return res.status(200).json({
      message: "Transcation deleted suucesfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: `Something went wrong ${error}`,
    });
  }
});
