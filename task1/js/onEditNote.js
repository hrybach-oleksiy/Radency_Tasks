import notesData from './api/notesData.js';
import openModal from './openModal.js';

const onEditNote = (event) => {
	const noteId = parseInt(event.target.dataset.noteId);
	const note = notesData.find((note) => note.id === noteId);

	openModal();

	const editNoteIdInput = document.getElementById('editNoteId');
	const editNoteNameInput = document.getElementById('editNoteName');
	const editNoteContentInput = document.getElementById('editNoteContent');
	const editNoteCategorySelect = document.getElementById('editNoteCategory');

	editNoteIdInput.value = note.id;
	editNoteNameInput.value = note.name;
	editNoteContentInput.value = note.content;
	editNoteCategorySelect.value = note.category;
};

export default onEditNote;