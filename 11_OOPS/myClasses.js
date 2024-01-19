// ES6 ke baad ki kahaani...

// class User {
//     constructor(username, email, password){ // whenever object is initialized using new keyword

//         this.username = username
//         this.email = email
//         this.password = password
//     } 

//     //Nomenclature: Methods, functions in classes
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())


// Behind the scenes
// Before classes this is how we would have written it. Classes is Syntactical sugar.


function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())

// Conclusion: Behind the scene, prototypal behaviour.

