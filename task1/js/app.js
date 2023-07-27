import showForm from "./showForm.js";
import renderNotes from "./renderNotes.js";

const createNoteBtn = document.getElementById('createButton');
createNoteBtn.addEventListener('click', () => {
	if (createNoteBtn.textContent === 'Create Note') {
		createNoteBtn.textContent = 'Close Form';
	} else {
		createNoteBtn.textContent = 'Create Note';
	}
	showForm();
});

renderNotes();