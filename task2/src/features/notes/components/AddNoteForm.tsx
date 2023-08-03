import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

import { addNote } from '../notesSlice';
import { Note } from '../../../types/note';
import extractDates from '../../../utils/extractDates';
import setImg from '../../../utils/setImg';
import NoteForm from './common/NoteForm/NoteForm';

const AddNoteForm: React.FC = () => {
	const [name, setName] = useState('');
	const [content, setContent] = useState('');
	const [category, setCategory] = useState('Task');
	const [isFormHidden, setIsFormHidden] = useState(true);

	const notesArrayLength = useSelector((state: RootState) => state.notes.length);

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

	const formProps = {
		onFormSubmit: handleSubmit,
		onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value),
		onContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value),
		onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value),
		isFormToAdd: false,
		name,
		content,
		category,
		isFormHidden,
	}

	return (
		<>
			<NoteForm {...formProps} />
			<button className='create-note-btn' onClick={handleFormVisibility}>{isFormHidden ? 'Create Note' : 'Close Form'}</button>
		</>
	);
};

export default AddNoteForm;
