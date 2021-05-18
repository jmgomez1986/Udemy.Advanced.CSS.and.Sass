// Make the navigation functional: After clicking on a menu item make it active (selected)
var navItems = document.querySelectorAll('.side-nav__item');

Array.from(navItems).forEach(function (item) {
	item.addEventListener('click', function () {
		// remove 'active' class from all navigation items
		navItems.forEach(function (item) {
			item.classList.remove('side-nav__item--active');
		});

		// add 'active' class only to the clicked navigation item
		this.classList.add('side-nav__item--active');
	});
});
