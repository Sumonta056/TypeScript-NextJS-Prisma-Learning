console.log("First TypeScript Code");

// annote to number
let age: number = 20; 

// Now cannot change type like js
// * typescript is statically typed

// Catch Error in compile time rather than runtime like js
// ! age = "gg"; // Error

if (age > 18) {
    age += 10;
}
console.log(age);

// typescript annoation
let sales = 123;
let course = "TypeScript";
let isBeginner = true;
let level;


function add(a: number, b: number): number {
    return a + b;
}
// you dont need to specify return type, typescript will infer it
function print(value: any) {
    console.log(value);
}


