function sayMyname(){
console.log("r");
console.log("e");
console.log("n");
console.log("i");
console.log("s");
console.log("h");
}

// sayMyname()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}