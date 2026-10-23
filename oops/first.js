// object;
// check={
//     name : "Akash",
//     roll : 13,
//     age : 22,
//     liking : "Travelling,gaming,Having interest in Filming"
// }
// console.log(check.name);

// function

function check(name,age,liking){
    this.name=name;
    this.age=age;
    this.liking=liking;
    return this;
}
let a = check("Akash",25,"Travelling");
console.log(a);
let b = check("Rapid",22,"Gaming");

console.log(b);
console.log(a);