import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import NoteTable from '../../features/notes/components/NoteTable';
import AddNoteForm from '../../features/notes/components/AddNoteForm';
import SummaryTable from '../../features/notes/components/SummaryNoteTable';
import TableTitle from '../../features/notes/components/common/TableTitle';

const NotesListPage: React.FC = () => {
	const notes = useSelector((state: RootState) => state.notes);
	const activeNotes = notes.filter(note => !note.archived);
	const archiveNotes = notes.filter(note => note.archived);

	return (
		<>
			<TableTitle title='Active Notes' />
			<NoteTable notes={activeNotes} isArchived={false} />
			<AddNoteForm />
			{archiveNotes.length ? <TableTitle title='Archived Notes' /> : null}
			{archiveNotes.length ? <NoteTable notes={archiveNotes} isArchived={true} /> : null}
			<TableTitle title='Summary' />
			<SummaryTable />
		</>
	);
};

export default NotesListPage;