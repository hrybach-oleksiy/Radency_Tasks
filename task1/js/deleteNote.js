import notesData from "./api/notesData.js";
import renderNotes from "./renderNotes.js";
import updateSummary from "./updateSummary.js";

// Function to remove a note
const deleteNote = (event) => {
	const noteId = parseInt(event.target.dataset.noteId);
	const noteIndex = notesData.findIndex((note) => note.id === noteId);

	if (noteIndex !== -1) {
		notesData.splice(noteIndex, 1);
		renderNotes();
		updateSummary();
	}
};

export default deleteNote;