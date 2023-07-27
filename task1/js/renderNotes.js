import notesData from './api/notesData.js';
import formatDate from './utils/formatDate.js';
import deleteNote from './deleteNote.js';

// Function to render notes in the table
const renderNotes = () => {
	const activeNotes = document.getElementById('activeNotes');
	activeNotes.innerHTML = '';

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
		<button class='btn btn--archive'><img class='archive__img'
							 src='./assets/archive.svg'
							 alt='Archive Icon'
							 title='Archive'></button>
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

		activeNotes.appendChild(row);
	});

	const deleteButtons = document.querySelectorAll('.btn--delete');
	deleteButtons.forEach((button) => {
		button.addEventListener('click', deleteNote);
	});
};

export default renderNotes;