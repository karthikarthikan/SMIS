import express from "express";
import teacherController from "../controllers/teacherController";

const router = express.Router();

router.get("/", teacherController.getAllTeachers);
router.post("/", teacherController.addTeacher);
router.get("/:id", teacherController.getTeacher);
router.patch("/:id", teacherController.updateTeacher);
router.delete("/:id", teacherController.deleteTeacher);

export default router;
