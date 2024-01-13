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



