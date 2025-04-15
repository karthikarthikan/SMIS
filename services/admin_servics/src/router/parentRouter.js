import express from "express";
import parentController from "../controllers/parentController";

const router = express.Router();

router.get("/", parentController.getAllParents);
router.post("/", parentController.addParent);
router.get("/:id", parentController.getParent);
router.patch("/:id", parentController.updateParent);
router.delete("/:id", parentController.deleteParent);

export default router;
