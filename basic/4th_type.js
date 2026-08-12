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
console.log(typeof arr);
console.log(typeof fun);
console.log(typeof obj);
console.log(typeof a);
console.log(typeof sym1);

// stack(primitives) and heap(non-primitives)

let myname ="Akash";
let myname2 = myname;
myname2 = "Raj";
console.log(myname);
console.log(myname2);
console.log(myname);
let obje ={
    name:"Krishna",
    email:"kri@gmail.com"
}
let obj1 =obje;
console.log(obje.email);
obj1.email="Node@gmail.com";
console.log(obje.email);
console.log(obj1.email);
