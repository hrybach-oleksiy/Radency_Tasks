import { Request, Response, NextFunction } from 'express';
import { Sequelize } from 'sequelize';
import Note from '../models/note';

// CRUD Controllers
export class NotesController {
	// get all notes
	getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const notes = await Note.findAll();
			res.status(200).json({ notes });
		} catch (err) {
			console.log(err);
			next(err);
		}
	};

	// get note by id
	getNoteById = async (req: Request, res: Response, next: NextFunction) => {
		const noteId = req.params.id;
		try {
			const note = await Note.findByPk(noteId);
			if (!note) {
				return res.status(404).json({ message: 'Note not found!' });
			}
			res.status(200).json({ note });
		} catch (err) {
			console.log(err);
			next(err);
		}
	};

	// create note
	createNote = async (req: Request, res: Response, next: NextFunction) => {
		const newNote = req.body;
		try {
			const result = await Note.create({ ...newNote });
			console.log('Created Note');
			res.status(201).json({
				message: 'Note created successfully!',
				note: result
			});
		} catch (err) {
			console.log(err);
			next(err);
		}
	};

	// update note
	updateNote = async (req: Request, res: Response, next: NextFunction) => {
		const noteid = req.params.id;
		const updatedNote = req.body;
		try {
			const note = await Note.findByPk(noteid);
			if (!note) {
				return res.status(404).json({ message: 'Note not found!' });
			}
			note.name = updatedNote.name;
			note.content = updatedNote.content;
			note.category = updatedNote.category;
			note.datesMentioned = [updatedNote.datesMentioned];
			note.archived = updatedNote.archived;

			const result = await note.save();
			res.status(200).json({ message: 'User updated!', note: result });
		} catch (err) {
			console.log(err);
			next(err);
		}
	};

	// delete note
	deleteNote = async (req: Request, res: Response, next: NextFunction) => {
		const noteid = Number(req.params.id);
		try {
			const note = await Note.findByPk(noteid);
			if (!note) {
				return res.status(404).json({ message: 'Note not found!' });
			}
			await Note.destroy({
				where: {
					id: noteid
				}
			});
			res.status(200).json({ message: 'User deleted!' });
		} catch (err) {
			console.log(err);
			next(err);
		}
	};

	//get stats
	getStats = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// Calculate statistics
			const activeNotesCount = await Note.count({ where: { archived: false } });
			const archivedNotesCount = await Note.count({ where: { archived: true } });

			const categoryStats = await Note.findAll({
				attributes: ['category', [Sequelize.fn('COUNT', Sequelize.col('category')), 'count']],
				where: { archived: false },
				group: ['category'],
			});

			const stats = {
				activeNotesCount,
				archivedNotesCount,
				categoryStats,
			};

			res.json(stats);
		} catch (error) {
			res.status(500).json({ message: 'Error retrieving statistics', error });
		}
	};
}
