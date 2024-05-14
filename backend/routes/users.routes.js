import express from "express";
import { getAllUser } from "../controllers/users.controller.js";
import protectRoute from "../middleware/protectRoute.js";

//router object
const router = express.Router();

//routes
router.get("/", protectRoute, getAllUser);

export default router;
