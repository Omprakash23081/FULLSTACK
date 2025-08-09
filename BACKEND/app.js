import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "https://hellowduniya.netlify.app",
      "http://localhost:5174",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Test route
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// Import routers
import userRouter from "./router/user.rout.js";
app.use("/api/users", userRouter);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
