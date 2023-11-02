// Pull the input, form and ul from the html

const list = document.querySelector('#list');
const form = document.querySelector('#addItem');
const input = document.querySelector('#itemToAdd');



// add event listener to the form to look for clicks

form.addEventListener('submit', function(event) {
  
    // remove the function's default

    event.preventDefault();

    // Assign a variable to the user input

    const toDoValue = input.value;

    // Create a new list item

    const newListItem = document.createElement('li');

    // Create a span inside of the new list item

    const newSpan = document.createElement('span');
    newSpan.textContent = toDoValue;
    newListItem.appendChild(newSpan);

    // Create a button to remove list items

    const removeBtn = document.createElement('button');

    // Add the text "remove" to the button

    removeBtn.textContent = "Remove";

    // Add event listener to watch the remove button for clicks

    removeBtn.addEventListener('click', function(event) {

    // target the click event

        const btn = event.target;

    // target the button

        const parent = btn.parentNode;

    // remove list item

        parent.remove();
        

    })

// add the remove button to the new list item

newListItem.appendChild(removeBtn);

//append the child

list.appendChild(newListItem);

// clear the input after submission

input.value = '';

// focus back to the input

})