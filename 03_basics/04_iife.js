// Immediately invoked function expression (IIFE)

// To stay safe from global scope pollution

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai(){
    console.log(`DB CONNECTED`);
})();                                    // IIFE, Note: the `;` is important here or else the IIFE won't know to end its context and then the next code won't run properly

// (definition)()

( function aurcode(){                   // We can use arrow functions here 
    // named IIFE
    console.log(`DB CONNECTED Two`);        // as well
})();

( (name)=>{                   // We can use arrow functions here 
    // Named IIFE. Parameterized.
    console.log(`DB CONNECTED ${name}`);        // as well
})("hitesh");

// Writing 2 IIFE's keep note of the seimcolon `;`