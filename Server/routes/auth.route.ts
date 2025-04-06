import express from "express";
import { AuthController } from "../controllers/auth.controller";

const router = express.Router();

// need jwt verify
router.get("/verify", AuthController.verify);
router.get("/createAuth", AuthController.createAuth);
router.get("/authStatus", AuthController.authStatus);


export default router;
