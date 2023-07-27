const closeModal = () => {
	const modal = document.getElementById('editModal');
	modal.style.display = 'none';
	document.body.classList.remove('modal-open');
};

export default closeModal;