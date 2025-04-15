import Joi from "joi";

const getAllLibrariansSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    sortBy: Joi.string().allow(null),
    search: Joi.string().allow(''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending').allow(null)
  });

const getLibrarianSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required()
  });

const addLibrarianSchema = () =>
  Joi.object().keys({
    name: Joi.string().required().max(255),
    email: Joi.string().email().required().max(255),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).allow(null, ''),
    address: Joi.string().allow(null, '').max(500),
    designation: Joi.string().allow(null, '').max(100),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending').default('pending')
  });

const updateLibrarianSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().max(255),
    email: Joi.string().email().max(255),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).allow(null, ''),
    address: Joi.string().allow(null, '').max(500),
    designation: Joi.string().allow(null, '').max(100),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending')
  });

const deleteLibrarianSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllLibrariansSchema,
  getLibrarianSchema,
  addLibrarianSchema,
  updateLibrarianSchema,
  deleteLibrarianSchema
};