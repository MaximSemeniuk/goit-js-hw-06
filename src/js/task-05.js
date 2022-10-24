const textRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const addText = textRef.addEventListener('input', event => {
	const valueInput = event.currentTarget.value;
	if (valueInput.length === 0) {
		return (spanRef.textContent = 'Anonimus');
	}
	spanRef.textContent = event.currentTarget.value;
});
