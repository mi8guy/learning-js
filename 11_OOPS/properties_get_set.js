// Earlier getter and setter, before classes.

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
} // Class code is syntactically better.

const chai = new User('chai@chai.com', "chai")
console.log(chai.email)
console.log(chai.password)