// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num  of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps
// are like arrays, iterators vagera hote hai

const map = new Map()
map.set('In', "India")
map.set('jk', "India")
map.set('Inl', "India")
map.set('Ina', "India")

// console.log(map);

for(const [key, value] of map){
    // console.log(key, ':- ', value)
}


// Iterating Objects

const myObject = {
    game1 : 'NFS',
    game2: 'GTA5',
}

// Objects are not iterable
// for (const [key,value] of myObject) {
//     // console.log(key, ':- ', value)
// }

