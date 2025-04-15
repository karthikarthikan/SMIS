import Joi from "joi";

const getAllOfflineExamsSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    sortBy: Joi.string().allow(null),
    class: Joi.string().allow(null, ''),
    subject: Joi.string().allow(null, ''),
    fromDate: Joi.date().iso().allow(null),
    toDate: Joi.date().iso().allow(null)
  });

const getOfflineExamSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addOfflineExamSchema = () =>
  Joi.object().keys({
    title: Joi.string().required().max(255),
    subject: Joi.string().required().max(100),
    class: Joi.string().required().max(50),
    section: Joi.string().allow(null, '').max(50),
    examDate: Joi.date().iso().required(),
    roomNumber: Joi.string().allow(null, '').max(20),
    startTime: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).allow(null, ''),
    endTime: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).allow(null, ''),
    totalMarks: Joi.number().integer().min(1).required(),
    passMarks: Joi.number().integer().min(0).max(Joi.ref('totalMarks')).required(),
    description: Joi.string().allow(null, '')
  });

const updateOfflineExamSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    title: Joi.string().max(255),
    subject: Joi.string().max(100),
    class: Joi.string().max(50),
    section: Joi.string().allow(null, '').max(50),
    examDate: Joi.date().iso(),
    roomNumber: Joi.string().allow(null, '').max(20),
    startTime: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).allow(null, ''),
    endTime: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).allow(null, ''),
    totalMarks: Joi.number().integer().min(1),
    passMarks: Joi.number().integer().min(0),
    description: Joi.string().allow(null, '')
  });

const deleteOfflineExamSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllOfflineExamsSchema,
  getOfflineExamSchema,
  addOfflineExamSchema,
  updateOfflineExamSchema,
  deleteOfflineExamSchema
};