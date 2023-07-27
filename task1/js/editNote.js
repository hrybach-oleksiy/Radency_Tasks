import closeModal from './closeModal.js';
import renderNotes from './renderNotes.js';
import updateSummary from './updateSummary.js';
import notesData from './api/notesData.js';

const editNote = (event) => {
	event.preventDefault();
	const editNoteIdInput = document.getElementById('editNoteId');
	const editNoteNameInput = document.getElementById('editNoteName');
	const editNoteContentInput = document.getElementById('editNoteContent');
	const editNoteCategorySelect = document.getElementById('editNoteCategory');

	const noteId = parseInt(editNoteIdInput.value);
	const noteName = editNoteNameInput.value;
	const noteContent = editNoteContentInput.value;
	const noteCategory = editNoteCategorySelect.value;

	const note = notesData.find((note) => note.id === noteId);

	note.name = noteName;
	note.content = noteContent;
	note.category = noteCategory;

	renderNotes();
	updateSummary();
	closeModal();
};

export default editNote;