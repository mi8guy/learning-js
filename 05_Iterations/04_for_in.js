const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

// For in loop  on Objects

for (const key in myObject) {
    // console.log(key); // keys
    // console.log(myObject[key]); // values
}

// On arrays?
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // indexes, keys
    // console.log(programming[key]); // values
}

// On Maps

const map = new Map()
map.set('In', "India")
map.set('jk', "India")
map.set('Inl', "India")
map.set('Ina', "India")

// Map is not iterable with for ... in

// for (const key in map) {
// //    console.log(key);
// }
