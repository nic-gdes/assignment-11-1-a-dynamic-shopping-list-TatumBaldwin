// Pull the input, form and ul from the html

const list = document.querySelector('#list');
const form = document.querySelector('#addItem');
const input = document.querySelector('#itemToAdd');



// add event listener to the form to look for clicks

form.addEventListener('submit', function(event) {
  
    // remove the function's default

    event.preventDefault();

    // Assign a variable to the user input

    const value = input.value;

    // Create a new list item

    const newListItem = document.createElement('li');

    // Create a span inside of the new list item

    const newSpan = document.createElement('span');


    // Create a button to remove list items



    // Add the text "remove" to the button

    // Add event listener to watch the remove button for clicks

    // target the click event

    // target the button

    // remove list item

})
// add the remove button to the new list item

// clear the input after submission

// focus back to the input