import showForm from "./showForm.js";
import renderNotes from "./renderNotes.js";
import addNote from "./addNotes.js";
import updateSummary from "./updateSummary.js";

// Event Listeners
const createNoteBtn = document.getElementById('createButton');
const addNoteForm = document.getElementById('addNoteForm');

createNoteBtn.addEventListener('click', () => {
	if (createNoteBtn.textContent === 'Create Note') {
		createNoteBtn.textContent = 'Close Form';
	} else {
		createNoteBtn.textContent = 'Create Note';
	}
	showForm();
});

addNoteForm.addEventListener('submit', addNote);

// Function calls
renderNotes();
updateSummary();