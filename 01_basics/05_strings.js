//*****************string declaration way 1*************
const name="Sumaiyya"
const repoCount=84
//old method to print=>
console.log("hello my name is "+name+" and my repocount is "+repoCount);

//new method => string interpolution:(using backticks)
console.log(`hello my name is ${name} and my repocount is ${repoCount} `);

//***************string declaration way 2*****************
const myName= new String("Sums")

//************String methods************
console.log(myName[0]);//S
console.log(myName.__proto__);//object
console.log(myName.length);//4
console.log(myName.toLowerCase());//sums:original value is not changed because it is non-primitive it takes only reference
console.log(myName.toUpperCase());//SUMS
console.log(myName.charAt(2));//m
console.log(myName.indexOf('u'));//1

const newString=myName.substring(0,3)
console.log(newString);//Sum

const anotherString=myName.slice(-3,3)//accepts negative value and extracts a portion of a string or array using index positions
console.log(anotherString);//um

const newStringOne="   Sumaiyya   "
console.log(newStringOne.trimStart());//removes starting space
console.log(newStringOne.trimEnd());//removes ending space
console.log(newStringOne.trim());//removes starting and ending space

const url="https://sumaiya.com/sums%20channel"
console.log(url);
console.log(url.replace('%20','-'))
console.log(url.includes('sums'));

//split(seperator,limit)=> breaks a string into an array based on a specified separator.
const value="hello world"
console.log(value.split(' '));
console.log(value.split('o'));

//explore more methods on mdn website




  





