const user={
    username:"Tommy",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username="Sam";
user.welcomeMessage()

console.log(this);//empty object:{}

function chai(){
    let username2="sumo"
    console.log(this.username2);//undefined
    
}
chai()

const chai2=function(){
     let username2="sumo"
    console.log(this.username2);
}
chai2()

const chai3=() =>{
     let username2="sumo"
    console.log(this);
}
chai3()

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(4,4));
 
//implicit return
const addThree=(num1,num2,num3)=> num1+num2+num3;


