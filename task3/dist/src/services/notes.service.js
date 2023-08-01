"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const mockedData_1 = require("../mockedData");
class NotesController {
    constructor() {
        this.notes = mockedData_1.mockedData;
        this.getAllNotes = (req, res) => {
            res.status(200).json(this.notes);
        };
        this.getNoteById = (req, res) => {
            const id = parseInt(req.params.id);
            const note = this.notes.find((note) => note.id === id);
            if (note) {
                res.status(200).json(note);
            }
            else {
                res.status(404).json({ message: "Note not found" });
            }
        };
        this.createNote = (req, res) => {
            const newNote = req.body;
            this.notes.push(newNote);
            res.status(201).json(newNote);
        };
        this.editNote = (req, res) => {
            const id = parseInt(req.params.id);
            const editedNote = req.body;
            const index = this.notes.findIndex((note) => note.id === id);
            if (index !== -1) {
                this.notes[index] = Object.assign(Object.assign({}, this.notes[index]), editedNote);
                res.status(200).json(this.notes[index]);
            }
            else {
                res.status(404).json({ message: "Note not found" });
            }
        };
        this.removeNote = (req, res) => {
            const id = parseInt(req.params.id);
            this.notes = this.notes.filter((note) => note.id !== id);
            res.status(200).json({ message: "Note deleted successfully" });
        };
        this.getStats = (req, res) => {
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
            res.status(200).json('stats');
        };
    }
}
exports.NotesController = NotesController;
