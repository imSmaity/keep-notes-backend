require('dotenv').config();
module.exports = {
	allowedOrigins: ['http://localhost:8080/'],
	SERVER_PORT: process.env.PORT || 8080,
	SERVER_DB_URI: process.env.URI,
};
