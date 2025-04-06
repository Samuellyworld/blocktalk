import { Router } from "express";
import userRoutes from "../user.route";
import healthRoutes from "./health.routes";
import versionRoutes from "./version.routes";
import authRoutes from "../auth.route";
import MessageRoutes from "../message.route";

const router = Router();


router.get("/", (req, res) => {
    res.status(200).json({
      message: "Welcome to the API",
      version: "1.0.0",
      status: "Server is running",
    });
  });


router.use("/health", healthRoutes);
router.use("/version", versionRoutes);
router.use("/user", userRoutes);
router.use("/auth",  authRoutes);
router.use("/message", MessageRoutes);

export default router;
