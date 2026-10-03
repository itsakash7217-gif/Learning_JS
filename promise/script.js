// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise is resolved");
//         resolve();
// },2000);
// })
// promise.then(function(){
//     console.log("Thanks for resolving");
// });
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise is resolved");
//         let num = Math.random()*10+1;
//             let error = true;
//             if(num < 5){
//                 error = false;
//             }
//             console.log(num);
//         if(!error){
//             resolve({
//                 email: "Akash@gmail.com",
//                 name: "Akash"
//             });
//         } else {
//             reject();
//         }
//     },1000);
// }).then(function(user){
//     console.log("Thanks for resolving" , user);
//     return user;
// }).then((user)=>{
//     console.log("Than you",user.name,"for visiting our website");
// }).catch(function(){
//     console.log("Promise is rejected");
// }).finally(function(){
//     console.log("Promise is either resolved or rejected");
// });
async function getAllUsers(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.text(); 
    console.log(data);
    } catch(error){
        console.log("Error is",error);
    }
}

getAllUsers();