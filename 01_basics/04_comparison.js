// console.log(2 > 1) // true
// console.log(2 >= 1) // true 
// console.log(2 < 1) // false
// console.log(2 == 1) //false
// console.log(2 != 1) // true

// JS automatically converts and then compares.
// console.log("2" > 1); // true
// console.log("02" > 1); // true
// console.log("0" > 1); // false

// Not so predictable results. Avoid comparing different types.


// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); //true


// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined <= 0); //false

// Avoid above comparisons

// Comparison and Equality checks are different things
// == and === strict check. checks value and datatypes as well.

// console.log("2" == 2); // true
// console.log("2" === 2); // false

