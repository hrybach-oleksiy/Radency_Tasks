import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import NoteTable from '../../features/notes/components/NoteTable';
import AddNoteForm from '../../features/notes/components/AddNoteForm';
import SummaryTable from '../../features/notes/components/SummaryNoteTable';

const NotesListPage: React.FC = () => {
	const notes = useSelector((state: RootState) => state.notes);
	const activeNotes = notes.filter(note => !note.archived);
	const archiveNotes = notes.filter(note => note.archived);

	return (
		<>
			<h2>Active Notes</h2>
			<NoteTable notes={activeNotes} isArchived={false} />
			<AddNoteForm />
			{archiveNotes.length ? <h2>Archived Notes</h2> : null}
			{archiveNotes.length ? <NoteTable notes={archiveNotes} isArchived={true} /> : null}
			<SummaryTable />
		</>
	);
};

export default NotesListPage;