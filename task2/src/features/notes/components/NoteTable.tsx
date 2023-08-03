import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Note } from '../../../types/note';
import archivedIcon from '../../../../assets/archive.svg';
import unarchivedIcon from '../../../../assets/unarchive.svg';
import removeIcon from '../../../../assets/remove.svg';
import formatDate from '../../../utils/formatDate';
import { deleteNote, archiveNote, unarchiveNote } from '../notesSlice';
import EditNoteModal from './EditNoteModal';

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
							<button className='btn'><img src={isArchived ? unarchivedIcon : archivedIcon}
								alt={`${isArchived ? 'Unarchive Icon' : 'Archive Icon'}`}
								title={`${isArchived ? 'Unarchive' : 'Archive'}`} /></button>
							<button className='btn'><img src={removeIcon}
								alt='Delete Icon'
								title='Delete' /></button>
						</th>
					</tr>
				</thead>
				<tbody>
					{notes.map((note) => (
						<tr key={note.id}>
							<td>
								<img src={note.img} alt={`${note.name} Logo`} />
							</td>
							<td>{note.name}</td>
							<td>{formatDate(note.createdAt)}</td>
							<td>{note.content}</td>
							<td>{note.category}</td>
							<td>{note.datesMentioned.join(', ')}</td>
							<td className='btn-cell'>
								<button onClick={() => handleEditNote(note)} className={`btn btn--edit' data-note-id='${note.id}`}>Edit</button>
								<button onClick={() => isArchived ? handleUnarchiveNote(note.id) : handleArchiveNote(note.id)} className='btn' >
									<img className='archive__img'
										src={isArchived ? unarchivedIcon : archivedIcon}
										alt={`${isArchived ? 'Unarchive Icon' : 'Archive Icon'}`}
										title={`${isArchived ? 'Unarchive' : 'Archive'}`}
										data-note-id={note.id} />
								</button>
								<button onClick={() => handleDeleteNote(note.id)} className='btn btn--delete'>
									<img className='delete__img'
										src={removeIcon}
										alt='Delete Icon'
										title='Delete'
										data-note-id={note.id}
									/>
								</button>
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