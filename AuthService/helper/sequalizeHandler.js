'use strict';
const dbConfig = require('../config/dbConfig');
const Sequalize = require('sequelize');
const sequalize = new Sequalize('database', dbConfig.username, dbConfig.password, {
	host: dbConfig.host,
	user: dbConfig.user,
	database: dbConfig.database
});



module.exports = sequalize;