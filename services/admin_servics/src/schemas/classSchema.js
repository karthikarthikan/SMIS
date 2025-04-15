import Joi from "joi";

const getAllClassesSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null),
    search: Joi.string().allow('') // Optional search parameter
  });

const getClassSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addClassSchema = () =>
  Joi.object().keys({
    name: Joi.string().required().max(255), // Assuming STRING type has max length
    description: Joi.string().allow(null, '') // TEXT fields can be nullable
  });

const updateClassSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().max(255),
    description: Joi.string().allow(null, '')
  });

const deleteClassSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllClassesSchema,
  addClassSchema,
  getClassSchema,
  updateClassSchema,
  deleteClassSchema
};