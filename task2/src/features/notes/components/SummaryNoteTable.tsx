import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

import taskLogo from '../../../assets/task.svg';
import randomLogo from '../../../assets/random.svg';
import ideaLogo from '../../../assets/idea.svg';

const SummaryTable: React.FC = () => {
	const notes = useSelector((state: RootState) => state.notes);
	const activeNotes = notes.filter((note) => !note.archived);
	const archivedNotes = notes.filter((note) => note.archived);

	return (
		<div>
			<h2>Summary</h2>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Note Category</th>
						<th>Active</th>
						<th>Archived</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src={taskLogo} alt='Task Logo' />
						</td>
						<td>Task</td>
						<td>{activeNotes.filter((note) => note.category === 'Task').length}</td>
						<td>{archivedNotes.filter((note) => note.category === 'Task').length}</td>
					</tr>
					<tr>
						<td>
							<img src={randomLogo} alt='Random Thoughts Logo' />
						</td>
						<td>Random Thought</td>
						<td>{activeNotes.filter((note) => note.category === 'Random Thought').length}</td>
						<td>{archivedNotes.filter((note) => note.category === 'Random Thought').length}</td>
					</tr>
					<tr>
						<td>
							<img src={ideaLogo} alt='Idea Logo' />
						</td>
						<td>Idea</td>
						<td>{activeNotes.filter((note) => note.category === 'Idea').length}</td>
						<td>{archivedNotes.filter((note) => note.category === 'Idea').length}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default SummaryTable;