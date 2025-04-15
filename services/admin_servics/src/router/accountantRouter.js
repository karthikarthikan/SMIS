import express from "express";
import accountantController from "../controllers/accountantController";

const router = express.Router();

router.get("/", accountantController.getAllAccountants);
router.post("/", accountantController.addAccountant);
router.get("/:id", accountantController.getAccountant);
router.patch("/:id", accountantController.updateAccountant);
router.delete("/:id", accountantController.deleteAccountant);

export default router;
