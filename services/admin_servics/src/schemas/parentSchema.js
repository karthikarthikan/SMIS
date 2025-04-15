import Joi from "joi";

const getAllParentsSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    sortBy: Joi.string().allow(null),
    search: Joi.string().allow(''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending').allow(null),
    studentId: Joi.number().integer().positive().allow(null)
  });

const getParentSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addParentSchema = () =>
  Joi.object().keys({
    name: Joi.string().required().max(255),
    email: Joi.string().email().allow(null, '').max(255),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).allow(null, ''),
    address: Joi.string().allow(null, '').max(500),
    relationship: Joi.string().allow(null, '').max(100),
    studentId: Joi.number().integer().positive().allow(null),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending').default('pending')
  });

const updateParentSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().max(255),
    email: Joi.string().email().allow(null, '').max(255),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).allow(null, ''),
    address: Joi.string().allow(null, '').max(500),
    relationship: Joi.string().allow(null, '').max(100),
    studentId: Joi.number().integer().positive().allow(null),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending')
  });

const deleteParentSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllParentsSchema,
  getParentSchema,
  addParentSchema,
  updateParentSchema,
  deleteParentSchema
};