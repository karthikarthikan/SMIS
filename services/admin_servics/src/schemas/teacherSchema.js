import Joi from "joi";

const getAllTeachersSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null)
  });

const getTeacherSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addTeacherSchema = () =>
  Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().allow(null, ''),
    address: Joi.string().allow(null, ''),
    designation: Joi.string().allow(null, ''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending', 'banned').default('pending')
  });

const updateTeacherSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string().allow(null, ''),
    address: Joi.string().allow(null, ''),
    designation: Joi.string().allow(null, ''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending', 'banned')
  });

const deleteTeacherSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllTeachersSchema,
  addTeacherSchema,
  getTeacherSchema,
  updateTeacherSchema,
  deleteTeacherSchema
};