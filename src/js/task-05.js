const textRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
let spanText = ' ';

const addText = textRef.addEventListener('input', () => {
	if (textRef) {
		spanRef.textContent = textRef;
	}
	spanRef.textContent = 'Anonymous';
});
