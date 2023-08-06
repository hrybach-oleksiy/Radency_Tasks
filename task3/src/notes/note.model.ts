import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Note extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	})
	id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	content: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	category: string;

	@Column({
		type: DataType.ARRAY(DataType.STRING),
		allowNull: true,
		defaultValue: [],
	})
	datesMentioned: string[];

	@Column({
		type: DataType.BOOLEAN,
		allowNull: true,
		defaultValue: false,
	})
	archived: boolean;
}

