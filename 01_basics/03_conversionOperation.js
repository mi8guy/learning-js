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
// console.log(stringNumber);
// console.log(typeof stringNumber); 

// ********************* Operations ******************

let value = 3
let negValue = -value
// console.log(negValue); -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

let str1 = "hello"
let str2 = " viraj"
let str3 = str1 + str2
// console.log(str3); // hello viraj

// https://tc39.es/ecma262/#sec-toprimitive -- link for why this happens.
// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122 String first so string all.
// console.log(1 + 2 + "2") // 32 String last so all operations happen

// console.log(3 + 4 * 5 % 3); // bad code. use paranthesis.

// bad conversion operations. Confusing, misleading
// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2 // dont do this. Bad code practice. No consistency

let gameCounter = 100
gameCounter++ // postfix
++gameCounter // prefix
// No such difference in THIS example. 
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// console.log(gameCounter);

// link to study 
// https://tc39.es/ecma262/#sec-type-conversion