/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Nathan Shumway';
let currentYear = 2024;
let profilePicture = 'images/me.jpeg';




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('picture img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `<strong>Profile image of ${fullName}</strong>`);

let favFoods = ['Orange Chicken', 'Buffalo Wings', 'Pizza']

foodElement.innerHTML = `<strong>${favFoods}</strong>`;

let exFood = 'Steak';
favFoods.push(exFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
/* Step 5 - Array */






