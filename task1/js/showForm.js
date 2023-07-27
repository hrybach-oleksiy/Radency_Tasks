const showForm = () => {
	const form = document.getElementById('addNoteForm');
	if (form.classList.contains('active')) {
		form.classList.remove('active');
	} else {
		form.classList.add('active');
	}

};

export default showForm;