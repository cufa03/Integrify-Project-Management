const userProjectHandler = async (req, res, db) => {
	
	const { projectname, email,members} = req.body;
	console.log("req", req.body);
	try {
		const response = await db("project")
			.returning("*")
			.whereNot({ projectname })
			.insert({
				projectname: projectname,
				email: email,
				members: members,
			})
			.then((project) => res.json(project[0]));
	} catch (error) {
		res.status(500).json("error creating project or project already exsist");
	}
};
module.exports = {
	userProjectHandler: userProjectHandler,
};
