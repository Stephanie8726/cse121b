/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Stephanie Dacullo Selanoba';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/picture.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('image');

// console.log('foodElement', foodElement);
// console.log('profilePicture', profilePicture);
// console.log('imageElement', imageElement);

// foodElement.innerHTML = 'Hello World';

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`); 

/* Step 5 - Array */
const favoriteFoods = ['Ice Cream', 'Pizza', 'Mango Float', 'Cake'];
foodElement.innerHTML = `${favoriteFoods.join(', ')}<br/>`;
const newFavoriteFood = 'Fruit Salad';

favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `${favoriteFoods.join(', ')}<br/>`;
favoriteFoods.shift();
foodElement.innerHTML += `${favoriteFoods.join(', ')}<br/>`;
favoriteFoods.pop();
foodElement.innerHTML += `${favoriteFoods.join(', ')}<br/>`;









