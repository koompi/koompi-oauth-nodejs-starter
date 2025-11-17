import { Router } from "express";
import { getProfile } from "../controllers/userController";
import { authenticate } from "../middleware/auth";

const router = Router();

// Get authenticated user profile
router.get("/me", authenticate, getProfile);

export default router;
