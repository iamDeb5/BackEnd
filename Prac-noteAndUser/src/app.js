const express = require("express");
const noteRouter = require("./routes/note.routes");
const userRouter = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use("/api/notes", noteRouter);
app.use("/api/users", userRouter);
app.use(cookieParser());

module.exports = app;
