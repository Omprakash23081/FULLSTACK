import { Router } from "express";
import Login from "../controller/login.controller.js";
import Register from "../controller/rejester.controller.js";
import upload from "../middleware/multer.middleware.js";
const rout = Router();
//prefix/login (in short this is original rout)it will convert url/api/users/login
rout.route("/login").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  Login
);
rout.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  Register
);
export default rout;
