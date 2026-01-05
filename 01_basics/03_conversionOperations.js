// //1.String to Number
let score = "84bjnk"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "84"=>33
// "84jnk"=>NaN
// true=>1; false=>0

//2.Boolean to Number
let isLoggedIn =true
let BooleanIsLoggedIn=Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

// //1=>true ; 0=> false
// //""=>false
// //"sums"=>true

 //Number to String
let someNumber= 84

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// //**************OPERATIONS***************

let value=3
let negValue= -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1="hello"
let str2=" Sums"

let str3 = str1+str2
console.log(str3);

console.log("1"+2);//12
console.log("1"+"2");//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32


//**********PREFIX AND POSTFIX***********
let gameCounter=100
//gameCounter++ //101
++gameCounter //101
console.log(gameCounter);





