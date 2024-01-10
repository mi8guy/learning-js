// Primitive and Non-primitive(referenceType)
// categorized on basis of how is data stored and how is it accessed.

/**
 * Primitive:
 * 
 * 7 types:  String, Number, Boolean, null, undefined, Symbol(for uniqueness), BigInt(big values of Number)
 *   
 */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const id2 = Symbol('123')
// console.log(id == id2); // false
// console.log(id === id2); //false
const bigNumber = 23423423523442355234n
// console.log(typeof bigNumber); // bigint


/**
 * Reference (Non primitive)
 * values whose reference can be allocated in the memory directly.
 * 
 * Arrays, Objects, Functions
 * 
 */

const heroes = ["GOJO", "MADARA", "SHAKTIMAN"]
let user1 = {
    name: "viraj",
    age : 28,
}
const myfunc = function(){
    console.log("Hello world");
}
// console.log(typeof heroes); // object
// console.log(typeof user1); // object
// console.log(typeof myfunc); // function .. it is also Functionobject, only prints function
// JS is dynamically typed as opposed to static type.


//*********************************************************************

/** Memories: Stack(Primitive) copy, heap(non - primitive)  reference*/

let myYoutubeName = "mi8guy"  // Goes into stack

let anotherName = myYoutubeName // gives a copy 
 
anotherName = "chaiaurcode" // does not change the original value

console.log(anotherName); // chaiaurcode
console.log(myYoutubeName); // mi8guy


let userOne = { // Goes into heap
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = userOne // gives a reference

user2.email = "user2@fb.com" // Changes the original value due to a reference being passed

console.log(user2.email);  // user2@fb.com
console.log(userOne.email); // user2@fb.com