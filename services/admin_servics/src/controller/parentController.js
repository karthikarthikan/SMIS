import baseController from "./baseController";

import parentValidator from "../validators/parentValidator";
import parentService from "../services/parent";

const getAllParents = async (request, response) => {
  await baseController(request, response, {
    validator: parentValidator.getAllParents,
    service: parentService.getAllParents,
  });
};

const getParent = async (request, response) => {
  await baseController(request, response, {
    validator: parentValidator.getParent,
    service: parentService.getParent,
  });
};

const addParent = async (request, response) => {
  await baseController(request, response, {
    validator: parentValidator.addParent,
    service: parentService.addParent,
  });
};

const updateParent = async (request, response) => {
  await baseController(request, response, {
    validator: parentValidator.updateParent,
    service: parentService.updateParent,
  });
};

const deleteParent = async (request, response) => {
  await baseController(request, response, {
    validator: parentValidator.deleteParent,
    service: parentService.deleteParent,
  });
};

export default {
  getAllParents,
  getParent,
  addParent,
  updateParent,
  deleteParent,
};

