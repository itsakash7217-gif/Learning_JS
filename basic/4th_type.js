// primitive type
// number, string, boolean, symbol, null, undefined, bigint
let a = 8364682937874932879497n;

let sym1 = Symbol("121");
let sym2 = Symbol("121");

console.log(sym1 === sym2); // false

// non-primitive type
// array, function, object
let arr = ["Akash", "Raj", "Krish"];

let obj = {
    name: "jdjk",
    age: 9
};
let fun = function(){
    console.log("Hello World");
}
console.log("hello");
fun();