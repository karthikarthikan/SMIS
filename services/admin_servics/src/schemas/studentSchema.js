import Joi from "joi";

const getAllStudentsSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    sortBy: Joi.string().allow(null),
    search: Joi.string().allow(''),
    class: Joi.string().allow(null, ''),
    section: Joi.string().allow(null, ''),
    gender: Joi.string().valid('male', 'female', 'other').allow(null),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending').allow(null),
    admissionYear: Joi.number().integer().min(2000).max(2100).allow(null)
  });

const getStudentSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required(),
    admissionNumber: Joi.string().optional() // Alternative lookup
  });

const addStudentSchema = () =>
  Joi.object().keys({
    name: Joi.string().required().max(255),
    admissionNumber: Joi.string().required().max(50),
    email: Joi.string().email().allow(null, '').max(255),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).allow(null, ''),
    address: Joi.string().allow(null, '').max(500),
    gender: Joi.string().valid('male', 'female', 'other').allow(null),
    dob: Joi.date().iso().max('now').allow(null),
    class: Joi.string().required().max(50),
    section: Joi.string().allow(null, '').max(10),
    rollNumber: Joi.string().allow(null, '').max(20),
    parentId: Joi.number().integer().positive().allow(null),
    profile: Joi.string().uri().allow(null, ''),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').allow(null),
    admissionDate: Joi.date().iso().default(() => new Date().toISOString().split('T')[0]),
    additionalInfo: Joi.string().allow(null, ''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending').default('pending')
  });

const updateStudentSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().max(255),
    admissionNumber: Joi.string().max(50),
    email: Joi.string().email().max(255).allow(null, ''),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).allow(null, ''),
    address: Joi.string().max(500).allow(null, ''),
    gender: Joi.string().valid('male', 'female', 'other').allow(null),
    dob: Joi.date().iso().max('now').allow(null),
    class: Joi.string().max(50),
    section: Joi.string().max(10).allow(null, ''),
    rollNumber: Joi.string().max(20).allow(null, ''),
    parentId: Joi.number().integer().positive().allow(null),
    profile: Joi.string().uri().allow(null, ''),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').allow(null),
    admissionDate: Joi.date().iso(),
    additionalInfo: Joi.string().allow(null, ''),
    accountStatus: Joi.string().valid('active', 'inactive', 'pending')
  });

const deleteStudentSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllStudentsSchema,
  getStudentSchema,
  addStudentSchema,
  updateStudentSchema,
  deleteStudentSchema
};