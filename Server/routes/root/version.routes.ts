import { Router } from "express";

const router = Router();

// Versioning Route
router.get("/version", (req, res) => {
  res.status(200).json({ version: "1.0.0" });
});

export default router;
