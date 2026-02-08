const mongoose = require("mongoose");
const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const ifUserAlreadyExist = await userModel.findOne({ email });

    if (ifUserAlreadyExist) {
        return res.status(400).json({
            message: "User Already Exist",
        });
    }

    const user = await userModel.create({
        name,
        email,
        password,
    });

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
        },
        process.env.JWT_SECRET,
    );

    res.cookie("jwt_token", token);

    res.status(201).json({
        message: "User Registered Succesfully",
        user,
        token,
    });
});

module.exports = authRouter;
