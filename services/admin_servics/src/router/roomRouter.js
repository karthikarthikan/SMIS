import express from "express";
import roomController from "../controllers/roomController";

const router = express.Router();

router.get("/", roomController.getAllRooms);
router.post("/", roomController.addRoom);
router.get("/:id", roomController.getRoom);
router.patch("/:id", roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);

export default router;
