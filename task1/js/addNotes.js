import notesData from "./api/notesData.js";
import renderNotes from "./renderNotes.js";
import extractDates from "./utils/extractDates.js";
import showForm from "./showForm.js";
import updateSummary from "./updateSummary.js";

// Function to add a new note
const addNote = (event) => {
	event.preventDefault();

	const noteName = document.getElementById('noteName').value;
	const noteCategory = document.getElementById('noteCategory').value;
	const noteContent = document.getElementById('noteContent').value;
	const noteId = notesData.length + 1;
	const noteDatesMentioned = extractDates(noteContent);

	notesData.push(
		{
			id: noteId,
			name: noteName,
			createdAt: new Date(),
			category: noteCategory,
			content: noteContent,
			datesMentioned: noteDatesMentioned,
			archived: false,
		}
	);

	renderNotes();
	showForm();
	updateSummary();
	document.getElementById('createButton').innerHTML = 'Create Note';
	document.getElementById('addNoteForm').reset();
};

export default addNote;