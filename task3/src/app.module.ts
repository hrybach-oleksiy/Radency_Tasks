import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotesModule } from './notes/notes.module';

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.PG_HOST,
			port: 5432,
			username: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DB,
			autoLoadModels: true,
			synchronize: true,
		}),
		NotesModule,
	],
})
export class AppModule { }