import Joi from "joi";

const getAllSubjectsSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    sortBy: Joi.string().allow(null),
    search: Joi.string().allow('') // Optional search parameter
  });

const getSubjectSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required(),
    code: Joi.string().optional() // Alternative lookup by subject code
  });

const addSubjectSchema = () =>
  Joi.object().keys({
    name: Joi.string().required().max(255),
    code: Joi.string().required().max(20),
    description: Joi.string().allow(null, '')
  });

const updateSubjectSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().max(255),
    code: Joi.string().max(20),
    description: Joi.string().allow(null, '')
  });

const deleteSubjectSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllSubjectsSchema,
  getSubjectSchema,
  addSubjectSchema,
  updateSubjectSchema,
  deleteSubjectSchema
};