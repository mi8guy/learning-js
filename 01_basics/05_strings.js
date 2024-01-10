const name = "Viraj"
const repoCount = 1

// console.log( name + " " + repoCount + " repo"); // outdated 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new better readable syntax, string interpolation.

const gameName = String('Madara-op')

// Some methods
// console.log(gameName.toUpperCase());
// console.log(gameName); // Notice original didn't change
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4) // substring(include, exclude) negative values get ignored here.
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "   hitesh   " // Sometimes these extra spaces gets entered by users.

// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart())
// console.log(newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

// console.log(url.includes('sundar')) //false

console.log(gameName.split('-'));


