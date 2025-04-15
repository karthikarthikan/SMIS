import express from "express";
import offlineExamController from "../controllers/offlineExamController";

const router = express.Router();

router.get("/", offlineExamController.getAllOfflineExams);
router.post("/", offlineExamController.addOfflineExam);
router.get("/:id", offlineExamController.getOfflineExam);
router.patch("/:id", offlineExamController.updateOfflineExam);
router.delete("/:id", offlineExamController.deleteOfflineExam);

export default router;
