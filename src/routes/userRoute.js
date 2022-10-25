import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

// Routes
router.post("/api/auth/register", userController.register);
router.get("/api/auth/users", userController.listUsers);
router.get("/api/auth/user/:id", userController.listOneUser);
router.delete("/api/auth/user/:id", userController.deleteUser);
router.patch("/api/auth/user/:id", userController.updateUser);

export default router;
