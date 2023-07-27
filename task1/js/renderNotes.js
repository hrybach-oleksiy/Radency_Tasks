import notesData from './api/notesData.js';
import formatDate from './utils/formatDate.js';
import deleteNote from './deleteNote.js';
import archiveNote from './archiveNote.js';
import unarchiveNote from './unarchiveNote.js';

// Function to render notes in the table
const renderNotes = () => {
	const activeNotes = document.getElementById('activeNotes');
	const acrchivedNotes = document.getElementById('archivedNotes');
	activeNotes.innerHTML = '';
	acrchivedNotes.innerHTML = '';

	notesData.forEach(note => {
		const row = document.createElement('tr');
		const nameCell = document.createElement('td');
		const createdAtCell = document.createElement('td');
		const categoryCell = document.createElement('td');
		const contentCell = document.createElement('td');
		const datesCell = document.createElement('td');
		const actionCell = document.createElement('td');

		nameCell.innerHTML = note.name;
		createdAtCell.innerHTML = formatDate(note.createdAt);
		categoryCell.innerHTML = note.category;
		contentCell.innerHTML = note.content;
		datesCell.innerHTML = note.datesMentioned.join(', ');
		actionCell.insertAdjacentHTML('beforeend', `
		<button class='btn btn--edit'>Edit</button>
		<button class='btn btn--${note.archived ? 'unarchive' : 'archive'}'><img class='archive__img'
							 src='./assets/${note.archived ? 'unarchive.svg' : 'archive.svg'}'
							 alt='Archive Icon'
							 title=${note.archived ? 'Unarchive' : 'Archive'}
							 data-note-id='${note.id}'></button>
		<button class='btn btn--delete'><img class='delete__img'
							 src='./assets/remove.svg'
							 alt='Delete Icon'
							 title='Delete'
							 data-note-id='${note.id}'
							 ></button>
		`);

		row.appendChild(nameCell);
		row.appendChild(createdAtCell);
		row.appendChild(categoryCell);
		row.appendChild(contentCell);
		row.appendChild(datesCell);
		row.appendChild(actionCell);

		if (note.archived) {
			acrchivedNotes.appendChild(row);
		} else {
			activeNotes.appendChild(row);
		}
	});

	const deleteButtons = document.querySelectorAll('.btn--delete');
	const archiveButtons = document.querySelectorAll('.btn--archive');
	const unarchiveButtons = document.querySelectorAll('.btn--unarchive');

	deleteButtons.forEach((button) => {
		button.addEventListener('click', deleteNote);
	});

	archiveButtons.forEach((button) => {
		button.addEventListener('click', archiveNote);
	});

	unarchiveButtons.forEach((button) => {
		button.addEventListener('click', unarchiveNote);
	});
};

export default renderNotes;