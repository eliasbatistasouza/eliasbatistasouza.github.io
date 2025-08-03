/* Language Selector Functionality */
document.addEventListener('DOMContentLoaded', function () {
	const customSelect = document.querySelector('.custom-select');
	const selected = customSelect.querySelector('.select-selected');
	const items = customSelect.querySelector('.select-items');
	const options = items.querySelectorAll('div');

	// Toggle dropdown
	selected.addEventListener('click', function (e) {
		e.stopPropagation();
		items.style.display = items.style.display === 'block' ? 'none' : 'block';
		this.classList.toggle('select-arrow-active');
	});

	// Handle option selection
	options.forEach(function (option) {
		option.addEventListener('click', function () {
			const value = this.getAttribute('data-value');
			const text = this.textContent;

			// Update selected text
			selected.childNodes[0].textContent = text;

			// Hide dropdown
			items.style.display = 'none';
			selected.classList.remove('select-arrow-active');

			// Navigate to URL (except for current page)
			if (value !== '#') {
				window.location.href = value;
			}
		});
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', function () {
		items.style.display = 'none';
		selected.classList.remove('select-arrow-active');
	});
});
