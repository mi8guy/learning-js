const coding = ["js", "ruby", "java", "python", "cpp"]

//returns undefined, foreach doesn't return anything. Try using filter
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// returns values that meet a condition
// const newNums = myNums.filter( (num) => {
//     // num > 5 // won't return with this syntax, needs explicit return.
//     return num > 5
// } )
// console.log(newNums);

// without using filter

// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publish: 1925,
      edition: 1930
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publish: 1960,
      edition: 1965
    },
    {
      title: "1984",
      genre: "Dystopian",
      publish: 1949,
      edition: 1955
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publish: 1937,
      edition: 1950
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: 1951,
      edition: 1955
    },
    {
      title: "The History of Western Philosophy",
      genre: "History",
      publish: 1945,
      edition: 1950
    },
    {
      title: "Cosmos",
      genre: "Science",
      publish: 1980,
      edition: 1985
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      genre: "Non-Fiction",
      publish: 2011,
      edition: 2015
    },
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      genre: "Fiction",
      publish: 1979,
      edition: 1980
    }
  ];

  // const userBooks = books.filter( (bk) => bk.genre == "Fiction")
  let userBooks = books.filter( (bk) => {return bk.publish >=1950 && bk.genre == "Fiction"})

  console.log(userBooks);

  
  