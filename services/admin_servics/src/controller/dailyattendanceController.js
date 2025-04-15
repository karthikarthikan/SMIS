import baseController from "./baseController";

import dailyattendanceValidator from "../validators/dailyattendanceValidator";
import dailyattendanceService from "../services/dailyattendance";

const getAllDailyattendances = async (request, response) => {
  await baseController(request, response, {
    validator: dailyattendanceValidator.getAllDailyattendances,
    service: dailyattendanceService.getAllDailyattendances,
  });
};

const getDailyattendance = async (request, response) => {
  await baseController(request, response, {
    validator: dailyattendanceValidator.getDailyattendance,
    service: dailyattendanceService.getDailyattendance,
  });
};

const addDailyattendance = async (request, response) => {
  await baseController(request, response, {
    validator: dailyattendanceValidator.addDailyattendance,
    service: dailyattendanceService.addDailyattendance,
  });
};

const updateDailyattendance = async (request, response) => {
  await baseController(request, response, {
    validator: dailyattendanceValidator.updateDailyattendance,
    service: dailyattendanceService.updateDailyattendance,
  });
};

const deleteDailyattendance = async (request, response) => {
  await baseController(request, response, {
    validator: dailyattendanceValidator.deleteDailyattendance,
    service: dailyattendanceService.deleteDailyattendance,
  });
};

export default {
  getAllDailyattendances,
  getDailyattendance,
  addDailyattendance,
  updateDailyattendance,
  deleteDailyattendance,
};
