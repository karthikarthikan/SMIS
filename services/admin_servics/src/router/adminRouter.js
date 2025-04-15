import express from "express";
import adminController from "../controllers/adminController";

const router = express.Router();

router.get("/", adminController.getAllAdmins);
router.post("/", adminController.addAdmin);
router.get("/:id", adminController.getAdmin);
router.patch("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);

export default router;
