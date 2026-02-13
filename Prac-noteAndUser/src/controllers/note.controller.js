const noteModel = require("../models/notes.model");

async function createNotes(req, res) {
	const { title, content } = req.body;

	const note = await noteModel.create({
		title: title,
		content: content,
	});

	res.status(201).json({
		message: "Note Created Successfully",
		data: note,
	});
}

async function getAllNotes(req, res) {
	const notes = await noteModel.find();

	res.status(200).json({
		message: "Note fetched Successfully",
		data: notes,
	});
}

async function deleteNote(req, res) {
	const { id } = req.params;

	await noteModel.findByIdAndDelete(id);

	res.status(200).json({
		message: "Note Deleted Successfully",
	});
}

module.exports = {
	createNotes,
	getAllNotes,
	deleteNote,
};
