// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "renish"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "renish",
            lastname: "savaliya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "e", 5: "f"}


// const obj3 = { obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "renishsavaliya66@gmail.com"
    },
    {
        id: 1,
        email: "renishsavaliya66@gmail.com"
    },
    {
        id: 1,
        email: "renishsavaliya66@gmail.com"
    },
    {
        id: 1,
        email: "renishsavaliya66@gmail.com"
    },
    {
        id: 1,
        email: "renishsavaliya66@gmail.com"
    },
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "renish"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "renish",
//     "coursename": "ja in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]