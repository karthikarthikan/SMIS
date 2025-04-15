import baseController from "./baseController";

import subjectValidator from "../validators/subjectValidator";
import subjectService from "../services/subject";

const getAllSubjects = async (request, response) => {
  await baseController(request, response, {
    validator: subjectValidator.getAllSubjects,
    service: subjectService.getAllSubjects,
  });
};

const getSubject = async (request, response) => {
  await baseController(request, response, {
    validator: subjectValidator.getSubject,
    service: subjectService.getSubject,
  });
};

const addSubject = async (request, response) => {
  await baseController(request, response, {
    validator: subjectValidator.addSubject,
    service: subjectService.addSubject,
  });
};

const updateSubject = async (request, response) => {
  await baseController(request, response, {
    validator: subjectValidator.updateSubject,
    service: subjectService.updateSubject,
  });
};

const deleteSubject = async (request, response) => {
  await baseController(request, response, {
    validator: subjectValidator.deleteSubject,
    service: subjectService.deleteSubject,
  });
};

export default {
  getAllSubjects,
  getSubject,
  addSubject,
  updateSubject,
  deleteSubject,
};

