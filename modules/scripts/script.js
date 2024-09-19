// import b from "./app.js"
//import sum from "./sum.js"

// import add from "./sum.js"  

// var a=20;
// console.log(a);

// console.log(b);
// //console.log(`The sum of ${a}, ${b} is: ${sum(a,b)}`);

//!aliasing
// console.log(`The sum of ${a}, ${b} is: ${add(a,b)}`);

// //!multiple exports
// import {a,b,sum} from "./app.js";
// console.log(a,b,sum(a,b));

//!importing everything from an file
// import * as x from "./app.js";
// // const {a,b,sum}=x;
// console.log(x.a,x.b,x.sum(x.a,x.b));

//!multiple import aliasing

import {a as x,b as y,sum as add} from "./app.js";
console.log(x,y);
console.log(add(x,y));