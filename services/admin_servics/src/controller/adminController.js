import baseController from "./baseController";

import adminValidator from "../validators/adminValidator";
import adminService from "../services/admin";

const getAllAdmins = async (request, response) => {
  await baseController(request, response, {
    validator: adminValidator.getAllAdmins,
    service: adminService.getAllAdmins,
  });
};

const getAdmin = async (request, response) => {
  await baseController(request, response, {
    validator: adminValidator.getAdmin,
    service: adminService.getAdmin,
  });
};

const addAdmin = async (request, response) => {
  await baseController(request, response, {
    validator: adminValidator.addAdmin,
    service: adminService.addAdmin,
  });
};

const updateAdmin = async (request, response) => {
  await baseController(request, response, {
    validator: adminValidator.updateAdmin,
    service: adminService.updateAdmin,
  });
};

const deleteAdmin = async (request, response) => {
  await baseController(request, response, {
    validator: adminValidator.deleteAdmin,
    service: adminService.deleteAdmin,
  });
};

export default {
  getAllAdmins,
  getAdmin,
  addAdmin,
  updateAdmin,
  deleteAdmin,
};
