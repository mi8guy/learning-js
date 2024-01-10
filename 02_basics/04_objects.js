// const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname.firstname); // Notice ?, it says if the value exist

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "a", 6: "b"}

// Assign 

// const obj3 = {obj1, obj2} // objects ke andar objects
// const obj3 = Object.assign(obj1, obj2) // properly sab khol ke , optionaly {} as the 1st arg. first arg is the target within which all will be written. Hence it is better to use {} as the target

// const obj3 = Object.assign({}, obj1, obj2, obj4) // (target, source1, source2....sourceN)
// console.log(obj3);
// console.log(obj1)

// Spread

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);
// console.log(obj1)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); // ouput keys in an Array 
// console.log(Object.values(tinderUser)); // ouput values in an Array 
// console.log(Object.entries(tinderUser)); // Array ke andar array milta hai key value ka

// console.log(tinderUser.hasOwnProperty('isLogged')); 

//Destructuring

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh",
}

const {courseInstructor: instructor} = course // Object destructuring also renaming.

console.log(instructor)

/**
  Destructuring in react components.
   const navbar = ({company}) => {
    }
    navbar(company = "hitesh")
*/

// API === Menu card in restaurants

//JSON
/*
{
    name: "Hitesh",
    coursename: "js in hindi",
    price: "free"

}
*/
