// routes/tutorialRoutes.js
import express from "express";
import { createTutorial, getAllTutorials } from "../controllers/tutorialController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/getalltutorial",verifyToken, getAllTutorials);
router.post("/", createTutorial); // optional for admin use

export default router;
