// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")

// Repeating redundant code, above.

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName // Reference
// sayMyName() // Execution

// function addTwoNumbers(number1, number2){ // Nomenclature: Parameters
//     console.log(number1 + number2 );
// }

// addTwoNumbers(3, 4) // 7  // Nomenclature: Arguments, 3 and 4
// addTwoNumbers(3,"4") // 34

// Returning from a function 
function addTwoNumbers(number1, number2){ // Nomenclature: Parameters
    // let result = number1 + number2
    // return result
    return (number1 + number2 );
    console.log("Unreachable code. Anything after return won't run")
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ",result);

function loginUserMessage(username){
    if(username == undefined) /*or if(!username)*/{
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("hitesh") // need to process returned value
// console.log(loginUserMessage("hitesh")) // hitesh just logged in 
// console.log(loginUserMessage()) // undefined just logged in 
// console.log(loginUserMessage("")) // just logged in 


function calculateCartPrice(val1, val2, ...num1){ // rest operator, looks like spread operator
    return num1
}

// console.log(calculateCartPrice(200, 300 , 500, 2000)) // passing multiple values in function.

//Passing Objects
const user = {
    username: "hitesh",
    prices: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`) // type safety, whether price exist or not?
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 388,
})


// Passing arrays
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));