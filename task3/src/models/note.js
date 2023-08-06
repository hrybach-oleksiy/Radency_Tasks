import { Sequelize } from 'sequelize';
import db from '../utils/database.js';

const Note = db.define('Note', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	category: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	datesMentioned: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		defaultValue: [],
		allowNull: true,
	},
	archived: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: true,
	}
});

export default Note;