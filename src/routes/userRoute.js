import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

// Routes
router.post("/api/auth/register", userController.register);
router.get("/api/auth/register", userController.listUsers);
router.get("/api/auth/register/:id", userController.listOneUser);

export default router;
