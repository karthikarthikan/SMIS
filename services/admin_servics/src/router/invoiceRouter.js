import express from "express";
import invoiceController from "../controllers/invoiceController";

const router = express.Router();

router.get("/", invoiceController.getAllInvoices);
router.post("/", invoiceController.addInvoice);
router.get("/:id", invoiceController.getInvoice);
router.patch("/:id", invoiceController.updateInvoice);
router.delete("/:id", invoiceController.deleteInvoice);

export default router;
