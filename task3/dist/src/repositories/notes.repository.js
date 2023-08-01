"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRepository = void 0;
class NotesRepository {
    constructor(notes) {
        this.getAllNotes = () => {
            return this.notes;
        };
        this.getNoteById = (id) => {
            return this.notes.find((note) => note.id === id);
        };
        this.editNote = (id, updatedNote) => {
            const index = this.notes.findIndex((note) => note.id === id);
            if (index !== -1) {
                this.notes[index] = Object.assign(Object.assign({}, this.notes[index]), updatedNote);
                return this.notes[index];
            }
            return undefined;
        };
        this.removeNote = (id) => {
            this.notes = this.notes.filter((note) => note.id !== id);
        };
        this.getStats = () => {
            const activeStats = {
                "Task": 0,
                "Random Thought": 0,
                "Idea": 0,
            };
            const archivedStats = {
                "Task": 0,
                "Random Thought": 0,
                "Idea": 0,
            };
            this.notes.forEach((note) => {
                if (note.archived) {
                    archivedStats[note.category]++;
                }
                else {
                    activeStats[note.category]++;
                }
            });
            const stats = {
                active: activeStats,
                archived: archivedStats,
            };
            return stats;
        };
        this.notes = notes;
    }
    createNote(note) {
        const newNote = Object.assign(Object.assign({}, note), { id: this.notes.length + 1 });
        this.notes.push(newNote);
        return newNote;
    }
}
exports.NotesRepository = NotesRepository;
