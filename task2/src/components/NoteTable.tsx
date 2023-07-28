import React from "react";
import { Note } from "../types/note";
import archivedIcon from '../assets/archive.svg';
import removeIcon from '../assets/remove.svg';
import formatDate from "../utils/formatDate";

interface NoteTableProps {
	notes: Note[];
}

const NoteTable: React.FC<NoteTableProps> = ({ notes }) => {
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
							<button className={`btn btn--edit' data-note-id='${note.id}`}>Edit</button>
							<button className={`btn btn--${note.archived ? ' unarchive' : 'archive'}`}>
								<img className='archive__img'
									// src={`./assets/${note.archived ? 'unarchive.svg' : 'archive.svg'}`}
									src={archivedIcon}
									alt='Archive Icon'
									title={note.archived ? 'Unarchive' : 'Archive'}
									data-note-id={note.id} />
							</button>
							<button className='btn btn--delete'>
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

export default NoteTable;