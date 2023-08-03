import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Note } from '../../../types/note';
import { editNote } from '../notesSlice';
import setImg from '../../../utils/setImg';
import extractDates from '../../../utils/extractDates';

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

	return (
		<div className='modal'>
			<div className='modal-content'>
				<h2>Edit Note</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Name:</label>
						<input type='text' value={name} onChange={(event) => setName(event.target.value)} required />
					</div>
					<div>
						<label>Content:</label>
						<textarea rows={4} cols={50} value={content} onChange={(event) => setContent(event.target.value)} required />
					</div>
					<div>
						<label>Category:</label>
						<select value={category} onChange={(event) => {
							setCategory(event.target.value)
						}} required>
							<option value='Task'>Task</option>
							<option value='Random Thought'>Random Thought</option>
							<option value='Idea'>Idea</option>
						</select>
					</div>
					<div className='form-btn-wrapper'>
						<button className='form-btn' type='submit'>Save Changes</button>
						<button className='form-btn' type='button' onClick={onClose}>Cancel</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditNoteModal;