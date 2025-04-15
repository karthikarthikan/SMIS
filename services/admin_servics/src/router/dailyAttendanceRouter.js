import express from "express";
import dailyAttendanceController from "../controllers/dailyAttendanceController";

const router = express.Router();

router.get("/", dailyAttendanceController.getAllDailyAttendances);
router.post("/", dailyAttendanceController.addDailyAttendance);
router.get("/:id", dailyAttendanceController.getDailyAttendance);
router.patch("/:id", dailyAttendanceController.updateDailyAttendance);
router.delete("/:id", dailyAttendanceController.deleteDailyAttendance);

export default router;
