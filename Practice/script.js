const addButton = document.getElementById('add-button');
const inputText = document.getElementById('input-text');
const listContainer = document.getElementById('list-container');

let addItem = function () {
	// 1. Get the input value
	const value = inputText.value.trim();

	// 2. Check that the input is not empty
	if (value !== '') {
		// 3. Create a new list item
		const listItem = document.createElement('li');

		// 4. Set the text of the list item
		listItem.textContent = value;

		// 5. Append the new list item to the list container
		listContainer.appendChild(listItem);

		// 6. Clear the input field
		inputText.value = '';
	}
};

// Add an event listener so clicking the button runs addItem
addButton.addEventListener('click', addItem);