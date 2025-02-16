//PART 1
const amButton = document.getElementById('am');
const pmButton = document.getElementById('pm');
const greeting = document.getElementById('greeting');

//For am
amButton.addEventListener('click', () => {
    greeting.textContent = 'Good morning!';
});
//For pm
pmButton.addEventListener('click', () => {
    greeting.textContent = 'Good night!';
});

//PART 2

const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const colorDiv = document.getElementById('div_color');


redButton.addEventListener('click', () => {
    colorDiv.setAttribute('class', 'bg_red');
});

yellowButton.addEventListener('click', () => {
    colorDiv.setAttribute('class', 'bg_yellow');
});

greenButton.addEventListener('click', () => {
    colorDiv.setAttribute('class', 'bg_green');
});

blueButton.addEventListener('click', () => {
    colorDiv.setAttribute('class', 'bg_blue');
});

//PART 3
const userInput = document.querySelector('#usrInput');
const addButton = document.querySelector('#addBtn');
const myList = document.querySelector('#myUL');


addButton.addEventListener('click', () => {
    //Get the value from the input box
    const inputValue = userInput.value.trim();

    //Check if the input is not empty
    if (inputValue === '') return;

    //Clear the input box
    userInput.value = '';

    //Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn');

    //Append the delete button to the list item
    listItem.appendChild(deleteBtn);

    //Append the list item to the unordered list
    myList.appendChild(listItem);

    //Add event listener to the delete button
    deleteBtn.addEventListener('click', () => {
        myList.removeChild(listItem);
    });
});
