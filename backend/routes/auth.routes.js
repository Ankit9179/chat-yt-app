import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/auth.controller.js";

//router object
const router = express.Router();

//routes
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
