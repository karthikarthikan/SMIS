import validate from "../utilities/validationHelper";
import {
  addAccountantSchema,
  deleteAccountantSchema,
  getAllAccountantsSchema,
  getAccountantSchema,
  updateAccountantSchema
} from "../schemas/accountantSchema";
import logger from "../utilities/logger";

const getAllAccountants = async (request) => {
  const { page, limit, sortBy, fields, ...filter } = request.query;

  logger.log("debug", "Validator: getAllAccountants started");

  const attributes = {
    cacheKey: request.cacheKey,
    page: page ? parseInt(page, 10) : null,
    limit: limit ? parseInt(limit, 10) : null,
    sortBy: sortBy || null,
    filter: {},
    fields
  };

  if (filter && Object.keys(filter).length !== 0) {
    Object.keys(filter).map((key) => (attributes.filter[key] = filter[key]));
  }

  logger.log("debug", "Validator: getAllAccountants completed");

  return validate(getAllAccountantsSchema, attributes);
};

const getAccountant = async (request) => {
  logger.log("debug", "Validator: getAccountant started");

  const attributes = {
    cacheKey: request.cacheKey,
    id: request.params.id
  };

  logger.log("debug", "Validator: getAccountant completed");

  return validate(getAccountantSchema, attributes);
};

const addAccountant = async (request) => {
  const { name, email, phone, department } = request.body;

  logger.log("debug", "Validator: addAccountant started");

  if (!name) {
    const Err = new Error("Name is required");
    Err.code = 400;
    logger.log("error", "addAccountant", Err);
    throw Err;
  }

  const attributes = {
    name,
    email,
    phone,
    department
  };

  logger.log("debug", "Validator: addAccountant completed");

  return validate(addAccountantSchema, attributes);
};

const updateAccountant = async (request) => {
  const { name, email, phone, department } = request.body;
  const { id } = request.params;

  logger.log("debug", "Validator: updateAccountant started");

  const attributes = {
    id,
    name,
    email,
    phone,
    department
  };

  logger.log("debug", "Validator: updateAccountant completed");

  return validate(updateAccountantSchema, attributes);
};

const deleteAccountant = async (request) => {
  logger.log("debug", "Validator: deleteAccountant started");

  const attributes = {
    id: request.params.id
  };

  logger.log("debug", "Validator: deleteAccountant completed");

  return validate(deleteAccountantSchema, attributes);
};

export default {
  getAllAccountants,
  getAccountant,
  addAccountant,
  updateAccountant,
  deleteAccountant
};
