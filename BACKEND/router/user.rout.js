import { Router } from "express";
import Login from "../controller/login.controller.js";
const rout = Router();
rout.post("/login", Login); //prefix/login (in short this is original rout)it will conver url/api/users/login
export default rout;
