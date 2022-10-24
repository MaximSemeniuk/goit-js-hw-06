const categoriesRef = document.querySelector('#categories');

const itemElementsRef = categoriesRef.children;
console.log('Number of categories:', itemElementsRef.length);

const listCategoriesRef = document.querySelectorAll('.item');

for (const argList of listCategoriesRef) {
	const titleElements = Object.keys(argList.children);
	const catTitle = argList.children[titleElements[0]].textContent;
	console.log(`Category: ${catTitle}`);

	const listItem = argList.children[titleElements[1]];
	const listItemlength = listItem.children.length;
	console.log(`Elements: ${listItemlength}`);
}
