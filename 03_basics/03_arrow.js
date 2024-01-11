// The `this` keyword
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website `); // `this` refers to the current context as current values of the variables in this scope
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//lets check the context outside
// console.log(this) // `{}` empty object, different in browsers `Window`

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined, context does not work in function, only in objects 
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username); //undefined, context does not work in function, on
//      console.log(this) // {..values...}
// }

// chai()

// ES6 => arrow functions
const chai = () => {
    let username = "hitesh"
    console.log(this.username); //undefined, context does not work in function, on
    console.log(this) // {}
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2                       // Explicit return
// }

// const addTwo = (num1, num2) => num1 + num2      // Implicit return. 

// const addTwo = (num1, num2) => (num1 + num2)      // Implicit return. 
const addTwo = (num1, num2) => ({username: "hitesh"})      // Implicit return an Object. 

console.log(addTwo(3, 4))

