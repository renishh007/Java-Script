// for of (Array)
const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
    console.log(num);
}

// for of (String)
const greetings = "My name is Renishh";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // duplicate key, will not add twice

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// Correct way to iterate object
for (const key in myObject) {
    console.log(key, ':-', myObject[key]);
}

// OR (Best Modern Way)
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}
