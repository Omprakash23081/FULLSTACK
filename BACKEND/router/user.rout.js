import { Router } from "express";
import Login from "../controller/login.controller.js";
import multer from "../middleware/multer.middleware.js";
const rout = Router();
//prefix/login (in short this is original rout)it will convert url/api/users/login
rout.route("/login").post(
  multer.fields([
    {
      name: "profilePicture",
      maxCount: 1,
    },
    {
      name: "resume",
      maxCount: 1,
    },
  ]),
  Login
);
export default rout;
