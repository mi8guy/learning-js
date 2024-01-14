// Arrays

/**
 * Within Array prototype, there are some properties for loops directly.
 */

const coding = ["js", "ruby", "java", "python", "cpp"]

// Call back functions
/**
 * has no name
 * every array element will be taken as a parameter
 * 
 */
coding.forEach( function (item){
    // console.log(item)
} )

// Variation, with arrow functions
coding.forEach( (item) => {
    // console.log(item);
} )

// Variation, with predefined functions
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)


// For each callback has more parameters.
coding.forEach((item, index, arr) => {
    // console.log(index, item, arr);
})


// Array of Objects

const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "C++",
        languageFileName: "cpp",
    },
]

myCoding.forEach( ( item ) => {
    // console.log(item.languageName) // object property 
    // console.log(item.languageFileName) // object property 
} )


