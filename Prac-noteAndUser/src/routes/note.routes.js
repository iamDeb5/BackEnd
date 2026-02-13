const express = require("express");
const notesController = require("../controllers/note.controller");

const noteRouter = express.Router();

noteRouter.post("/create", notesController.createNotes);
noteRouter.get("/fetch", notesController.getAllNotes);
noteRouter.delete("/delete/:id", notesController.deleteNote);

module.exports = noteRouter;
