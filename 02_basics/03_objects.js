// singleton

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "renish",
    "full name": "renish savaliya",
    mySym: "mykey1",
    age: "21",
    location: "ahmedabad",
    email: "renishsavaliya66@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "renishsavaliya66@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "renishsavaliya66@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.location}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());