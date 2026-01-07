// 🔹 Singleton can be created using Object.create()
// 🔹 Below we are using OBJECT LITERALS

// Symbols create unique keys (no name collision)
const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

// Object literal → this object behaves as a singleton
const JsUser = {
    name: "Sumaiyyya",  // normal string key
    "full name": "sumaiyya shaikh", // key with space → needs bracket notation

    [mySym]: "mykey1", // ✅ Symbol key (correct way)
    mySym2: "mykey2", // ❌ treated as STRING key, not a Symbol

    age: 18,
    location: "Mahrashtra",
    email: "sums8484@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing properties
console.log(JsUser.email);  // dot notation
console.log(JsUser["email"]); // bracket notation

// console.log(JsUser.full name); // ❌ error due to space in key
console.log(JsUser["full name"]); // ✅ correct way

console.log(JsUser.mySym2);// accesses string key "mySym2"
console.log(JsUser[mySym]);// accesses Symbol key

// Updating object property
JsUser.email = "sumaiyya@google.com"

// Object.freeze(JsUser)// freezes object (no changes allowed)

JsUser.email = "sumaiyya@microsoft.com"// will fail if freeze is enabled
console.log(JsUser);

// Adding method to object
JsUser.greeting = function () {
    console.log("hello js user");// simple function
}

// console.log(JsUser.greeting());// executes function
console.log(JsUser.greeting);// returns function reference

// Method using 'this' keyword
JsUser.greetingTwo = function () {
    // 'this' refers to JsUser object
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greetingTwo());// prints message + undefined

// 🔹 Proving JsUser is a singleton
const user1 = JsUser;
const user2 = JsUser;

user1.age = 25;
//Even though JsUser initially had age: 18, updating user1.age changes the same object in memory, so user2.age also reflects the updated value.
console.log(user2.age); // 25 ✅ same object, same memory

