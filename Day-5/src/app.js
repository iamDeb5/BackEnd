const express = require("express"); // Require Express
const app = express(); //Instance of express
app.use(express.json()); //To read json

const notes = [];

app.get("/", (req, res) => {
  //Get "/" api
  res.send("Hello World");
});

app.post("/notes", (req, res) => {
  //Post "/notes" api to add notes on server
  notes.push(req.body); //Push notes

  res.status(201).json({
    // Response to Client side with status code 201
    message: "Note created successfully",
  });
});

app.get("/notes", (req, res) => {
  //get "/notes" api to retrive notes on client side
  res.status(200).json({
    // Response to Client side with status code 200
    notes: notes, // Sending notes
  });
});

app.delete("/notes/:index", (req, res) => {
  //delete "/notes" api to delete notes from server
  delete notes[req.params.index];
  res.status(200).json({
    // Response to Client side with status code 200
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  //patch "/notes" api to update notes from server
  notes[req.params.index].title = req.body.title; //update the notes array
  res.status(200).json({
    // Respond to client with status code 200
    message: "Note updated successfully",
  });
});

module.exports = app; // exports module app
