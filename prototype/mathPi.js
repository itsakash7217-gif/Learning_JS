// let pi = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pi);

const mine = {
    name : "Akash",
    like : "Tea",
    age : 23,
    take : function(){
        console.log("Data is check");
    }
}
// let check = Object.getOwnPropertyDescriptor(mine,"name");
// console.log(check);
Object.defineProperty(mine ,'name ' , {
    writable : false,
    enumerable : false
})
for (let [key , value] of Object.entries(mine)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}
