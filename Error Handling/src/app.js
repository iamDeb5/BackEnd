import express from "express";
import authRouter from "./routes/auth.route.js";
import handleError from "./middleware/error.middleware.js";

const app = express();

app.use("/api/auth", authRouter);

app.use(handleError);

export default app;
