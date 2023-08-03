import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

import TableImg from './common/TableImg/TableImg';

const SummaryTable: React.FC = () => {
	const notes = useSelector((state: RootState) => state.notes);
	const activeNotes = notes.filter((note) => !note.archived);
	const archivedNotes = notes.filter((note) => note.archived);

	return (
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
						<TableImg type='Task' />
					</td>
					<td>Task</td>
					<td>{activeNotes.filter((note) => note.category === 'Task').length}</td>
					<td>{archivedNotes.filter((note) => note.category === 'Task').length}</td>
				</tr>
				<tr>
					<td>
						<TableImg type='Random Thought' />
					</td>
					<td>Random Thought</td>
					<td>{activeNotes.filter((note) => note.category === 'Random Thought').length}</td>
					<td>{archivedNotes.filter((note) => note.category === 'Random Thought').length}</td>
				</tr>
				<tr>
					<td>
						<TableImg type='Idea' />
					</td>
					<td>Idea</td>
					<td>{activeNotes.filter((note) => note.category === 'Idea').length}</td>
					<td>{archivedNotes.filter((note) => note.category === 'Idea').length}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default SummaryTable;