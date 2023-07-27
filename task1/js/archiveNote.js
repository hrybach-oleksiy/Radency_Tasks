import notesData from "./api/notesData.js";
import renderNotes from "./renderNotes.js";
import updateSummary from "./updateSummary.js";

// Function to archive a note
const archiveNote = (event) => {
	const noteId = parseInt(event.target.dataset.noteId);

	notesData.forEach(note => {
		if (note.id === noteId) {
			note.archived = true;
			renderNotes();
			updateSummary();
		}
	});
};

export default archiveNote;