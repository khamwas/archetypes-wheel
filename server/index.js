require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const cors = require('cors');

const session = require('express-session');

const port = 3001;

const app = express();
app.use(json());
app.use(cors());
// app.use(express.static(__dirname + "/../public/build/"));
app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: process.env.SESSION_SECRET,
		user: [],
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //2 weeks
		}
	})
);

massive(process.env.CONNECTION_STRING)
	.then((dbInstance) => app.set('db', dbInstance))
	.catch((err) => console.log(err));

app.get('/api/archetypes', (req, res, next) => {
	req.app
		.get('db')
		.query('select * from archetypes')
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
	console.log(`Port ${port} is listening...`);
});
