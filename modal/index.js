const btnSubmit = document.getElementById('btnSubmit');
const btnClose = document.getElementById('btnClose');
const containerLayer = document.querySelector('.container_layer');
const dimmedLayer = document.querySelector('.dimmed_layer');


closePopupEvent = () => {
	btnClose.addEventListener('click', () => {
		containerLayer.classList.remove('show')
		document.body.style.overflow='auto'
	});
	dimmedLayer.addEventListener('click', () =>{
		containerLayer.classList.remove('show')
		document.body.style.overflow='auto'
	})
};

openPopupEvent = () => {
	btnSubmit.addEventListener('click', () => {
		containerLayer.classList.add('show');
		document.body.style.overflow='hidden'

	});
};

const init = () => {
	openPopupEvent()
	closePopupEvent()
};

init();
