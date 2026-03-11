import { Router } from "express";
import { registerUser } from "../controller/auth.controller.js";

const authRouter = Router();

/**
 * route: /api/auth/register
 */
authRouter.post("/register", registerUser);

export default authRouter;
