import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: "https://hellowduniya.netlify.app/",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("../public"));

import rout from "./router/user.rout.js";

app.use("/api/users", rout);
export default app;
