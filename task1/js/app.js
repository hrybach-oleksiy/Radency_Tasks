import showForm from './showForm.js';
import renderNotes from './renderNotes.js';
import addNote from './addNotes.js';
import updateSummary from './updateSummary.js';
import closeModal from './closeModal.js';
import editNote from './editNote.js';

const createNoteBtn = document.getElementById('createButton');
const addNoteForm = document.getElementById('addNoteForm');
const closeModalBtn = document.getElementById('closeModal');
const editNoteForm = document.getElementById('editNoteForm');

createNoteBtn.addEventListener('click', () => {
	if (createNoteBtn.textContent === 'Create Note') {
		createNoteBtn.textContent = 'Close Form';
	} else {
		createNoteBtn.textContent = 'Create Note';
	}
	showForm();
});

addNoteForm.addEventListener('submit', addNote);

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
	const modal = document.getElementById('editModal');
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});

editNoteForm.addEventListener('submit', editNote);

renderNotes();
updateSummary();