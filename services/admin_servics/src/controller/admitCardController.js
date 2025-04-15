import baseController from "./baseController";
import admitCardValidator from "../validators/admitCardValidator";
import admitCardService from "../services/admitCard";

const getAllAdmitCards = async (req, res) => {
  await baseController(req, res, {
    validator: admitCardValidator.getAll,
    service: admitCardService.getAll,
  });
};

const getAdmitCard = async (req, res) => {
  await baseController(req, res, {
    validator: admitCardValidator.getOne,
    service: admitCardService.getOne,
  });
};

const addAdmitCard = async (req, res) => {
  await baseController(req, res, {
    validator: admitCardValidator.add,
    service: admitCardService.add,
  });
};

const updateAdmitCard = async (req, res) => {
  await baseController(req, res, {
    validator: admitCardValidator.update,
    service: admitCardService.update,
  });
};

const deleteAdmitCard = async (req, res) => {
  await baseController(req, res, {
    validator: admitCardValidator.delete,
    service: admitCardService.delete,
  });
};

export default {
  getAllAdmitCards,
  getAdmitCard,
  addAdmitCard,
  updateAdmitCard,
  deleteAdmitCard,
};
