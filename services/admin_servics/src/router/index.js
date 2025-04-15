import express from "express";

// Import all route modules
import accountantRouter from "./accountantRouter";
import adminRouter from "./adminRouter";
import admitCardRouter from "./admitCardRouter";
import classRouter from "./classRouter";
import dailyAttendanceRouter from "./dailyAttendanceRouter";
import invoiceRouter from "./invoiceRouter";
import librarianRouter from "./librarianRouter";
import offlineExamRouter from "./offlineExamRouter";
import parentRouter from "./parentRouter";
import roomRouter from "./roomRouter";
import studentRouter from "./studentRouter";
import subjectRouter from "./subjectRouter";
import teacherRouter from "./teacherRouter";

const router = express.Router();

// Mount routes with path prefixes
router.use("/accountants", accountantRouter);
router.use("/admins", adminRouter);
router.use("/admitCards", admitCardRouter);
router.use("/classes", classRouter);
router.use("/dailyAttendances", dailyAttendanceRouter);
router.use("/invoices", invoiceRouter);
router.use("/librarians", librarianRouter);
router.use("/offlineExams", offlineExamRouter);
router.use("/parents", parentRouter);
router.use("/rooms", roomRouter);
router.use("/students", studentRouter);
router.use("/subjects", subjectRouter);
router.use("/teachers", teacherRouter);

export default router;
