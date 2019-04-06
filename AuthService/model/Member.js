'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../helper/sequelizeHandler');

class Member extends Sequelize.Model {};

Member.init({
	uid: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Member must have id"
			},
			notEmpty: {
				msg: "Member id doesn't allow empty"
			}
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Member must have password"
			},
			notEmpty: {
				msg: "Member password doesn't allow empty"
			}
		}
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Member must have name"
			},
			notEmpty: {
				msg: "Member name doesn't allow empty"
			}
		}
	}
}, { sequelize });

module.exports = Member;