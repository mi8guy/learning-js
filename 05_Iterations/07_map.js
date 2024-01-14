const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // map method
// const newNums = myNumbers.map( (num) => num + 10 )

// // same thing using forEach 
// const newNums2 = []
// myNumbers.forEach( (num) => {
//     newNums2.push(num+10)
// } )


// console.log(newNums2)

// chaining methods

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40)

console.log(newNums);
