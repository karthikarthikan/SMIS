import baseController from "./baseController";

import librarianValidator from "../validators/librarianValidator";
import librarianService from "../services/librarian";

const getAllLibrarians = async (request, response) => {
  await baseController(request, response, {
    validator: librarianValidator.getAllLibrarians,
    service: librarianService.getAllLibrarians,
  });
};

const getLibrarian = async (request, response) => {
  await baseController(request, response, {
    validator: librarianValidator.getLibrarian,
    service: librarianService.getLibrarian,
  });
};

const addLibrarian = async (request, response) => {
  await baseController(request, response, {
    validator: librarianValidator.addLibrarian,
    service: librarianService.addLibrarian,
  });
};

const updateLibrarian = async (request, response) => {
  await baseController(request, response, {
    validator: librarianValidator.updateLibrarian,
    service: librarianService.updateLibrarian,
  });
};

const deleteLibrarian = async (request, response) => {
  await baseController(request, response, {
    validator: librarianValidator.deleteLibrarian,
    service: librarianService.deleteLibrarian,
  });
};

export default {
  getAllLibrarians,
  getLibrarian,
  addLibrarian,
  updateLibrarian,
  deleteLibrarian,
};
