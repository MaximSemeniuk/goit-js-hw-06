let counterValue = 0;

const decrRef = document.querySelector('[data-action="decrement"]');
const incrRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

incrRef.addEventListener('click', event => {
	counterValue += 1;
	valueRef.textContent = counterValue;
});

decrRef.addEventListener('click', event => {
	counterValue -= 1;
	valueRef.textContent = counterValue;
});
