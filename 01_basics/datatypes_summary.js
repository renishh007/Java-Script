// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 34565432145654596n


// Reference (Non Premitive)

// Array, Objects, Function

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "renish",
    age: 21,
}

const myFunction = function(){
    console.log("Hello Duniya");
}

console.log(typeof anotherId);