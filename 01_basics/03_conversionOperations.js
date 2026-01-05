//1.String to Number
let score = "84bjnk"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"84"=>33
//"84jnk"=>NaN
//true=>1; false=>0

//2.Boolean to Number
let isLoggedIn =true
let BooleanIsLoggedIn=Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

//1=>true ; 0=> false
//""=>false
//"sums"=>true

//Number to String
let someNumber= 84

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
