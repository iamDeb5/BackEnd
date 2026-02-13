const userModel = require("../models/users.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
	const { username, email, password } = req.body;

	const isUserExist = await userModel.findOne({
		$or: [{ username }, { email }],
	});

	if (isUserExist) {
		return res.status(409).json({
			message: "User already exist",
		});
	}

	const hash = crypto.createHash("sha256").update(password).digest("hex");

	const user = await userModel.create({
		username,
		email,
		password: hash,
	});

	const token = jwt.sign(
		{
			id: user._id,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "1h",
		},
	);

	res.cookie("token", token);

	res.status(201).json({
		message: "User created successfully",
		user: {
			username: user.username,
			email: user.email,
		},
	});
};

const loginUser = async (req, res) => {};

module.exports = {
	registerUser,
	loginUser,
};
