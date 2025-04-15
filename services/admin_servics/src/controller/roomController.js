import baseController from "./baseController";

import roomValidator from "../validators/roomValidator";
import roomService from "../services/room";

const getAllRooms = async (request, response) => {
  await baseController(request, response, {
    validator: roomValidator.getAllRooms,
    service: roomService.getAllRooms,
  });
};

const getRoom = async (request, response) => {
  await baseController(request, response, {
    validator: roomValidator.getRoom,
    service: roomService.getRoom,
  });
};

const addRoom = async (request, response) => {
  await baseController(request, response, {
    validator: roomValidator.addRoom,
    service: roomService.addRoom,
  });
};

const updateRoom = async (request, response) => {
  await baseController(request, response, {
    validator: roomValidator.updateRoom,
    service: roomService.updateRoom,
  });
};

const deleteRoom = async (request, response) => {
  await baseController(request, response, {
    validator: roomValidator.deleteRoom,
    service: roomService.deleteRoom,
  });
};

export default {
  getAllRooms,
  getRoom,
  addRoom,
  updateRoom,
  deleteRoom,
};
