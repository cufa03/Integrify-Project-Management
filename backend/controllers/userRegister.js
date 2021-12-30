const userRegisterHandler = async (req, res, db) => {
  console.log('req', req.body);
		const {
      firstname,
      lastname,
      email,
      password
		} = req.body;
console.log("req", req.body);
		try {
			const response = await db("users")
        .returning("*")
        .whereNot({email})
				.insert({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password:password
        }); 
      const data = await response[0];
      return res.json(data); 
		} catch (error) {
			res.status(500).json("error getting user or user already exsist");
		}
	}
module.exports = {
	userRegisterHandler: userRegisterHandler,
};
