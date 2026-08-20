// const sym = Symbol("key");
// let obj ={
//     name:"akash",
//     [sym]:"data",
//     phone:1927338793,
//     location :"sasni"
// }
// console.log(obj["name"]);
// console.log(typeof obj[sym]);

const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
const dummyUser = {
  name1: "Bob",
  age1: 25,
  isStudent1: true
};   
const dummyProduct = {
  name2: "Laptop",
  age2: 0, // Not applicable, but same structure if forced
  isStudent2: false
};   
// const o = Object.assign({},person,dummyUser,dummyProduct);
// console.log(o);
const ob={...person,...dummyUser,...dummyProduct};
console.log(ob);


console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

console.log(ob.hasOwnProperty('isStudent2'));