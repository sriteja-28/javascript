// Array.forEach() 
// var txt = ""; 
// var numbers = [45, 4, 9, 16, 25]; 
// numbers.forEach(myFunction); 
// function myFunction(value, index, array) { 
// txt = txt + value + "<br>";  
// } 

let tot = 0;
let arr = [2, 4, 5, 7, 8, 4, 5];

arr.forEach(value => tot += value);
console.log(tot);

//Array.map()
// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);
// function myFunction(value, index, array) {
//     return value * 2;
// } 
// console.log(numbers2);

let num1 = [45, 4, 9, 16, 25];
let num2 = num1.map(value => value * 2);
console.log(num2);

//Array.filter() 
// var numbers = [45, 4, 9, 16, 25]; 
// var over18 = numbers.filter(myFunction); 
// function myFunction(value, index, array) { 
// return value > 18; 
// }
// console.log(over18);

let over18 = num1.filter(value => value > 18);
console.log(over18);

// Array.reduce() 
// var numbers1 = [45, 4, 9, 16, 25]; 
// var sum = numbers1.reduce(myFunction); 
// function myFunction(total, value, index, array) { 
// return total + value; 
// }
// console.log(sum);

let sum = num1.reduce((total, value) => total + value);
console.log(sum);

//Array.reduceRight() 
// var numbers1 = [45, 4, 9, 16, 25]; 
// var sumR = numbers1.reduceRight(myFunction); 
// function myFunction(total, value, index, array) { 
// return total + value; 
// } 
// console.log(sumR);
let sumR = num1.reduceRight((total, value) => total + value);
console.log(sumR);

// Array.every() 
// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.every(myFunction);
// function myFunction(value, index, array) {
//     return value > 18;
// }
// console.log(allOver18);

let allOver18 = num1.every(value => value > 18);
console.log(allOver18);

// Array.some()
// var numbers = [45, 4, 9, 16, 25]; 
// var someOver18 = numbers.some(myFunction); 
// function myFunction(value, index, array) { 
// return value > 18; 
// }
// console.log(someOver18);
let someOver18 = num1.some(value => value > 18);
console.log(someOver18);

// Array.indexOf() 
// Array.lastIndexOf() 
// ["Apple", "Orange", "Apple", "Mango"].indexOf('Apple');
// 0
// ["Apple", "Orange", "Apple", "Mango"].lastIndexOf('Apple');


var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
var b = fruits.lastIndexOf("Mango");
console.log(a, b);

// Array.find()
// Array.findIndex() 

// var numbers = [4, 9, 16, 25, 29]; 
// var firstV = numbers.find(myFunction);
// var firstI = numbers.findIndex(myFunction);
// function myFunction(value, index, array) {
//     return value > 18;
// }
// console.log(firstV, firstI);

let nms=[4, 9, 16, 25, 29];
let firstV = nms.find(value=>value>18);
let firstI = nms.findIndex(value=>value>18);
console.log(firstV);
console.log(firstI);

//*
// !diff b/w map and filter

// map transforms elements.
//filter selects elements based on a condition.


//! diff blw indexOf and lastIndexOf

// indexOf(): Returns the first occurrence index of a specified element in an array.
// lastIndexOf(): Returns the last occurrence index of a specified element in an array.




// Array.forEach(): Executes a provided function once for each array element (does not return a new array).

//  Array.map(): Creates a new array populated with the results of calling a provided function on
//   every element in the calling array.

// Array.filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// Array.reduce(): Applies a function against an accumulator and each value of the array (from left-to-right)
//  to reduce it to a single value.

// Array.reduceRight(): Applies a function against an accumulator and each value of the array (from right-to-left) 
// to reduce it to a single value.

// Array.every(): Checks if all elements in the array pass the test implemented by the provided function,
//  returning true or false.

// Array.some(): Checks if at least one element in the array passes the test implemented by the provided function,
//  returning true or false.

// Array.indexOf(): Returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.

// Array.lastIndexOf(): Returns the last index at which a given element can be found in the array, 
// or -1 if it is not present.

// Array.find(): Returns the first element that satisfies the provided testing function, or undefined 
// if none is found.

// Array.findIndex(): Returns the index of the first element that satisfies the provided testing function, 
// or -1 if none is found.






