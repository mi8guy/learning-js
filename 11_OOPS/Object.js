// Prototypal behaviour of JS is the default behaviour.
/**
 * Javascript never gives up, keeps looking for a value at parent, grandparent and so on till it gets a null.
 *  
 *  Function --> Object --> null
 *  Array --> Object --> null
 *  String --> Object --> null
 * 
 * Everything goes through Object towards null
 * EOD, everything in JS is a object.
 * 
 * Object has no parent.
 * 
 * Function is interesting. It is a function and object also!
 */

function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2 // notice multiplyBy5 is a function still here using a dot access

console.log(multiplyBy5(5));        // 25
console.log(multiplyBy5.power);     // 2 , Hence, function is also a object
console.log(multiplyBy5.prototype); // {}  This is a context of this method.

function createUser(username, score){
    this.username = username // Both username could cause confusion, hence we use `this` keyword, which also sets a context for this method
    this.score = score
}

//since function is also an object. Try injecting some functionalities, like map(), length, trim() which are defined on some types like Arrays, String etc.

// createUser.prototype.increment = function(){
//     score++
// }

// const chai = createUser("chai", 25)
// const tea = createUser("chai", 250)

// At this point if we try using increment on these. The `increment` proptotype possibly wouldn't know whose value to increment. It would be confused. Because it doesn't have a context.

//To understand context, suppose someone called you by your name, say your mummy or daddy, you would know that if mummy calls you, you have to go to mummy, this is the context that you understand. If dad calls, then you go to dad.

// To solve this context issue, we use the `this` keyword. so the prototype would be modified as follows.


createUser.prototype.increment = function(){
    this.score++ // whose score to increment, this ka score! jisne bhi bulaya...
}

//lets inject one more.
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`) // whose score to print, this ka score! jisne bhi bulaya...
}


// const chai = createUser("chai", 25)
// const tea = createUser("chai", 250)

// Now to use that functionality.
// Consider array, myArray.map(), you use map() directly. you don't write myArray.prototype.map().
// How many prototypes are you going to write if it lies in some parent above?
// This is a syntactical sugar provided by JS, so that you don't have to write prototype again and again.

// chai.printMe() // TypeError: cannot read properties of undefined.

// So now the problem is, properties are infact injected. But, when we used `const chai = createUser("chai", 25)` to transfer values in `chai`, we didn't tell `chai` that there are some additional properties added on createUser.

// This information is relayed to `chai` using the `new` keyword!!

const chai = new createUser("Chai", 25)
const tea = new createUser("Tea", 250)

chai.printMe()   // Now chai knows that there is a printMe functionality.

// If we would have declared printMe directly inside the function createUser. It would have known it irrespective of new keyword.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

