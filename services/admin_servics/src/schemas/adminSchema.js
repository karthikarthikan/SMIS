import Joi from "joi";

const getAllAdminsSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null)
  });

const getAdminSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addAdminSchema = () =>
  Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().allow(null, ''),
    address: Joi.string().allow(null, ''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending', 'banned').default('pending')
  });

const updateAdminSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    username: Joi.string(),
    password: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string().allow(null, ''),
    address: Joi.string().allow(null, ''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending', 'banned')
  });

const deleteAdminSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllAdminsSchema,
  addAdminSchema,
  getAdminSchema,
  updateAdminSchema,
  deleteAdminSchema
};