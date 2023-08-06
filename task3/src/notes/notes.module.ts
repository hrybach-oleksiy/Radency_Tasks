import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotesController } from './notes.controller';
import { Note } from '../notes/note.model';
import { NotesService } from './notes.service';

@Module({
	imports: [SequelizeModule.forFeature([Note])],
	controllers: [NotesController],
	providers: [NotesService],
})
export class NotesModule { }