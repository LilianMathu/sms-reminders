import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

// Routes
router.post("/api/auth/user", userController.register);

export default router;
