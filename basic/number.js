let num = 200;
console.log(num);
console.log(typeof num);
let a =new Number(100);
console.log(a);
console.log(a.toFixed(2))
let b =100000000;
console.log(b.toLocaleString('en-IN'));
console.log(b.toExponential(2));
let c = 145.363234;
console.log(c.toPrecision(4));
console.log(Math.round(3.6));

// --------------------------------------------------------------------------------------------
// Maths
let x = 10.34;
console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));
console.log(Math.trunc(x));
console.log(Math.sign(x));
console.log(Math.pow(2,3));
console.log(Math.sqrt(x));
console.log(Math.abs(-100));
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));

let min  =10;
let max  =20;

console.log(Math.trunc((Math.random()*(max-min+1))+min));


