import Note from '../models/note.js';

// CRUD Controllers

export class NotesController {
	//get all notes
	getAllNotes = (req, res, next) => {
		Note.findAll()
			.then(notes => {
				res.status(200).json({ notes: notes });
			})
			.catch(err => console.log(err));
	};

	//get note by id
	getNoteById = (req, res, next) => {
		const noteId = req.params.id;

		Note.findByPk(noteId)
			.then(note => {
				if (!note) {
					return res.status(404).json({ message: 'Note not found!' });
				}
				res.status(200).json({ note: note });
			})
			.catch(err => console.log(err));
	};

	//create note
	createNote = (req, res, next) => {
		const newNote = req.body;

		Note.create({
			...newNote
		})
			.then(result => {
				console.log('Created User');
				res.status(201).json({
					message: 'User created successfully!',
					note: result
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	//update note
	updateNote = (req, res, next) => {
		const noteid = req.params.id;
		const updatedNote = req.body;

		Note.findByPk(noteid)
			.then(note => {
				if (!note) {
					return res.status(404).json({ message: 'Note not found!' });
				}
				note.name = updatedNote.name;
				note.content = updatedNote.content;
				note.category = updatedNote.category;
				note.datesMentioned = [updatedNote.datesMentioned];
				note.archived = updatedNote.archived;
				return note.save();
			})
			.then(result => {
				res.status(200).json({ message: 'User updated!', note: result });
			})
			.catch(err => console.log(err));
	};

	//delete note
	deleteNote = (req, res, next) => {
		const noteid = Number(req.params.id);

		Note.findByPk(noteid)
			.then(note => {
				if (!note) {
					return res.status(404).json({ message: 'Note not found!' });
				}
				return Note.destroy({
					where: {
						id: noteid
					}
				});
			})
			.then(result => {
				res.status(200).json({ message: 'User deleted!' });
			})
			.catch(err => console.log(err));
	};

	//get stats
	// getStats = (req, res) => {
	// 	const stats = repository.getStats();
	// 	res.status(200).json(stats);
	// };
}


