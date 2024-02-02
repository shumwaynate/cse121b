/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Nathan Shumway",
    photo: "images/me.jpeg",
    favoriteFoods: ["Pizza", "Panda Express", "Chicken Nuggets", "Buffalo Wings"],
    hobbies: ["Video Games", "Watching TV", "Sleeping"],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '1 year'
    }
)
myProfile.placesLived.push(
    {
        place: 'Mesa, AZ',
        length: '9 years'
    }
)
myProfile.placesLived.push(
    {
        place: 'Tucson, AZ',
        length: '14 years'
    }
)


/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent=food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement('ul');
    ul.textContent=hobbies;
    document.querySelector('#hobbies').appendChild(ul);
})



/* Places Lived DataList */

myProfile.placesLived.forEach(places => {   //Repeats over every item in array of places
    let dt = document.createElement('dt');
    dt.textContent=places.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent=places.length;
    document.querySelector('#places-lived').appendChild(dd);
})
