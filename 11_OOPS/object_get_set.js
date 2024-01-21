// This syntax is rare these days

const User = {
    _email: "h@hitesh.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
// new -- > constructor function

//factory function
const tea = Object.create(User)

console.log(tea.email); // notice we never had email property

/**
 * All our properties,  when _ is used, is considered private properties.
 * Such properties won't be in normal users use.
 * 
 * But when we write get and set, the _ loses its meaning.
 * and now the instance has a email prop available.
 * 
 * getters and setters overwrite the process of writing and reading from the memory.
 */