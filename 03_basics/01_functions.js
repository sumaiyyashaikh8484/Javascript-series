//*************************************
function printMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("I");
    console.log("Y");
    console.log("Y");
    console.log("A");
    
}
printMyName();

//*************************************
function addTwoNumbers(num1,num2){//parameters
console.log(num1+num2);
}
addTwoNumbers(8,4);//arguments
const result=addTwoNumbers(10,10)
console.log(result);

//*************************************
function addTwoNumbers(num1,num2){//parameters
    let result1=num1+num2 
    return result1;
}
//result1 and result3 are diff becoz result1 is block scope
const result3=addTwoNumbers(20,10)
console.log(result3);//30

//********************
function addTwoNumbers(num1,num2){//parameters
   return num1+num2;
}
const result2=addTwoNumbers(30,10)
console.log(result2);//40


function loginUserMessage(username){
    if(username===undefined){
    console.log("Please enter a username");
     return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sumaiyya"));
console.log(loginUserMessage());//undefined not null


