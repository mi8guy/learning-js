/**
 * Old javascript was different, with no classes, modules etc...
 * So the JS commitee didn't want that newer code to break older code.
 * So they introduced "use strict"
 */
"use strict"; // treat all js code as newer version.

// nowadays the standards are improved and enforced so writing this is not mandatory.

//alert("hello") 
// ReferenceError: alert not defined.  doesn't work here, because this is not a browser. this is node i.e a js runtime. It is available but syntax is different.

console.log(3
    +2) ; console.log("Hitesh") // Bad code readability

/**
 * Documentation: 
 *  1. MDN docs by mozilla .. not original
 *  2. tc39.es .... ecmascript language specification. Standards! This is only for people who are writing browsers or engines. not easy.
 *
 */


let name = "viraj" // string
let age = 18    // number
let isLoggedIn = false // boolean

// number => range 2^53
// bigInt

// string '' or "" , "" preferred
// boolean => true/false
// null => this is a standalone value and a Type as well. type of null is a object though
let temperature = null
// undefined => this is a value, type of undefined is undefined itself.
let state 

// symbol  => unique, used for uniqueness

//object

console.log(typeof null); // object
console.log(typeof undefined); // undefined

/**
 * Assignment : look at ecmascript specification.
 */
