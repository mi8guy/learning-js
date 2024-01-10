// singleton

// constructor way
// Object.create // isi ke andar singleton banta hai

//object literal, 1 way to declare object, another is constructor. THis way doesnt create singleton objects, constructor way does

const mySym = Symbol("key1")
const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym] : "my symbol",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//dot notation
// console.log(jsUser.email)
// [] square notation
// console.log(jsUser[email]); // error "email" needs to be string
// console.log(jsUser["email"])

// full name can only be accessed by [] notation
// console.log(jsUser["full name"])


// console.log(jsUser[mySym]); // symbol key can only be accessed through this notation.
// console.log(typeof mySym);

jsUser.email = "hitesh@chatgpt.com" // can overwrite
// Object.freeze(jsUser) // freeze the object to any change
jsUser.email = "hitesh@change.com" // wont change wont give error either.
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User")
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting()); //Hello js User
                                   //undefined
// console.log(jsUser.greeting);
// console.log(jsUser);
// console.log(jsUser.greeting2());//Hello JS User, Hitesh
                                   //undefined
// console.log(jsUser.greeting2);


