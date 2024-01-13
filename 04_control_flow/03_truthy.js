const userEmail = "h@hitesh.ai"

// if (userEmail) {  
    // When we assume that string has true value, and don't do any comparisons.. this is truthy value, if userEmail="" then it is false.
//     console.log(`Got user email`);
// }
// else{
//     console.log(`Don't have user email`);
// }

/**
 * falsy values
 *  - false , 0, -0, BigInt 0n, "", null, undefined, NaN
 *  
 * Truthy values
 *  - "0", "false", 'false', " ", <--- Strings with some values are truthy 
 *  - [], {}, function(){} <== Empty function
 * 
 */

const users = []
//how to check arrays. Don't just ask if(users)
if(users.length === 0){
    // console.log(`Array is empty`);
}

const emptyObject = {}

//checking objects
if(Object.keys(emptyObject).length == 0){ // Object.keys(..) returns an array of keys
    // console.log(`Object is empty`);
}

// Nullish Coalescing operator (??): null undefined

// Sometimes database calls don't give a direct response, they give two values, chances are null or undefined. These cases can disrupt code.
// This operator is made specially for such cases.
// if it is null, we assign null and treat code accordingly
// if it is undefined, we assign undefined and code accordingly

let val1;
// val1 = 5 ?? 10               // 5
// val1 = null ?? 10            // 10
// val1 = undefined ?? 15       // 15
// val1 = null ?? 10 ?? 20      // 10

// console.log(val1);


/** Teranary operators 
 * 
 *  condition ? true : false
 * 
*/

const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log(`more than 80`) : console.log(`less than 80`);;