inputRef = document.querySelector('#validation-input');
lengthRef = inputRef.getAttribute('data-length');

const valueRef = inputRef.addEventListener('blur', event => {
	const valueInput = event.currentTarget.value.length;
	if (valueInput === Number(lengthRef)) {
		inputRef.classList.remove('invalid');
		inputRef.classList.add('valid');
	}
	inputRef.classList.add('invalid');
});
