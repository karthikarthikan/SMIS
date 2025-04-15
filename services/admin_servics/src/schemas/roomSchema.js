import Joi from "joi";

const getAllRoomsSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    sortBy: Joi.string().allow(null),
    type: Joi.string().allow(null, ''),
    minCapacity: Joi.number().integer().min(1).allow(null)
  });

const getRoomSchema = () =>
  Joi.object().keys({
    cacheKey: Joi.string(),
    id: Joi.number().integer().positive().required(),
    // Alternative lookup by roomNumber
    roomNumber: Joi.string().optional() 
  });

const addRoomSchema = () =>
  Joi.object().keys({
    roomNumber: Joi.string().required().max(20),
    capacity: Joi.number().integer().min(1).required(),
    type: Joi.string().allow(null, '').max(50)
  });

const updateRoomSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    roomNumber: Joi.string().max(20),
    capacity: Joi.number().integer().min(1),
    type: Joi.string().allow(null, '').max(50)
  });

const deleteRoomSchema = () =>
  Joi.object().keys({
    id: Joi.number().integer().positive().required()
  });

export {
  getAllRoomsSchema,
  getRoomSchema,
  addRoomSchema,
  updateRoomSchema,
  deleteRoomSchema
};