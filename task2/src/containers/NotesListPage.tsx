import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // Import RootState from the store
import NoteTable from "../components/NoteTable";

const NotesListPage: React.FC = () => {
	const notes = useSelector((state: RootState) => state.notes);

	return (
		<div>
			<h2>Notes List</h2>
			<NoteTable notes={notes} />
		</div>
	);
};

export default NotesListPage;