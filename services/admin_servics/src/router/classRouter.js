import express from "express";
import classController from "../controllers/classController";

const router = express.Router();

router.get("/", classController.getAllClasses);
router.post("/", classController.addClass);
router.get("/:id", classController.getClass);
router.patch("/:id", classController.updateClass);
router.delete("/:id", classController.deleteClass);

export default router;
