const body = document.querySelector('body');
const menuCheckbox = document.querySelector('.navigation__checkbox');
const navButton = document.querySelector('.navigation__button');

// Se obtiene el width que ocupa el scroll
const scroll = window.innerWidth - document.documentElement.clientWidth;

function toggleScroll() {
	
	// Se agrega o se elimina el margen correspondiente a lo que ocupa el width del scroll
	if (!body.hasAttribute('style')) {
		body.setAttribute('style', `margin-right: ${scroll}px`);
	} else {
		body.removeAttribute('style');
	}
	
	// Se agrega la clase del overflow en Y para que el scroll no aparerezca
	body.classList.toggle('u-hide-overflow-y');
	
	const newPos = `right: calc(6rem + ${scroll}px);`;
	
	// Se cambia la posicion del boton del menu al estado inicial o el inicial mas el width del scroll
	// para que no se corra cuando el scroll desaparece
	if (!navButton.hasAttribute('style')) {
		navButton.setAttribute('style', newPos);
	} else {
		navButton.removeAttribute('style');
	}
}

// Con eso se desaparece el scroll pero deja todo en su lugar y no se corren los elementos cuando se
// abre el menu de opciones
menuCheckbox.addEventListener('change', () => {
	toggleScroll();
});

// Con esto se cierra el menu de opciones al navegar por algun link
function closeNav() {
	document.getElementById("navi-toggle").checked = false;
	toggleScroll();
}