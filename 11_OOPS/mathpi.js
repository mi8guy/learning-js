const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// Problem : Can you overwrite Math.PI ? Lets see behind the scenes.

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const mynewObject = Object.create(null) //another way to create Object
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    // trying to break code. This is also logged when iterating over for keys and values, but this is not wanted. So try adding if else in for of loop .
    orderChai: function(){
        console.log("chai nai bani")
    }
}

console.log(chai)

/** 
 * Does the above object have descriptor properties, is it possible to set them? Are they even available?
 * 
 * Yes, they are available.
 * They are writable, enumerable, and configurable.
 * 
 */

// console.log(Object.getOwnPropertyDescriptor(chai)) // undefined. chai is object, not a property.

console.log(Object.getOwnPropertyDescriptor(chai, "name")) /** 
{
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
  }
*/ 

//trying out loop on this.
// for (const [key, value] of chai) {
//     console.log(`${key} : ${value}`)
// } // TypeError: chai is not iterable.

//fix
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function' ) // now the function value key pair is not logged.
        console.log(`${key} : ${value}`)
} // now it iterates.

// What will happen if we say in desciptor property that enumerable should be false. We won't be able to loop over this object then.


// Since this is my code. Will JS give me control over these values? Yes, but only at limited places, not everywhere.

// Altering some properties.

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")) /***
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   } */

// Now notice that the property `name` is not iterable and is not even logging in this loop.

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function' ) // now the function value key pair is not logged.
        console.log(`${key} : ${value}`)
}

/***
 * Conclusion: 
 *      A configuration can be done wherein some properties of an Object won't take part in the loop.
 * 
 * Some situations may arise during backend development wherein you might get a object in response but you aren't able to iterate. SO in such cases, you need to examine these property descriptors.
 */