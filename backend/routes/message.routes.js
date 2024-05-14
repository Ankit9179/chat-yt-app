import express from "express";
import { getMessage, sendMessage } from "../controllers/message.conroller.js";
import protectRoute from "../middleware/protectRoute.js";

//router object
const router = express.Router();

//routes
router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);

export default router;
