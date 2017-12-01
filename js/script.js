	var link = document.querySelector('.adres-form button');
	var popup = document.querySelector('.form-positioner');
	var close = popup.querySelector('.close-btn');

	link.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.add('active');
	});

	close.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.remove('active');
	});

	window.addEventListener('keydown', function(event) {
		if (event.keyCode === 27 && popup.classList.contains('active')) {
			popup.classList.remove('active');
		}
	});
