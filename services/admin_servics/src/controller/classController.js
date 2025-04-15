import baseController from "./baseController";

import classValidator from "../validators/classValidator";
import classService from "../services/class";

const getAllClasss = async (request, response) => {
  await baseController(request, response, {
    validator: classValidator.getAllClasss,
    service: classService.getAllClasss,
  });
};

const getClass = async (request, response) => {
  await baseController(request, response, {
    validator: classValidator.getClass,
    service: classService.getClass,
  });
};

const addClass = async (request, response) => {
  await baseController(request, response, {
    validator: classValidator.addClass,
    service: classService.addClass,
  });
};

const updateClass = async (request, response) => {
  await baseController(request, response, {
    validator: classValidator.updateClass,
    service: classService.updateClass,
  });
};

const deleteClass = async (request, response) => {
  await baseController(request, response, {
    validator: classValidator.deleteClass,
    service: classService.deleteClass,
  });
};

export default {
  getAllClasss,
  getClass,
  addClass,
  updateClass,
  deleteClass,
};
