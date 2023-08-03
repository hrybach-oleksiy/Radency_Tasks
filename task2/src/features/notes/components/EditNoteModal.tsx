import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Note } from '../../../types/note';
import { editNote } from '../notesSlice';
import setImg from '../../../utils/setImg';
import extractDates from '../../../utils/extractDates';
import NoteForm from './common/NoteForm/NoteForm';

interface EditNoteModalProps {
	note: Note;
	onClose: () => void;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({ note, onClose }) => {
	const [name, setName] = useState(note.name);
	const [content, setContent] = useState(note.content);
	const [category, setCategory] = useState(note.category);

	const dispatch = useDispatch();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const editedNote: Note = {
			...note,
			name,
			img: setImg(category),
			content,
			category,
			datesMentioned: extractDates(content),
		};
		dispatch(editNote(editedNote));
		onClose();
	};

	const formProps = {
		onFormSubmit: handleSubmit,
		onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value),
		onContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value),
		onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value),
		onClose,
		isFormToAdd: true,
		name,
		content,
		category,
	}

	return (
		<div className='modal'>
			<div className='modal-content'>
				<h2>Edit Note</h2>
				<NoteForm {...formProps} />
			</div>
		</div>
	);
};

export default EditNoteModal;