import { Note, Category } from "../mockedData";

export class NotesRepository {
	private notes: Note[];

	constructor(notes: Note[]) {
		this.notes = notes;
	}

	getAllNotes = (): Note[] => {
		return this.notes;
	}

	getNoteById = (id: number): Note | undefined => {
		return this.notes.find((note) => note.id === id);
	}

	createNote(note: Note): Note {
		const newNote: Note = {
			...note,
			id: this.notes.length + 1,
		};

		this.notes.push(newNote);

		return newNote;
	}

	editNote = (id: number, updatedNote: Note): Note | undefined => {
		const index = this.notes.findIndex((note) => note.id === id);
		if (index !== -1) {
			this.notes[index] = { ...this.notes[index], ...updatedNote };
			return this.notes[index];
		}
		return undefined;
	}

	removeNote = (id: number): void => {
		this.notes = this.notes.filter((note) => note.id !== id);
	}

	getStats = (): { active: Record<Category, number>, archived: Record<Category, number> } => {
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

		return stats;
	}
}