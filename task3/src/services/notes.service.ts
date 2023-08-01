import { Request, Response } from "express";
import { mockedData, Note, Category } from "../mockedData";

export class NotesController {
	private notes: Note[] = mockedData;

	getAllNotes = (req: Request, res: Response): void => {
		res.status(200).json(this.notes);
	}

	getNoteById = (req: Request, res: Response): void => {
		const id = parseInt(req.params.id);
		const note = this.notes.find((note) => note.id === id);

		if (note) {
			res.status(200).json(note);
		} else {
			res.status(404).json({ message: "Note not found" });
		}
	}

	createNote = (req: Request, res: Response): void => {
		const newNote: Note = req.body;
		this.notes.push(newNote);

		res.status(201).json(newNote);
	}

	editNote = (req: Request, res: Response): void => {
		const id = parseInt(req.params.id);
		const editedNote: Note = req.body;
		const index = this.notes.findIndex((note) => note.id === id);

		if (index !== -1) {
			this.notes[index] = { ...this.notes[index], ...editedNote };
			res.status(200).json(this.notes[index]);
		} else {
			res.status(404).json({ message: "Note not found" });
		}
	}

	removeNote = (req: Request, res: Response): void => {
		const id = parseInt(req.params.id);
		this.notes = this.notes.filter((note) => note.id !== id);

		res.status(200).json({ message: "Note deleted successfully" });
	}

	getStats = (req: Request, res: Response): void => {
		const activeStats: Record<Category, number> = {
			"Task": 0,
			"Random Thought": 0,
			"Idea": 0,
		};

		const archivedStats: Record<Category, number> = {
			"Task": 0,
			"Random Thought": 0,
			"Idea": 0,
		};

		this.notes.forEach((note) => {
			if (note.archived) {
				archivedStats[note.category]++;
			} else {
				activeStats[note.category]++;
			}
		});

		const stats = {
			active: activeStats,
			archived: archivedStats,
		};

		res.status(200).json('stats');
	}
}