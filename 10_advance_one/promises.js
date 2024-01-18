const promiseOne = new Promise(function(resolve, reject){
    // Do an async call
    // DB calls, cryptography related, network related
    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve()
    },1000)
}) // creation

//consumption

promiseOne.then(function(){
    console.log(`Promise consumed`);
})


// Other way 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async task 2`)
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new  Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"}) // resolve parameters to `then`
    } ,1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Hitesh", password: "123"})
        } else {
            reject(`ERROR: Something went wrong`)
        }
    },1000)
})

//chaining
promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((err) => {
    console.log(err);
}).finally(() => {
    console.log(`The promise is either resolved or rejected`)
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        } else {
            reject(`ERROR: JS went wrong`)
        }
    },1000)
})

// promiseFive.then()
//async await syntax
async function consumePromiseFive(){
    try{
        const response = await promiseFive  // Notice how promise is consumed without a ()
        console.log(response)
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// A problem of async await, it cannot directly handle errors, need to use Try catch to gracefully handle errors.


// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)   
//     }
// }


// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

/** Fetch internals
 * 
 * So this fetch is like setTimeout wherein a call goes from JS engine to web API and then request call back is registered.
 * The request callback puts functions like setTimeout and setInterval on a task queue, but fetch gets put on the Priority queue aka fetch queue and it also has some other names
 * Which is the reason why you are seeing the result of fetch earlier than the code that is written above it.
 * 
 * More details:
 * 
 * So when a fetch call is made, two things happens.
 * first is, in the memory, 3 fields are created which aren't accessible to us. 
 *  - Data              // variable
 *  - onFulfilled []    // array 
 *  - onRejection []    // array
 * 
 * Second is, a network request goes out from the bowser/node. This request has 2 possibilities.
 * Either it will go through or it won't 
 * If it goes through, then whatever the response is will get stored in a function in onFulfilled array. Even if the response is 404
 * If the request doesn't go through, it will get stored in a function in the onRejection array.
 *  Then it is the job of these functions to populate the data variable which in turn returns a appropriate repsonse or reject for  a promise.
 */
