//********************Nums**************
const score=400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//100.00 => for precision value

const otherNumber =23.8966
console.log(otherNumber.toPrecision(3));//23.9

const otherNumber2 =123.8966
console.log(otherNumber.toPrecision(3));//124

const  hundreds=1000000
console.log(hundreds.toLocaleString);//1,000,000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//********************Maths********************** 

console.log(Math);
console.log(Math.abs(-4));//absolute => convert value -ve to +ve
console.log(Math.round(4.3));//4
console.log(Math.ceil(4,2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4,6,8,2,10));//2
console.log(Math.max(4,6,8,2,10));//10

console.log(Math.random());//0.58674653 => random values from 0 to 1
console.log(Math.random() * 10 );//5.9747683
console.log(Math.floor(Math.random() * 10)+1 );//value may be zero so to avoid that case we use add 1 and floor() roundoff to lowest value

//****************IMP FORMULA*************
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//we add min so that the random value should not be less than the min value










