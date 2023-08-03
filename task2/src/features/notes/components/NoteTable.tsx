import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Note } from '../../../types/note';
import formatDate from '../../../utils/formatDate';
import { deleteNote, archiveNote, unarchiveNote } from '../notesSlice';
import EditNoteModal from './EditNoteModal';
import TableButton from './common/TableButton/TableButton';

// import styles from './NoteTable.module.scss';

interface NoteTableProps {
	notes: Note[];
	isArchived?: boolean;
}

const NoteTable: React.FC<NoteTableProps> = ({ notes, isArchived }) => {
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);
	const [selectedNote, setSelectedNote] = useState<Note | null>(null);

	const handleEditNote = (note: Note) => {
		setSelectedNote(note);
		setShowModal(true);
		document.body.classList.add('modal-open');
	};

	const handleCloseModal = () => {
		setShowModal(false);
		document.body.classList.remove('modal-open');
	};

	const handleDeleteNote = (noteId: number) => {
		dispatch(deleteNote(noteId));
	}

	const handleArchiveNote = (noteId: number) => {
		dispatch(archiveNote(noteId));
	}

	const handleUnarchiveNote = (noteId: number) => {
		dispatch(unarchiveNote(noteId));
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Created</th>
						<th>Category</th>
						<th>Content</th>
						<th>Dates</th>
						<th className='btn-cell'>
							<TableButton type={isArchived ? 'Unarchived' : 'Archived'} />
							<TableButton type={'Remove'} />
						</th>
					</tr>
				</thead>
				<tbody>
					{notes.map((note) => (
						<tr key={note.id}>
							<td>
								<img src={note.img} alt={`${note.category} Icon`} />
							</td>
							<td>{note.name}</td>
							<td>{formatDate(note.createdAt)}</td>
							<td>{note.content}</td>
							<td>{note.category}</td>
							<td>{note.datesMentioned.join(', ')}</td>
							<td className='btn-cell'>
								<TableButton onBtnClick={() => handleEditNote(note)} type='Edit' content='Edit' />
								<TableButton onBtnClick={() => isArchived ? handleUnarchiveNote(note.id) : handleArchiveNote(note.id)}
									type={isArchived ? 'Unarchived' : 'Archived'} className='archive__img' />
								<TableButton onBtnClick={() => handleDeleteNote(note.id)} type='Remove' className='remove__img' />
							</td>
						</tr>
					))}
				</tbody>
			</table >
			{showModal && selectedNote && (<EditNoteModal note={selectedNote} onClose={handleCloseModal} />)}
		</>
	);
};

export default NoteTable;