const express = require('express');
const app = express();
const env = require('dotenv');
const database = require('../config/database');
const cors = require('cors');
const parser = require('body-parser');
env.config();
app.use(cors());
app.use(parser.json());


//CRUD

app.use('/user/read', require('./getUser'));
app.use('/user/update', require('./User'));


function start_server(port) {
	console.log('Server started...');
	console.log('PORT ' + port);
	database();
}
const PORT = process.env.PORT || 9000;
app.listen(PORT, start_server(PORT));
