import express from "express";
import { UserController } from "../controllers/user.controllers";

const router = express.Router();

// need jwt verify

router.post("/create", UserController.createUser);
router.get("/getAllUsers", UserController.getUsers);
router.get("/:lightning_user_id", UserController.getUserByLightningId);
router.delete("/", UserController.deleteUserById);

export default router;
