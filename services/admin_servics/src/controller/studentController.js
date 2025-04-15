import baseController from "./baseController";

import studentValidator from "../validators/studentValidator";
import studentService from "../services/student";

const getAllStudents = async (request, response) => {
  await baseController(request, response, {
    validator: studentValidator.getAllStudents,
    service: studentService.getAllStudents,
  });
};

const getStudent = async (request, response) => {
  await baseController(request, response, {
    validator: studentValidator.getStudent,
    service: studentService.getStudent,
  });
};

const addStudent = async (request, response) => {
  await baseController(request, response, {
    validator: studentValidator.addStudent,
    service: studentService.addStudent,
  });
};

const updateStudent = async (request, response) => {
  await baseController(request, response, {
    validator: studentValidator.updateStudent,
    service: studentService.updateStudent,
  });
};

const deleteStudent = async (request, response) => {
  await baseController(request, response, {
    validator: studentValidator.deleteStudent,
    service: studentService.deleteStudent,
  });
};

export default {
  getAllStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
