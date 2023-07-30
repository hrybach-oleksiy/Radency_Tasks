import React from "react";
import { useDispatch } from "react-redux";

import { Note } from "../types/note";
import unarchivedIcon from '../assets/unarchive.svg';
import removeIcon from '../assets/remove.svg';
import formatDate from "../utils/formatDate";
import { deleteNote, unarchiveNote } from "../store/notes/notesSlice";

interface NoteTableProps {
	notes: Note[];
}

const ArchiveTable: React.FC<NoteTableProps> = ({ notes }) => {
	const dispatch = useDispatch();

	const handleDeleteNote = (noteId: number) => {
		dispatch(deleteNote(noteId));
	}

	const handleUnarchiveNote = (noteId: number) => {
		dispatch(unarchiveNote(noteId));
	}

	return (
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
						<button className="btn btn--archive"><img src={unarchivedIcon}
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
							<button className={`btn btn--edit' data-note-id='${note.id}`}>Edit</button>
							<button onClick={() => handleUnarchiveNote(note.id)} className={`btn btn--${note.archived ? ' unarchive' : 'archive'}`}>
								<img className='archive__img'
									src={unarchivedIcon}
									alt='Unarchive Icon'
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
	);
};

export default ArchiveTable;