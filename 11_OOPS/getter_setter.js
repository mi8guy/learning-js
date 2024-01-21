class User{
    constructor(email, password){
        this.email = email
        // this.password = password // TypeError: Cannot set property password of #<User> which has only a getter
        // Getter needs a setter as well.
        // this.password = password // if I do this even after setter function. both constructor and setter try to set values RangeError: Maximun call stack size exceeded. So we change it in setter to _password, and therefore in getter as well.
        this.password = password

    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this.password.toUpperCase()
        return this._password.toUpperCase() 
    }

    set password(value){
        // this.password = value
        this._password = value // put a _ to avoid race between setter and constructor
    }
    
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password) // ABC 
console.log(hitesh.email) // H@HITESH.AI 

/**
 * Sometimes, you don't want to give access to certain properties or you may want to customize the responses.
 * Getters and setters come in handy in such situations.
 */