//Basic class
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
} 

//inheritance
class Teacher extends User{
    constructor(username, email, password){
        // Before this call() would have to be used. Now not needed
        super(username) // this eliminated call()'s need. Behind the scenes still call() happens. This is syntactical sugar.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const hitesh = new Teacher("hitesh", "chai@teacher.com", "123")
hitesh.logMe()
hitesh.addCourse()

const masalaChai = new User("masalachai")
// masalaChai.addCourse() // No access to User
masalaChai.logMe()

console.log(hitesh === Teacher) // false
console.log(hitesh instanceof Teacher) // true
console.log(hitesh instanceof User) // true

