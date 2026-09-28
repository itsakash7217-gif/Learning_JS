// setTimeout(function(){
//     console.log("Hey now this can work");
// },3000);

// let calls = function(){
//     console.log("Data is check during call");
// }
// setTimeout(calls,3000);
let stop=document.querySelector(".stop");
let head = document.querySelector(".head");
const a = setTimeout(function(){
    head.innerHTML="Now i am Akash";
    stop.disabled=true;
    console.log("now changes is done..");
},3000);
stop.addEventListener("click",function(){
    clearTimeout(a);
    console.log("Now changes Are stop...");
    stop.disabled=true;
});

