let scores = "33abc"  //type is guaranteed

//const {score} = req.body // type is not guaranteed.

//console.log(typeof scores);
//console.log(typeof(scores));

let valueInNumber = Number(scores) // converting to number.
// console.table([typeof(valueInNumber), valueInNumber]);// number, NaN
// console.log(typeof NaN); // number

let nullVal = null
let nullNumber = Number(nullVal)
// console.table([typeof(nullNumber), nullNumber]); // number, 0

let undefVal = undefined
let undefNumber = Number(undefVal)
// console.table([typeof(undefNumber), undefNumber]);// number, NaN

let isLoggedIn = 1 // 1 -> true,  "" -> false, "asdf" -> true, 0 -> false
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.table([typeof(booleanIsLoggedIn), booleanIsLoggedIn]);// number, NaN


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);