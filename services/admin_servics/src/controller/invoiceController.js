import baseController from "./baseController";

import invoiceValidator from "../validators/invoiceValidator";
import invoiceService from "../services/invoice";

const getAllInvoices = async (request, response) => {
  await baseController(request, response, {
    validator: invoiceValidator.getAllInvoices,
    service: invoiceService.getAllInvoices,
  });
};

const getInvoice = async (request, response) => {
  await baseController(request, response, {
    validator: invoiceValidator.getInvoice,
    service: invoiceService.getInvoice,
  });
};

const addInvoice = async (request, response) => {
  await baseController(request, response, {
    validator: invoiceValidator.addInvoice,
    service: invoiceService.addInvoice,
  });
};

const updateInvoice = async (request, response) => {
  await baseController(request, response, {
    validator: invoiceValidator.updateInvoice,
    service: invoiceService.updateInvoice,
  });
};

const deleteInvoice = async (request, response) => {
  await baseController(request, response, {
    validator: invoiceValidator.deleteInvoice,
    service: invoiceService.deleteInvoice,
  });
};

export default {
  getAllInvoices,
  getInvoice,
  addInvoice,
  updateInvoice,
  deleteInvoice,
};
