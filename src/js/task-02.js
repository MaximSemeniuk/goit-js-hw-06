const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const elementsRef = document.querySelector('#ingredients');

// const addIngredients = function (addIngredients) {
// 	const newList = document.createElement('li');
// 	newList.classList.add('item');
// 	newList.textContent('ingredients');
// };

const listElements = document.querySelector('#ingredients');

const makeIngredients = ingredient => {
	return ingredient.map(ingredient => {
		const itemElements = document.createElement('li');
		itemElements.classList.add('item');
		itemElements.textContent = ingredient;
		return itemElements;
	});
};

const elements = makeIngredients(ingredients);
listElements.append(...elements);
