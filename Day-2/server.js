const express = require("express"); // Require express

const app = express(); //Server instance created of express

app.get("/", (req, res) => {
  // Sending response at root request
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  // Sending response at /about route
  res.send("This is About Page");
});

app.get("/home", (req, res) => {
  // Sending Response at /home route
  res.send("This is Home Page");
});

app.get("/contact", (req, res) => {
  // Sending Response at /contact route
  res.send("This is Contact Page");
});

app.listen(3000); //Server started at port 3000

// npx nodemon app.js is used to re run the server everytime when something changes occur in file
