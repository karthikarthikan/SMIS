import express from "express";
import admitCardController from "../controllers/admitCardController";

const router = express.Router();

router.get("/", admitCardController.getAllAdmitCards);
router.post("/", admitCardController.addAdmitCard);
router.get("/:id", admitCardController.getAdmitCard);
router.patch("/:id", admitCardController.updateAdmitCard);
router.delete("/:id", admitCardController.deleteAdmitCard);

export default router;
