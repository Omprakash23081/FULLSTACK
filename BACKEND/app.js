import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ApiError, { handleError } from "./utils/ApiError.js";

const app = express();

// CORS Configuration
app.use(
  cors({
    //it will allow which will access your backend
    origin: [
      "https://hellowduniya.netlify.app", // this is frontend url
      "http://localhost:5174",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(handleError);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Import routers
import userRouter from "./router/user.rout.js";
app.use("/api/users", userRouter); ///api/users is prefix

export default app;
