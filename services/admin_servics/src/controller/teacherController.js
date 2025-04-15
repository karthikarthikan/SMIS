import baseController from "./baseController";

import teacherValidator from "../validators/teacherValidator";
import teacherService from "../services/teacher";

const getAllTeachers = async (request, response) => {
  await baseController(request, response, {
    validator: teacherValidator.getAllTeachers,
    service: teacherService.getAllTeachers,
  });
};

const getTeacher = async (request, response) => {
  await baseController(request, response, {
    validator: teacherValidator.getTeacher,
    service: teacherService.getTeacher,
  });
};

const addTeacher = async (request, response) => {
  await baseController(request, response, {
    validator: teacherValidator.addTeacher,
    service: teacherService.addTeacher,
  });
};

const updateTeacher = async (request, response) => {
  await baseController(request, response, {
    validator: teacherValidator.updateTeacher,
    service: teacherService.updateTeacher,
  });
};

const deleteTeacher = async (request, response) => {
  await baseController(request, response, {
    validator: teacherValidator.deleteTeacher,
    service: teacherService.deleteTeacher,
  });
};

export default {
  getAllTeachers,
  getTeacher,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};
