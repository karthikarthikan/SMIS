import baseController from "./baseController";

import offlineExamValidator from "../validators/offlineExamValidator";
import offlineExamService from "../services/offlineExam";

const getAllOfflineExams = async (request, response) => {
  await baseController(request, response, {
    validator: offlineExamValidator.getAllOfflineExams,
    service: offlineExamService.getAllOfflineExams,
  });
};

const getOfflineExam = async (request, response) => {
  await baseController(request, response, {
    validator: offlineExamValidator.getOfflineExam,
    service: offlineExamService.getOfflineExam,
  });
};

const addOfflineExam = async (request, response) => {
  await baseController(request, response, {
    validator: offlineExamValidator.addOfflineExam,
    service: offlineExamService.addOfflineExam,
  });
};

const updateOfflineExam = async (request, response) => {
  await baseController(request, response, {
    validator: offlineExamValidator.updateOfflineExam,
    service: offlineExamService.updateOfflineExam,
  });
};

const deleteOfflineExam = async (request, response) => {
  await baseController(request, response, {
    validator: offlineExamValidator.deleteOfflineExam,
    service: offlineExamService.deleteOfflineExam,
  });
};

export default {
  getAllOfflineExams,
  getOfflineExam,
  addOfflineExam,
  updateOfflineExam,
  deleteOfflineExam,
};
