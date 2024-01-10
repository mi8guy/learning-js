// array

const myArray = [0, 1, 2, 3, 5, 8]

// console.log(myArray[4]);

// shallow copy :  copy of the array share the same references
// deep copy: copy of the array do not share the same references

const myHeroes = ["shaktiman", "hanuman", "batman"]

const myArr = new Array(1, 3, 4, 2)
// console.log(myArr2[1]);

// Array methods

// myArr2.push(6)
// console.log(myArr2);

// myArr2.push(7)
// console.log(myArr2);

// myArr2.pop()
// console.log(myArr2);

// myArr.unshift(9) // adds to the start
// console.log(myArr);

// myArr.shift() // pops from start
// console.log(myArr);

// console.log(myArr.includes(9)); // true or false
// console.log(myArr.indexOf(9)); // -1 if doesnt exist

// const newArr = myArr.join();
// console.log(myArr); // [ 1, 3, 4, 2 ]
// console.log(newArr); // 1,3,4,2
// console.log(typeof myArr); // object
// console.log(typeof newArr); // string


// Slice , Splice

console.log("A ", myArr) // A  [ 1, 3, 4, 2 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [ 3, 4 ]
console.log("B ", myArr) // B  [ 1, 3, 4, 2 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2); // [ 3, 4, 2 ]
console.log("C ", myArr) // C  [ 1 ]

// splice manupulates the original array and also include the end in the range






