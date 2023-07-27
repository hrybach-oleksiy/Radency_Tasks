import notesData from "./api/notesData.js";
import renderNotes from "./renderNotes.js";
import updateSummary from "./updateSummary.js";

// Function to unarchive a note
const unarchiveNote = (event) => {
	const noteId = parseInt(event.target.dataset.noteId);

	notesData.forEach(note => {
		if (note.id === noteId) {
			note.archived = false;
			renderNotes();
			updateSummary();
		}
	});
};

export default unarchiveNote;