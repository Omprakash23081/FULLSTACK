import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: ["https://hellowduniya.netlify.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Handle OPTIONS requests
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import rout from "./router/user.rout.js";

app.use("/api/users", rout);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

export default app;
