const a = 20;
if(a<20){
    console.log("Data is corrct");
}else{
    console.log("Data is inconsistant")
}
const havecard = true;
const productadded = true;
const loginwithgoogle = true;
const loginwithemail = true;

if(havecard && productadded){
    console.log("Payment is successfully done");
}
if(loginwithemail || loginwithgoogle){
    console.log("User is login completely")
}