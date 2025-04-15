import Joi from "joi";

const getAllDailyAttendanceSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null),
    studentId: Joi.number().integer().positive().allow(null),
    classId: Joi.number().integer().positive().allow(null),
    date: Joi.date().iso().allow(null),
    month: Joi.string().regex(/^\d{4}-\d{2}$/).allow(null), // YYYY-MM format
    status: Joi.string().valid('present', 'absent', 'late', 'leave').allow(null)
  });

const getDailyAttendanceSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addDailyAttendanceSchema = () =>
  Joi.object().keys({
    studentId: Joi.number().integer().positive().required(),
    classId: Joi.number().integer().positive().required(),
    date: Joi.date().iso().required(),
    month: Joi.string().regex(/^\d{4}-\d{2}$/).required(), // YYYY-MM format
    status: Joi.string().valid('present', 'absent', 'late', 'leave').default('absent'),
    remarks: Joi.string().allow(null, '')
  });

const updateDailyAttendanceSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    studentId: Joi.number().integer().positive(),
    classId: Joi.number().integer().positive(),
    date: Joi.date().iso(),
    month: Joi.string().regex(/^\d{4}-\d{2}$/), // YYYY-MM format
    status: Joi.string().valid('present', 'absent', 'late', 'leave'),
    remarks: Joi.string().allow(null, '')
  });

const deleteDailyAttendanceSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllDailyAttendanceSchema,
  addDailyAttendanceSchema,
  getDailyAttendanceSchema,
  updateDailyAttendanceSchema,
  deleteDailyAttendanceSchema
};