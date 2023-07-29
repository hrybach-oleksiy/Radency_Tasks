// src/components/AddNoteForm.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

import { addNote } from "../store/notes/notesSlice";
import { Note } from "../types/note";
import extractDates from "../utils/extractDates";

import taskLogo from '../assets/task.svg';
import randomLogo from '../assets/random.svg';
import ideaLogo from '../assets/idea.svg';

const AddNoteForm: React.FC = () => {
	const [name, setName] = useState('');
	const [content, setContent] = useState('');
	const [category, setCategory] = useState('Task');
	const [isFormHidden, setIsFormHidden] = useState(true);

	const notesArrayLength = useSelector((state: RootState) => state.notes.length);

	const setImg = (category: string) => {
		if (category === 'Task') {
			return taskLogo;
		}
		if (category === 'Random Thought') {
			return randomLogo;
		}
		if (category === 'Idea') {
			return ideaLogo;
		}
	}

	const handleFormVisibility = () => {
		setIsFormHidden(!isFormHidden)
	}

	const dispatch = useDispatch();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const newNote: Note = {
			id: notesArrayLength + 1,
			img: setImg(category),
			name,
			createdAt: String(new Date()),
			content,
			category,
			datesMentioned: extractDates(content),
			archived: false,
		};

		dispatch(addNote(newNote));
		setName('');
		setContent('');
		setCategory('Task');
		setIsFormHidden(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={`add-note-form ${isFormHidden ? '' : 'active'}`}>
				<div>
					<label>Name:</label>
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
				</div>
				<div>
					<label>Content:</label>
					<textarea value={content} onChange={(e) => setContent(e.target.value)} required />
				</div>
				<div>
					<label>Category:</label>
					<select value={category} onChange={(e) => setCategory(e.target.value)} required>
						<option value="Task">Task</option>
						<option value="Random Thought">Random Thought</option>
						<option value="Idea">Idea</option>
					</select>
				</div>
				<button type="submit">Add Note</button>
			</form>
			<button onClick={handleFormVisibility}>{isFormHidden ? 'Create Note' : 'Close Form'}</button>
		</>
	);
};

export default AddNoteForm;
