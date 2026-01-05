//Primitive Datatype

//7 types:String,Number,Boolean,null,undefined,Symbol

const score=100
const scoreValue=100.4

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//false:returned value is not same

const bigNumber=78440039873890n




//Reference(Non Primitive)

//Array,Objects,Functions

const heros=['shahrukh','salman']
let myObj={
    name:"Sums",
    age:22
}

 const myFunction=function(){
console.log("hello world");

}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);//object

/*
typeof operator returns value:
undefined=>undefined 
null=>object
boolean=>boolean
number=>number
string=>string*/


//https://262.ecma-international.org/5.1/#sec-11.4.3