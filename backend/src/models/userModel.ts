import express from "express";
import { signinParse, userParse } from "../validation/validation.js";
import { User } from "../db/db.js";
import bcrypt from "bcrypt";
import jwt, { type JwtPayload } from "jsonwebtoken";

export const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const userParseLoad = userParse.safeParse(req.body);
    if (!userParseLoad.success) {
      const errors: Record<string, string> = {};
      console.log(userParseLoad.error.issues);
      userParseLoad.error.issues.forEach((issue) => {
        const field = issue.path[0];

        console.log(typeof field == "string");
        if (typeof field == "string") {
          errors[field] == issue.message;
          console.log((errors[field] = issue.message));
        }

        return res.status(411).json({
          success: false,
          errors,
        });
      });
      return res.status(411).json({
        error: "Enter a valid input",
      });
    }
    const hasedPassword = await bcrypt.hash(userParseLoad.data.password, 10);
    const userExist = await User.findOne({ email: userParseLoad.data.email });
    console.log(userExist);

    const response = await User.create({
      name: userParseLoad.data.name,
      email: userParseLoad.data.email,
      password: hasedPassword,
    });
    console.log(response);
    if (!response) {
      return res.status(411).json({
        errors: "Something went wrong",
      });
    }
    if (response) {
      return res.status(200).json({
        message: "Signup Succesfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      errors: `Internal ${error}`,
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  try {
    const loginParse = signinParse.safeParse(req.body);

    if (!loginParse.success) {
      const errors:Record<string,string>={};
        loginParse.error.issues.forEach((issue)=>{
          
          const field =issue.path[0];
          if(typeof field =="string"){
            errors[field]=issue.message
          }
        })

      return res.status(411).json({
        errors
      });
    }

    const response = await User.findOne({ email: loginParse.data.email });

    if (!response) {
      return res.status(411).json({
        errors: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      loginParse.data.password,
      response.password,
    );
    if (!isMatch) {
      return res.status(411).json({
        errors: "Password doesnt match",
      });
    }
    const token = jwt.sign(
      { id: response._id, email: loginParse.data.email },
      process.env.JWT_SECRET as string,
    );
    return res.status(200).json({
      message: "Signup Sucessfully",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server error",
      err: `${error}`,
    });
  }
});
