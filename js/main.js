// toggle addresses panels
const togglers = document.querySelectorAll('.address__header');
togglers.forEach(itm => {
	itm.addEventListener('click', e => {
		e.target.closest('.address').classList.toggle('expand');
	});
});

// Show & close modal
const modal = document.querySelector('.modal');
const sendRequestsBtns = document.querySelectorAll(
	'#destinations .card .btn-primary'
);
sendRequestsBtns.forEach(btn => btn.addEventListener('click', openModal));

function openModal() {
	modal.classList.add('show');
}
function closeModal() {
	modal.classList.remove('show');
}
