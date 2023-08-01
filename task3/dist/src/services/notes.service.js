"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const mockedData_1 = require("../mockedData");
const notes_repository_1 = require("../repositories/notes.repository");
const repository = new notes_repository_1.NotesRepository(mockedData_1.mockedData);
class NotesController {
    constructor() {
        this.getAllNotes = (req, res) => {
            const notes = repository.getAllNotes();
            res.status(200).json(notes);
        };
        this.getNoteById = (req, res) => {
            const id = Number(req.params.id);
            const note = repository.getNoteById(id);
            if (note) {
                res.status(200).json(note);
            }
            else {
                res.status(404).json({ message: "Note not found" });
            }
        };
        this.createNote = (req, res) => {
            const newNote = req.body;
            const createdNote = repository.createNote(newNote);
            res.status(201).json(createdNote);
        };
        this.editNote = (req, res) => {
            const id = Number(req.params.id);
            const updatedNote = req.body;
            const editedNote = repository.editNote(id, updatedNote);
            if (editedNote) {
                res.status(200).json(editedNote);
            }
            else {
                res.status(404).json({ message: "Note not found" });
            }
        };
        this.removeNote = (req, res) => {
            const id = Number(req.params.id);
            repository.removeNote(id);
            res.status(200).json({ message: "Note deleted successfully" });
        };
        this.getStats = (req, res) => {
            const stats = repository.getStats();
            res.status(200).json(stats);
        };
    }
}
exports.NotesController = NotesController;
