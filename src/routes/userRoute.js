import { Router } from "express";
import userController from "../controllers/userController";
import otpController from "../controllers/otpController";

const router = Router();

// Routes
router.post("/api/auth/register", userController.register);
router.get("/api/auth/users", userController.listUsers);
router.get("/api/auth/user/:id", userController.listOneUser);
router.delete("/api/auth/user/:id", userController.deleteUser);
router.patch("/api/auth/user/:id", userController.updateUser);
router.post("/api/auth/verify/:id", otpController.verifyOtp);

export default router;
