import express from "express";
import { MessageController } from "../controllers/message.controller";

const router = express.Router();

// need jwt verify

router.post("/create", MessageController.createMessage);
router.get("/getAllMessages/:sender/:receiver", MessageController.getMessages);
router.get("/updatePayment/:sender/:receiver", MessageController.updatePayment);
router.get("/updateWithdrawal/:sender/:receiver", MessageController.updateWithdrawal);
// router.get("/getAllUsers", UserController.getUsers);
// router.get("/:lightning_user_id", UserController.getUserByLightningId);
// router.delete("/", UserController.deleteUserById);

export default router;
