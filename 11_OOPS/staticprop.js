class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    // attach a id to a user. 
    // But not all instances of this class should have acess to it.
    static createId(){
        return `123` // assume unique
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId()) // no access

