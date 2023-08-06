import { Model, DataTypes, Optional } from 'sequelize';
import db from '../utils/database';

interface NoteAttributes {
	id: number;
	name: string;
	content: string;
	category: string;
	datesMentioned?: string[];
	archived?: boolean;
}

interface NoteCreationAttributes extends Optional<NoteAttributes, 'id'> { }

class Note extends Model<NoteAttributes, NoteCreationAttributes> implements NoteAttributes {
	public id!: number;
	public name!: string;
	public content!: string;
	public category!: string;
	public datesMentioned?: string[];
	public archived?: boolean;

	// Timestamps
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Note.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		datesMentioned: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			defaultValue: [],
			allowNull: true,
		},
		archived: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: true,
		},
	},
	{
		sequelize: db,
		modelName: 'Note',
	}
);

export default Note;