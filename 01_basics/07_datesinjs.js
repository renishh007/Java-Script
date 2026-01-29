// Initialize the Date object first
let myDate = new Date(); 

// Now you can call methods on it
// console.log("Full String:", myDate.toString()); 
// console.log("Date only:", myDate.toDateString()); 
// console.log("Local format:", myDate.toLocaleString());

// console.log("ISO format:", myDate.toISOnString()); // Useful for databases

let myCreatedDate = new Date(2026, 0, 28)
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));

// Working with specific timestamps
// let myTimeStamp = Date.now();
// console.log("Current Timestamp (ms):", myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'

})