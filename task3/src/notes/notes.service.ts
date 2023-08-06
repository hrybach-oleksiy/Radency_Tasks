import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from '../notes/note.model';

interface NoteStats {
	activeNotes: number;
	archivedNotes: number;
	totalNotes: number;
}

@Injectable()
export class NotesService {
	constructor(
		@InjectModel(Note) private noteModel: typeof Note,
	) { }

	async getStats(): Promise<NoteStats> {
		const activeNotesCount = await this.noteModel.count({ where: { archived: false } });
		const archivedNotesCount = await this.noteModel.count({ where: { archived: true } });
		const totalNotesCount = await this.noteModel.count();

		return {
			activeNotes: activeNotesCount,
			archivedNotes: archivedNotesCount,
			totalNotes: totalNotesCount,
		};
	}

	async getAllNotes(): Promise<Note[]> {
		return this.noteModel.findAll();
	}

	async getNoteById(id: number): Promise<Note> {
		return this.noteModel.findByPk(id);
	}

	async createNote(newNote: Note): Promise<Note> {
		return this.noteModel.create(newNote as any);
	}

	async updateNote(id: number, updatedNote: Note): Promise<Note> {
		const note = await this.noteModel.findByPk(id);
		if (!note) {
			throw new Error('Note not found!');
		}
		return note.update(updatedNote);
	}

	async deleteNote(id: number): Promise<void> {
		await this.noteModel.destroy({
			where: { id },
		});
	}
}