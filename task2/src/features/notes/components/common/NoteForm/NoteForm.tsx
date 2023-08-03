import './styles.scss';

interface NoteFormProps {
	onFormSubmit: (event: React.FormEvent) => void;
	onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onClose?: () => void;
	name: string;
	content: string;
	category: string;
	isFormHidden?: boolean;
	isFormToAdd: boolean;
}

const NoteForm: React.FC<NoteFormProps> = (props) => {
	return (
		<form onSubmit={props.onFormSubmit} className={`${props.isFormToAdd ? '' : 'add-note-form'} ${props.isFormHidden ? '' : 'active'}`}>
			<div>
				<label>Name:</label>
				<input type='text' value={props.name} onChange={props.onNameChange} required />
			</div>
			<div>
				<label>Content:</label>
				<textarea rows={4} cols={50} value={props.content} onChange={props.onContentChange} required />
			</div>
			<div>
				<label>Category:</label>
				<select value={props.category} onChange={props.onCategoryChange} required>
					<option value='Task'>Task</option>
					<option value='Random Thought'>Random Thought</option>
					<option value='Idea'>Idea</option>
				</select>
			</div>
			{props.isFormToAdd
				?
				<div className='form-btn-wrapper'>
					<button className='form-btn' type='submit'>Save Changes</button>
					<button className='form-btn' type='button' onClick={props.onClose}>Cancel</button>
				</div>
				:
				<button className='form-btn' type='submit'>Add Note</button>
			}
		</form>
	)
}

export default NoteForm;