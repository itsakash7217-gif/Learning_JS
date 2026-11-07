let first = {
    name: "Akash"
};
let second = ["raj",12];
let third = "Krishn";
function forth(){
    console.log("forth");
};
// console.log(first);
// console.log(second);
// console.log(third);
// object
Object.prototype.Akash=function(){
    console.log("Now i am avalible in all the related object");
}
// console.log(first.Akash());
// console.log(second.Akash());
// console.log(third.Akash());
// console.log(forth.Akash());

// inheritance

// const teacher = {
//     check : true
// }
// const teaching = {
//     tick : true
// }
// const parent={
//     __proto__:teacher
// }
// console.log(parent.__proto__);

const data = "DataIsMore      "
String.prototype.size=function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}
console.log(data.size());