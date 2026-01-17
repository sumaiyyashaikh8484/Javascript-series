/************************************************
  DIFFERENCE BETWEEN var, let, and const
************************************************/

//  DECLARATION & RE-DECLARATION

var a = 10;
var a = 20;     //  allowed (var can be re-declared)

let b = 10;
// let b = 20;  //  ERROR: let cannot be re-declared

const c = 10;
// const c = 20; //  ERROR: const cannot be re-declared


//  RE-ASSIGNMENT

a = 30;   //  allowed (var can be re-assigned)
b = 20;   //  allowed (let can be re-assigned)
// c = 20; // ERROR: const cannot be re-assigned


//  BLOCK SCOPE vs FUNCTION SCOPE

if (true) {
    var x = 100;     // var is FUNCTION scoped
    let y = 200;     // let is BLOCK scoped
    const z = 300;   // const is BLOCK scoped
}

console.log(x); // 100 (var leaks outside block ❌)
// console.log(y); //  ERROR (let is block scoped)
// console.log(z); //  ERROR (const is block scoped)


// MUST INITIALIZE const

// const m;        // ERROR: const must be initialized
const m = 50;     //  correct


// const WITH OBJECTS (value vs reference)

const user = {
    name: "Sam"
};

// Changing object property is allowed
user.name = "Tom";   //allowed

// user = {};        //  ERROR: cannot re-assign const reference

console.log(user);


//  GLOBAL SCOPE DIFFERENCE (Browser Only)
/*
var attaches to window object
let and const do NOT
*/

var g1 = "varGlobal";
let g2 = "letGlobal";
const g3 = "constGlobal";

// In browser console:
// window.g1 → "varGlobal"
// window.g2 → undefined
// window.g3 → undefined


/************************************************
  FINAL SUMMARY (REMEMBER THIS)
************************************************/

/*
var   → function scoped, hoisted with undefined, re-declare allowed ❌
let   → block scoped, hoisted (TDZ), re-assign allowed ✅
const → block scoped, hoisted (TDZ), cannot re-assign ✅

BEST PRACTICE:
use const by default
use let if value changes
avoid var
*/
