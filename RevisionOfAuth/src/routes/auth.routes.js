const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email });

    if (isUserExist) {
        return res.status(400).json({
            message: "User already existed",
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
        },
        process.env.JWT_SECRET,
    );

    res.cookie("jwt_token", token);

    res.status(201).json({
        message: "User registered succesfully",
        user,
        token,
    });
});

authRouter.post("/protected", async (req, res) => {
    console.log(req.cookies);
    res.status(200).json({
        message: "protected",
    });
});

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    userModel.create();
});

module.exports = authRouter;
