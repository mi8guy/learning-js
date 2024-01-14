// reduce function takes a callback that has access to a accumulator and currentValue. initial value for accumulator needs to be specified and then it does a specified operation on every item of the array.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, cv){
//     console.log(`Acc: ${acc} and curval: ${cv}`)
//     return acc + cv
// }, 0)

const myTotal = myNums.reduce( (acc, cv) => acc + cv, 0 )

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "python course",
        price: 3999,
    },
    {
        itemName: "Mobile dev course",
        price: 5999,
    },
    {
        itemName: "Data science course",
        price: 12999,
    },
]

// Task: add all the prices in the shoppingCart

let cartTotal = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(cartTotal);


