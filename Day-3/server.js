const express = require("express"); //Require express
const app = express(); //Create a constance of express (app)

app.use(express.json()); //Using express.json() to read json come from cilent side

const notes = []; // Create a blank array to store notes

app.post("/notes", (req, res) => {
  //Create a POST method to create a notes in server side
  notes.push(req.body); //Push the notes to the Array

  res.send("Note added"); //Sending response back to the client that note added
});

app.get("/notes", (req, res) => {
  //GET method to send notes back to the client side to showcase notes in client side
  res.send(notes);
});

app.listen(3000, () => {
  // Run the server at port 3000
  console.log("Server is running");
});
