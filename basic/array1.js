let arr = [0,1,2,3,4,5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(-1);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.indexOf(3));
console.log(arr.includes(3));

console.log("Check splice and slice");
console.log(arr.slice(3,5));
console.log(arr);

console.log(arr.splice(2,3));
console.log(arr);