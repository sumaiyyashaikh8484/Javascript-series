// const tinderUser = new Object()   // This creates a singleton object using Object constructor
const tinderUser = {}               // This creates a non-singleton object using object literal

tinderUser.id = "123ade"            // Adding a property 'id' to the object
tinderUser.name = "Sammy"           // Adding a property 'name' to the object
tinderUser.isLoggedIn = false       // Adding a boolean property to track login status
 console.log(tinderUser);         // Prints the entire object

const regularUser = {
    email: "some@gmail.com",        // Simple key-value pair
    fullname: {                     // Nested object to store full name
        userfullname: {             // Further nesting for detailed structure
            firstname: "sumaiyya",  // First name property
            lastname: "shaikh"      // Last name property
        }
    }
}
 console.log(regularUser.fullname.userfullname.firstname); // Accessing deeply nested object value

// ***************** Spread, assign ****************
const obj1 = {1: "a", 2: "b"}        // First object
const obj2 = {3: "a", 4: "b"}        // Second object
const obj4 = {5: "a", 6: "b"}        // Third object

// const obj3 = {obj1, obj2}         // This creates nested objects, not merged objects
const obj3 = Object.assign({}, obj1, obj2, obj4) // Merges multiple objects into one new object
console.log(obj3);

const obj5 = {...obj1, ...obj2, ...obj4} // Spread operator copies properties into a new object
console.log(obj5);

// ******************* Array of objects ******************** 
const users = [
    {
        id: 1,                      // Unique user ID
        email: "sums@gmail.com"     // User email
    },
    {
        id: 2,
        email: "summo@gmail.com"
    },
    {
        id: 3,
        email: "tom@gmail.com"
    }
]

users[1].email                      // Accessing email of second object in array

console.log(tinderUser);          // Prints tinderUser object

console.log(Object.keys(tinderUser));    // Returns all keys of the object as an array
console.log(Object.values(tinderUser));  // Returns all values of the object as an array
console.log(Object.entries(tinderUser)); // Converts object into array of key-value pairs


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Returns true if property exists

// *********************** OBJECT DE-STRUCTURING *******************
const course = {
    coursename: "js-series",        // Name of the course
    price: "999",                   // Course price
    courseInstructor: "Sums"        // Instructor name
}

// course.courseInstructor          // Normal way to access object property

// object de-structuring =>
const { courseInstructor: instructor } = course // Extracts property and renames it
console.log(instructor);

// ****************** JSON FORMAT *************

// JSON is a data format used for API communication
// Keys and string values must be inside double quotes

// {
//     "name": "Sumaiyya",
//     "coursename": "js-series",
//     "price": "free"
// }
