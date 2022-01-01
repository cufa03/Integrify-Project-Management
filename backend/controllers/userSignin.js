const userSignInHandler = async (req, res, db) => {
	console.log("req", req.body);
	const { email, password } = req.body;
	console.log("req", req.body);
	try {
		const response = await db("users")
			.returning("*")
			.where({ email })
			.where({ password })
			.then((user) => res.json(user[0]))
	} catch (error) {
		res.status(500).json("wrong credentials");
	}
};
module.exports = {
	userSignInHandler: userSignInHandler,
};
