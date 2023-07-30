import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import NoteTable from "../components/NoteTable";
import AddNoteForm from "../components/AddNoteForm";
import SummaryTable from "../components/SummaryTable";
import ArchiveTable from "../components/ArchiveTable";

const NotesListPage: React.FC = () => {
	const notes = useSelector((state: RootState) => state.notes);
	const activeNotes = notes.filter(note => !note.archived);
	const archiveNotes = notes.filter(note => note.archived);

	return (
		<div>
			<h2>Active Notes</h2>
			<NoteTable notes={activeNotes} />
			<AddNoteForm />
			{archiveNotes.length ? <h2>Archived Notes</h2> : null}
			{archiveNotes.length ? <ArchiveTable notes={archiveNotes} /> : null}
			<SummaryTable />
		</div>
	);
};

export default NotesListPage;