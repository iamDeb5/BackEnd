export const registerUser = async (req, res, next) => {
	try {
		throw new Error("There is something wrong please try again after some time");
	} catch (error) {
		error.status = 400;
		next(error);
	}
};
