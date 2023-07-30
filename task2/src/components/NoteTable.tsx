import { useState } from "react";
import { useDispatch } from "react-redux";

import { Note } from "../types/note";
import archivedIcon from '../assets/archive.svg';
import removeIcon from '../assets/remove.svg';
import formatDate from "../utils/formatDate";
import { deleteNote, archiveNote } from "../store/notes/notesSlice";
import EditNoteModal from "./EditNoteModal";
interface NoteTableProps {
	notes: Note[];
}

const NoteTable: React.FC<NoteTableProps> = ({ notes }) => {
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);
	const [selectedNote, setSelectedNote] = useState<Note | null>(null);

	const handleEditNote = (note: Note) => {
		setSelectedNote(note);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleDeleteNote = (noteId: number) => {
		dispatch(deleteNote(noteId));
	}

	const handleArchiveNote = (noteId: number) => {
		dispatch(archiveNote(noteId));
	}

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
						<th className="btn-cell">
							<button className="btn btn--archive"><img src={archivedIcon}
								alt="Archive Icon"
								title="Archive" /></button>
							<button className="btn btn--delete"><img src={removeIcon}
								alt="Delete Icon"
								title="Delete" /></button>
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
							<td className="btn-cell">
								<button onClick={() => { handleEditNote(note) }} className={`btn btn--edit' data-note-id='${note.id}`}>Edit</button>
								<button onClick={() => handleArchiveNote(note.id)} className={`btn btn--${note.archived ? ' unarchive' : 'archive'}`}>
									<img className='archive__img'
										// src={`./assets/${note.archived ? 'unarchive.svg' : 'archive.svg'}`}
										src={archivedIcon}
										alt='Archive Icon'
										title={note.archived ? 'Unarchive' : 'Archive'}
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