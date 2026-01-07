//******************array declaration************

// JS arrays are resizable and can contain a mix of different datatypes

const myArr=[0,1,2,3,4,5]
console.log(myArr[0]);

const myHeros=["superman","batman"]

const myArr2=new Array(1,2,3,4)
console.log(myArr2[2]);


//JS array-copy operations create shallow copies,rather than deep copies
//shallow copy=> shallow copy of an object is a copy whose properties share the same references of which the copy was made
//deep copy=> deep copy of an object is a copy whose properties do not share the same references of which the copy was made

//******************Array Methods********************** 

myArr.push(6)
myArr.push(7)//add  new elements at last position
myArr.pop()//no arg function which removes last element from arr

myArr.unshift(9)//adds ele at the starting position
myArr.shift()//removes ele from start position
console.log(myArr);

console.log(myArr.includes(9));//false
console.log((myArr.indexOf(3)));//4
console.log(myArr);

const newArr=myArr.join()//convert arr into string
console.log(myArr);
console.log(typeof newArr);//string

//slice,splice
console.log("A",myArr);//[0,1,2,3,4,5]

const myn1=myArr.slice(1,3)//1,2

console.log(myn1);
console.log("B",myArr);//[0,1,2,3,4,5]

const myn2=myArr.splice(1,3)
console.log("C",myArr);//[0,4,5]
console.log(myn2);

/*
slice → excludes the last index (end index is not included) and does NOT change the original array  
splice → includes the specified elements and DOES change the original array
*/







