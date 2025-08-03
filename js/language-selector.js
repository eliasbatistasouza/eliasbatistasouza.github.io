/* Language Selector Functionality */
document.addEventListener('DOMContentLoaded', function () {
	const customSelect = document.querySelector('.custom-select');
	const selected = customSelect.querySelector('.select-selected');
	const items = customSelect.querySelector('.select-items');
	const options = items.querySelectorAll('div');

	// Toggle dropdown
	function toggleDropdown(e) {
		e.stopPropagation();
		e.preventDefault();
		
		const isVisible = items.classList.contains('show');
		if (isVisible) {
			items.classList.remove('show');
			items.style.display = 'none';
		} else {
			items.classList.add('show');
			items.style.display = 'block';
		}
		selected.classList.toggle('select-arrow-active', !isVisible);
	}

	selected.addEventListener('click', toggleDropdown);
	selected.addEventListener('touchend', toggleDropdown, { passive: false });

	// Handle option selection
	options.forEach(function (option) {
		function selectOption(e) {
			e.stopPropagation();
			e.preventDefault();
			
			const value = option.getAttribute('data-value');
			const text = option.textContent.trim();

			// Update selected text
			selected.childNodes[0].textContent = text;

			// Hide dropdown
			items.classList.remove('show');
			items.style.display = 'none';
			selected.classList.remove('select-arrow-active');

			// Navigate to URL (except for current page)
			if (value !== '#') {
				setTimeout(function() {
					window.location.href = value;
				}, 50);
			}
		}

		option.addEventListener('click', selectOption);
		option.addEventListener('touchend', selectOption, { passive: false });
	});

	// Close dropdown when clicking outside
	function closeDropdown(e) {
		if (!customSelect.contains(e.target)) {
			items.classList.remove('show');
			items.style.display = 'none';
			selected.classList.remove('select-arrow-active');
		}
	}

	document.addEventListener('click', closeDropdown);
	document.addEventListener('touchend', closeDropdown);
});
