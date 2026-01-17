//*************************************
// Function to print each letter of the name "SUMAIYYA"
function printMyName() {
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("I");
    console.log("Y");
    console.log("Y");
    console.log("A");
}

// Function call
printMyName();


//*************************************
// Function to add two numbers and print the result
// num1 and num2 are PARAMETERS
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// 8 and 4 are ARGUMENTS
addTwoNumbers(8, 4);

// This function does NOT return anything,
// so result will be undefined
const result = addTwoNumbers(10, 10);
console.log(result); // undefined


//*************************************
// Function to add two numbers and RETURN the result
function addTwoNumbers(num1, num2) {
    let result1 = num1 + num2; // result1 exists only inside this function (block scope)
    return result1;            // returning the calculated value
}

// result3 is a different variable (outside function)
const result3 = addTwoNumbers(20, 10);
console.log(result3); // 30


//********************
// Shorter version of the same function using direct return
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result2 = addTwoNumbers(30, 10);
console.log(result2); // 40


//*************************************
// Function to show login message
function loginUserMessage(username) {

    // Check if username is NOT provided
    if (username === undefined) {
        console.log("Please enter a username");
        return; // stops function execution
    }

    // Template literal to return message
    return `${username} just logged in`;
}

// Username is provided
console.log(loginUserMessage("Sumaiyya"));

// No argument passed → username becomes undefined
console.log(loginUserMessage()); // undefined (not null)


//************* REST OPERATOR *****************
// REST operator (...) collects multiple arguments into an array
function calculateCartPrice(...num) {
    return num;
}

// All values are stored inside num as an array
console.log(calculateCartPrice(100, 200, 300, 400));
// Output: [100, 200, 300, 400]


// num1 → 100, num2 → 200
// remaining values go into num array
function calculateCartPrice2(num1, num2, ...num) {
    return num;
}

console.log(calculateCartPrice2(100, 200, 300, 400));
// Output: [300, 400]


//*************************************
// Object example
const user = {
    username: "Tom",
    price: 400
};

// Function that accepts an object as a parameter
function handleObject(anyobject) {
    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}`
    );
}

// Passing existing object
handleObject(user);

// Passing object directly
handleObject({
    username: "Sam",
    price: 500
});


//*************************************
// Array example
const myNewArray = [200, 300, 400, 500];

// Function to return second element of an array
function returnSecondValue(getArray) {
    return getArray[1]; // index 1 = second element
}

console.log(returnSecondValue(myNewArray));        // 300
console.log(returnSecondValue([100, 200, 400, 600])); // 200
