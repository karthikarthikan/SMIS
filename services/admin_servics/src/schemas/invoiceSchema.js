import Joi from "joi";

const getAllInvoicesSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    sortBy: Joi.string().allow(null),
    studentId: Joi.number().integer().positive().allow(null),
    status: Joi.string().valid('Pending', 'Paid', 'Cancelled', 'Overdue').allow(null),
    fromDate: Joi.date().iso().allow(null),
    toDate: Joi.date().iso().allow(null)
  });

const getInvoiceSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required(),
    invoiceNo: Joi.string().optional() // Alternative lookup by invoiceNo
  });

const addInvoiceSchema = () =>
  Joi.object().keys({
    invoiceNo: Joi.string().required(),
    studentId: Joi.number().integer().positive().required(),
    invoiceTitle: Joi.string().required().max(255),
    amount: Joi.number().precision(2).positive().required(),
    totalAmount: Joi.number().precision(2).positive().required(),
    paidAmount: Joi.number().precision(2).min(0).default(0.00),
    status: Joi.string().valid('Pending', 'Paid', 'Cancelled', 'Overdue').default('Pending')
  });

const updateInvoiceSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    invoiceNo: Joi.string(),
    studentId: Joi.number().integer().positive(),
    invoiceTitle: Joi.string().max(255),
    amount: Joi.number().precision(2).positive(),
    totalAmount: Joi.number().precision(2).positive(),
    paidAmount: Joi.number().precision(2).min(0),
    status: Joi.string().valid('Pending', 'Paid', 'Cancelled', 'Overdue')
  });

const deleteInvoiceSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllInvoicesSchema,
  getInvoiceSchema,
  addInvoiceSchema,
  updateInvoiceSchema,
  deleteInvoiceSchema
};