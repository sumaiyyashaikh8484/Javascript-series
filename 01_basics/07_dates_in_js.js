//DATE=> date is an object in js
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2026,0,24)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date(2026,0,24,5,3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3=new Date("2026-01-15")//yyyy-mm-dd
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4=new Date("01-15-2026")//mm-dd-yyyy
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp=Date.now() // exampe: whenever we create poles in quize we use timestamp to check who vote first
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());

//if we want time in milisecond
console.log(Date.now());//1767719925309

//if we want time in seconds
console.log(Date.now()/1000);//1767719925.309

//if we dont want time in decimal
console.log(Math.floor(Date.now()/1000));

 let newDate =new Date()
 console.log(newDate);
 console.log(newDate.getDate());
 console.log(newDate.getMonth());//0 =>January

//**********Customized format of localeString**********
   newDate.toLocaleString('default',{
   weekday:"long",   
 })






