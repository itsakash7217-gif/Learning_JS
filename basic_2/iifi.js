// immedialety invoked function expressions (iifi)

(function a(){ // this is the named iifi
    console.log("chat with js --")
})();

(()=>{//unnamed iifi
    console.log("chat with java --")
})();
((name)=>{
    console.log(`chat with ${name} --`)
})("Akash");