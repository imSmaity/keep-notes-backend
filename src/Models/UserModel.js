const mongoose = require('mongoose');

const userSchamaStructure = {
	name: String,
	notes: Array,
	theme: String,
	created: String,
};

const userSchema = new mongoose.Schema(userSchamaStructure);

const User = new mongoose.model('user', userSchema);

module.exports = User;
