const marvel_heroes = ["thor", "spiderman", "Ironman"]
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(dc_heroes) // pushes on original array 

// console.log(marvel_heroes); // array within array
// //[ 'thor', 'spiderman', 'Ironman', [ 'Batman', 'Superman', 'Flash' ] ] 4 elements, 4th element being an array 

// console.log(marvel_heroes[3][2]) // flash

// const all_heroes = marvel_heroes.concat(dc_heroes) // new array
// console.log(all_heroes); // [ 'thor', 'spiderman', 'Ironman', 'Batman', 'Superman', 'Flash' ]

// const all_new_heroes = [...marvel_heroes, ...dc_heroes] // Spread operator
// console.log(all_new_heroes); // [ 'thor', 'spiderman', 'Ironman', 'Batman', 'Superman', 'Flash' ]

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const usable_another_array = anotherArray.flat(Infinity)
// console.log(usable_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Hitesh")) // asks whether array 
// console.log(Array.from("Hitesh")) // makes into array

// console.log(Array.from({name: "hitesh"})) // [] interesting. Keys or values need to be specified
// By using Object.keys({name: "hitesh"})
// console.log(Object.values({name:"a"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

