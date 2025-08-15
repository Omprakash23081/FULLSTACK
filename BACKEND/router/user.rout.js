import { Router } from "express";
import Login from "../controller/login.controller.js";
import upload from "../middleware/multer.middleware.js";
const rout = Router();
//prefix/login (in short this is original rout)it will convert url/api/users/login
rout.route("/login").post(
  upload.fields([
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
