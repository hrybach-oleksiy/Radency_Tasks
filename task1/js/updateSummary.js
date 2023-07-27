import notesData from './api/notesData.js';

const updateSummary = () => {
	const summaryData = {
		Task: { active: 0, archived: 0 },
		'Random Thought': { active: 0, archived: 0 },
		Idea: { active: 0, archived: 0 },
	};

	const summaryNotes = document.getElementById('summaryNotes');

	notesData.forEach((note) => {
		if (!note.archived) {
			summaryData[note.category].active++;
		} else {
			summaryData[note.category].archived++;
		}
	});

	summaryNotes.innerHTML = '';

	Object.keys(summaryData).forEach((category) => {
		const row = document.createElement('tr');
		const categoryCell = document.createElement('td');
		const activeCountCell = document.createElement('td');
		const archivedCountCell = document.createElement('td');

		categoryCell.textContent = category;
		row.appendChild(categoryCell);

		activeCountCell.textContent = summaryData[category].active;
		row.appendChild(activeCountCell);

		archivedCountCell.textContent = summaryData[category].archived;
		row.appendChild(archivedCountCell);

		summaryNotes.appendChild(row);
	});
};

export default updateSummary;