import { Router } from "express";

const router = Router();

// Health Check Route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default router;
