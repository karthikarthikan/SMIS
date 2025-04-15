import express from "express";
import subjectController from "../controllers/subjectController";

const router = express.Router();

router.get("/", subjectController.getAllSubjects);
router.post("/", subjectController.addSubject);
router.get("/:id", subjectController.getSubject);
router.patch("/:id", subjectController.updateSubject);
router.delete("/:id", subjectController.deleteSubject);

export default router;
