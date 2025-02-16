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

