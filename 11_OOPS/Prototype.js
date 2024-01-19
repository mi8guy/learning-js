let myName = "Hitesh     " // 11 , Truelength: 6
let myChannel = "chai"
console.log(myName.length)

/**
 * Task: Add a trueLength Method that give a true length of a string that has some leading or trailing spaces.
 * 
 * The property needs to be accessed like so: myName.trueLength()
 * 
 * We know that this task can be done using trim() and then length. BUT the task here is to add a new functionality in the String Object so that all strings have access to it.
 * 
 */

// Consider an array
let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is: ${this.spiderman}`)
    }
}

// heroPower.hitesh() // Do we have access to such a method? Can we inject it? Yes we can, saw it last time.

// Lets try injecting into Object itself.
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()

// lets see if Array has hitesh() access?

myHeroes.hitesh() // it has! We injected into top level hierarchy itselt, and since array goes through Object it has access to hitesh.

// What if we give power only to Array. will Object have access to it? Lets see

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

myHeroes.heyHitesh()    // Array has access
// heroPower.heyHitesh()   // Object doesn't have access


// inheritance
// const User = {
//     name: "Chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true,
// }

// const TeachingSupport = {
//     isAvailable: false,
// }

// const TASupport = {
//     makeAssignment: `JS assignments`,
//     fullTime: true,
// }

// These approaches are outdated

// Previously code used to be written like this, there were no classes as such. They used to write Objects and within them properties.

/** 
 * Every objects is a instance in itself. Everyone has its own properties and some default properties.
 * 
 * Consider a situation wherein you want to exchange info.
 * Linking some two Objects. 
 * could be done using prototype as we saw previously.
 * 
 * Previously there used to be a property, __proto__, abhi bhi hai.
 * 
 **/


const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: `JS assignments`,
    fullTime: true,
    __proto__: TeachingSupport, // prototype referenced to TeachingSupport. Borrow TeachingSupports properties.
}

// We can do it outside as well
Teacher.__proto__ = User // Teacher can access User properties.

// These approaches are outdated.

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport accesses Tacher properties..

// This is prototypal inheritance.

// In classes, there are some keyword differences like `extends` etc but behind the scenes, this prototypal stuff is happening. It is just syntactic sugar.

/**
 * Now for the Task of trueLength()
 * 
 * We might have a little idea of what needs to be done. 
 * To give all Strings this superpower.
 * 
 */

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    // console.log(`${this}`); // `this`, who is calling?
    console.log(`True length is ${this.trim().length}`);
}
console.log(`length is `,anotherUsername.length)
anotherUsername.trueLength()
"hitesh   ".trueLength()
"iceTea  ".trueLength()