//Stack(Primitive) ,Heap(Non-Primitive)

//*************STACK***********

let myYoutubename="sumsdotcom"

let anothername=myYoutubename //copy is given
anothername="tomdotcom"

console.log(myYoutubename);
console.log(anothername);//changes made in copy  not in real name

//*************HEAP***********

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo= userOne //reference is given from stack not copy

console.log(userOne.email);
console.log(userTwo.email);//user@google.com


