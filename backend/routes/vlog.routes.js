import express from "express";
import {
  createVlogFunction,
  getAllVlogsFunction,
} from "../controllers/vlog.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create-vlog", protectRoute, createVlogFunction);
router.get("/get-all-Vlogs", getAllVlogsFunction);

export default router;
