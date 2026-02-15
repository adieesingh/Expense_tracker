import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authMiddleware = (req, res, next) => {
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
                errors: "Token not get",
            });
        }
        const decode = jwt.verify(authHeader, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(411).json({
                errors: "Cant verify the token",
            });
        }
        if (decode) {
            //@ts-ignore
            req.userId = decode.id;
            next();
        }
    }
    catch (error) {
        return res.status(500).json({
            errors: "Internal Server error",
        });
    }
};
//# sourceMappingURL=authMiddleware.js.map