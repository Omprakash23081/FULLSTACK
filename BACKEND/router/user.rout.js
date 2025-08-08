import { Router } from "express";
import Login from "../controller/login.controller.js";
const rout = Router();
rout.post("/login", Login); // <-- Correct usage
export default rout;
