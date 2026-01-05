const accountId = 14452
let accountEmail="sumaiyya@gmail.com"
var accountPassword="12345"
accountCity ="Jaipur"
let accountState //undefined output

// accountId = 2 //not allowed

accountEmail="sums@gmail.com"
accountPassword="78939"
accountCity="Mumbai"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


