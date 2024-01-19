/**
 * consider a Exection context...
 * it has a global exec context...
 * some function are added, they have their functional exec context
 * consider a nested function.. who will be `this` for this function
 * 
 * This was a problem in JS. It is solved nowadays.
 * The outermost layer for this nested function is the parent function. But it is not referring to it using `this`
 * In such cases. `this` refers to Global exec context
 * Global exec problem:
 *  - in browsers, it refers to window
 *  - in nodejs, it refers to {}
 * 
 * 
 */

function setUsername(username){
    // some complex DB calls...
    this.username = username
    console.log("called")
}

// function createUser(username, email, password){
//     setUsername(username) // nested function 

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("Chai", "chai@google.com", "123")
// console.log(chai) // { email: 'chai@google.com', password: '123' }

/** 
 * Problem: what happened to the property that setUsername setted ? Is the call happening? where is the this.username created ? 
 * 
 * Actually, this call is not happening.
 * It is only referenced..in createUser when we said setUsername(username)
 * I know the () is deceiving in this case.
 * In JS you get some methods with which you explicitly call those methods.
 * One of which is call()
 * 
 * setUsername.call(username)
 * 
 * when we do setUsername(username) and when it is done with its work, its context and variable are freed from the stack.
 * 
 * So its 'this' is lost.
 * 
 * In order to hold those references, we have call() and pass the callers 'this', in essence saying, use my 'this' instead of yours.
 * 
 * When we pass 'this', and the nested function is done with its exec context. it says, take my variables inside you....
*/

function createUser(username, email, password){
    setUsername.call(this, username) // nested function 

    this.email = email
    this.password = password
}


const chai = new createUser("Chai", "chai@google.com", "123")
console.log(chai) // { username:'Chai', email: 'chai@google.com', password: '123' }