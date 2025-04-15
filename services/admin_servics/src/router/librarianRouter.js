import express from "express";
import librarianController from "../controllers/librarianController";

const router = express.Router();

router.get("/", librarianController.getAllLibrarians);
router.post("/", librarianController.addLibrarian);
router.get("/:id", librarianController.getLibrarian);
router.patch("/:id", librarianController.updateLibrarian);
router.delete("/:id", librarianController.deleteLibrarian);

export default router;
