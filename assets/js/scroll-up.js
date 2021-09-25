const btnUp = document.querySelector('#btnUp');
const scrollUp = () => {
	let currentScroll = document.documentElement.scrollTop;
	if (currentScroll > 0) {
		window.scrollTo(0, 0);
	}
};

btnUp.addEventListener('click', scrollUp);

window.onscroll = () => {
	let scroll = document.documentElement.scrollTop;

	if (scroll > 100) {
		console.log('Es mayor a 100');
		btnUp.style.transform = 'scale(1)';
	} else {
		btnUp.style.transform = 'scale(0)';
	}
};
