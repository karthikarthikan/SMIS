import baseController from "./baseController";

import accountantValidator from "../validators/accountantValidator";
import accountantService from "../services/accountant";

const getAllAccountants = async (request, response) => {
  await baseController(request, response, {
    validator: accountantValidator.getAllAccountants,
    service: accountantService.getAllAccountants,
  });
};

const getAccountant = async (request, response) => {
  await baseController(request, response, {
    validator: accountantValidator.getAccountant,
    service: accountantService.getAccountant,
  });
};

const addAccountant = async (request, response) => {
  await baseController(request, response, {
    validator: accountantValidator.addAccountant,
    service: accountantService.addAccountant,
  });
};

const updateAccountant = async (request, response) => {
  await baseController(request, response, {
    validator: accountantValidator.updateAccountant,
    service: accountantService.updateAccountant,
  });
};

const deleteAccountant = async (request, response) => {
  await baseController(request, response, {
    validator: accountantValidator.deleteAccountant,
    service: accountantService.deleteAccountant,
  });
};

export default {
  getAllAccountants,
  getAccountant,
  addAccountant,
  updateAccountant,
  deleteAccountant,
};
