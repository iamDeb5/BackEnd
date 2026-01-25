const express = require("express"); //Require Express

const app = express(); //Create an instance of Express

app.use(express.json()); // Using express.json() to read json

const notes = []; // Create a blank notes[] to store notes

app.get("/", (req, res) => {
  // GET meethod for root show Hello World
  res.send("Hello World");
});

app.post("/notes", (req, res) => {
  //POST API /notes to store notes at notes array
  notes.push(req.body);
  res.send("Note added successfully");
});

app.get("/notes", (req, res) => {
  //GET API /notes to send stored notes to client side
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  //DELETE API /notes to delete notes in the notes[]
  delete notes[req.params.index];
  res.send("Note deleted successfully");
});

app.put("/notes/:index", (req, res) => {
  //PUT API /notes to update notes[]
  notes[req.params.index] = req.body;
  res.send("Note updated successfully");
});

app.patch("notes/:index", (req, res) => {
  //PATCH API /notes to update notes[]
  notes[req.params.index].title = req.body.title;
  notes[req.params.index].description = req.body.description;
  res.send("Note updated successfully");
});

module.exports = app; //Exports app instance for server.js file to run the server
