/* LESSON 3 - Programming Tasks */
/* Profile Object  */
let myProfile = {
    name: 'Stephanie Dacullo Selanoba'
};

/* Populate Profile Object with placesLive objects */
myProfile.photo = 'w02-task/images/picture.jpg';
myProfile.favoriteFoods = ['Ice Cream', 'Pizza', 'Mango Float', 'Cake'];
myProfile.hobbies = ['Martial Arts', 'Camping', 'Exercising', 'Studying'];
myProfile.placesLived = [];
myProfile.placesLived.push(
    {place: 'Lapu-lapu Cebu, Philippines', length: '23 years'},
    {place: 'Getafe Bohol, Philippines', length: '12 years'},
    {place: 'Minakami, Japan', length: '1 month'},
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


