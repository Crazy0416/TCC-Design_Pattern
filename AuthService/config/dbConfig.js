'use strict';
const dbConfig = {};

if(process.env.NODE_ENV === 'dev') {
	dbConfig.username = 'root';
	dbConfig.password = 'tcc123';
	dbConfig.host = 'localhost';
	dbConfig.user = 'tcc';
	dbConfig.database = 'tcc';
} else if(process.env.NODE_ENV === 'prod') {

}

module.exports = dbConfig;