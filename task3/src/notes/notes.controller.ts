import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Note } from '../notes/note.model';
import { NotesService } from '../notes/notes.service';

@Controller('notes')
export class NotesController {
	constructor(private readonly notesService: NotesService) { }

	@Get()
	async getAllNotes(): Promise<Note[]> {
		return this.notesService.getAllNotes();
	}

	@Get('stats')
	async getStats() {
		const stats = await this.notesService.getStats();
		return { stats };
	}

	@Get(':id')
	async getNoteById(@Param('id') id: number): Promise<Note> {
		return this.notesService.getNoteById(id);
	}

	@Post()
	async createNote(@Body() newNote: Note): Promise<Note> {
		return this.notesService.createNote(newNote);
	}

	@Put(':id')
	async updateNote(@Param('id') id: number, @Body() updatedNote: Note): Promise<Note> {
		return this.notesService.updateNote(id, updatedNote);
	}

	@Delete(':id')
	async deleteNote(@Param('id') id: number): Promise<void> {
		return this.notesService.deleteNote(id);
	}
}