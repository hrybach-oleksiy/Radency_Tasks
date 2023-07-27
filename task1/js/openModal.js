const openModal = () => {
	const modal = document.getElementById('editModal');
	modal.style.display = 'block';
	document.body.classList.add('modal-open');
};

export default openModal;