import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NoteTable from "../components/NoteTable";
import AddNoteForm from "../components/AddNoteForm";
import SummaryTable from "../components/SummaryTable";

const NotesListPage: React.FC = () => {
	const notes = useSelector((state: RootState) => state.notes);
	const activeNotes = notes.filter(note => !note.archived);
	const archiveNotes = notes.filter(note => note.archived);

	return (
		<div>
			<h2>Active Notes</h2>
			<NoteTable notes={activeNotes} isArchived={false} />
			<AddNoteForm />
			{archiveNotes.length ? <h2>Archived Notes</h2> : null}
			{archiveNotes.length ? <NoteTable notes={archiveNotes} isArchived={true} /> : null}
			<SummaryTable />
		</div>
	);
};

export default NotesListPage;