import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const headers = req.header("Authorization");
    if (!headers) {
      return res.status(411).json({
        errors: "Not gettig header",
      });
    }
    const authHeader = headers?.startsWith("Bearer")
      ? headers.substring(7)
      : headers;
    if (!authHeader) {
      return res.status(411).json({
        erroe: "Token not get",
      });
    }
    const decode = jwt.verify(authHeader, process.env.JWT_SECRET as string);
    console.log(decode)
    if (!decode) {
      return res.status(411).json({
        error: "Cant verify the token",
      });
    }
    if (decode) {
      
      //@ts-ignore
      req.userId = decode.id;
      
      
      next();
    }
  } catch (error) {
    return res.status(500).json({
      errors: "Internal Server error",
    });
  }
};
