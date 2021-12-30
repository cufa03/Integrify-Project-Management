const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");
const { userRegisterHandler } = require("./controllers/userRegister");
const app = express();

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: '5199',
		database: 'project_management',
	},
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.post("/app/v1/user/register", (req, res) => {
  userRegisterHandler(req, res, db)
});
app.get('/', (req, res) => { res.send("its working") });
app.listen(5000, () => {
	console.log('app is running on port 5000');
});