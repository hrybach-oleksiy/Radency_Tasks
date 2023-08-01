import { Request, Response } from "express";
import { mockedData, Note, Category } from "../mockedData";
import { NotesRepository } from "../repositories/notes.repository";

const repository = new NotesRepository(mockedData);

export class NotesController {

	getAllNotes = (req: Request, res: Response): void => {
		const notes = repository.getAllNotes();
		res.status(200).json(notes);
	}

	getNoteById = (req: Request, res: Response): void => {
		const id = Number(req.params.id);
		const note = repository.getNoteById(id);
		if (note) {
			res.status(200).json(note);
		} else {
			res.status(404).json({ message: "Note not found" });
		}
	}

	createNote = (req: Request, res: Response): void => {
		const newNote = req.body as Note;
		const createdNote = repository.createNote(newNote);

		res.status(201).json(createdNote);
	}

	editNote = (req: Request, res: Response): void => {
		const id = Number(req.params.id);
		const updatedNote = req.body as Note;
		const editedNote = repository.editNote(id, updatedNote);

		if (editedNote) {
			res.status(200).json(editedNote);
		} else {
			res.status(404).json({ message: "Note not found" });
		}
	}

	removeNote = (req: Request, res: Response): void => {
		const id = Number(req.params.id);
		repository.removeNote(id);
		res.status(200).json({ message: "Note deleted successfully" });
	}

	getStats = (req: Request, res: Response): void => {
		const stats = repository.getStats();
		res.status(200).json(stats);
	}
}