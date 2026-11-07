function first(name){
    this.name = name;
    console.log("checked");
}
function second(name,PaymentAddress,age){
    first.call(this,name);
    this.PaymentAddress=PaymentAddress;
    this.age=age;
}
let data = new second("akash","gopal nagar", 22);
console.log(data);