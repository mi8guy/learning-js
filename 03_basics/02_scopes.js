// Scope is a huge topic which also includes topics like closure etc...

// let a = 10
// const b = 20
// var c = 13 // var is old

// console.log(a);
// console.log(b);
// console.log(c); 

/**
 * Var is fine till now. Let, const were introduced because var messed up block scope.
 * {} curly braces is scope.
 * {} in objects decalration is different. It is scope when used with functions and if else..
 * 
 */
// // var c = 300

// if(true){ // a,b c are in this scope.
//     let a = 10
//     const b = 20
//     var c = 13 // var is old, with var also same if `c = 30`
// }


// console.log(a); // a is not defined, which is nice not in this scope
// console.log(b); // b is not defined, which is nice not in this scope
// console.log(c);  // 13, c got leaked from above scope which is not good, lost 300 

let a = 300  // global scope
if(true){ // block scope
    let a = 10
    const b = 20
    // console.log("INNER a: ", a)
}

// console.log("OUTER a: ", a);

// for(let i = 0; i < array.length; i++){ // i should be block scope in loops
//     const element = array[i]
// }

// scope is different in Browsers and node. In browsers it is core scope and in Node, global scope is different

