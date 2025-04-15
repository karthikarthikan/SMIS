import Joi from "joi";

const getAllAdmitCardsSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null),
    studentId: Joi.number().integer().positive().allow(null),
    examId: Joi.number().integer().positive().allow(null)
  });

const getAdmitCardSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addAdmitCardSchema = () =>
  Joi.object().keys({
    studentId: Joi.number().integer().positive().required(),
    examId: Joi.number().integer().positive().required(),
    rollNumber: Joi.string().required(),
    roomNumber: Joi.string().allow(null, ''),
    issueDate: Joi.date().iso().default(() => new Date().toISOString().split('T')[0]),
    status: Joi.string().valid('issued', 'revoked').default('issued')
  });

const updateAdmitCardSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    studentId: Joi.number().integer().positive(),
    examId: Joi.number().integer().positive(),
    rollNumber: Joi.string(),
    roomNumber: Joi.string().allow(null, ''),
    issueDate: Joi.date().iso(),
    status: Joi.string().valid('issued', 'revoked')
  });

const deleteAdmitCardSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllAdmitCardsSchema,
  addAdmitCardSchema,
  getAdmitCardSchema,
  updateAdmitCardSchema,
  deleteAdmitCardSchema
};