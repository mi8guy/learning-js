// Object literal, literally Objects. basic units in JS, unlike classes in Other languages.
const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Got user details from Database`)
        console.log(`The current context:`, this)

    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) // global context {} in Node env


// Constructor function, new

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggenIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggenIn = isLoggenIn

    return this // explicit , not necesssary 
}

// const userOne = User("Hitesh", 12, true)

// const userTwo = User("Chai", 8, false)

// console.log(userOne) // userTwo overwrites

//hence use new keyword
const userOne = new User("Hitesh", 12, true)

const userTwo = new User("Chai", 8, false)

console.log(userOne)  
console.log(userTwo) 
console.log(userOne.constructor) 
