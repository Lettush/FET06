// variables - boxes or containers
// let - mutable or changeable
let myName = "John";
console.log(myName);

myName = "Jane";
console.log(myName);

// const - constant
const year = 2024;
console.log(year);

// year = 2025;
// console.log(year); - will throw an error

// var
var myHobby = "coding";
console.log(myHobby);

myHobby = "programming";
console.log(myHobby);
// console.log(MyHobby);

// Key points
// single line comments

// case sensitivity
// camelCaseMethod - myHobby vs MyHobby

// Data Types - Primitive Type
// numbers
let number = 13;
number = 13.4;
number = -1;
console.log("Number:", number);

// string - " " or ' '
let name = "Joe";
console.log(name);

// boolean - true or false
let isStudent = false;
console.log("isStudent: ", isStudent);

// undefined - uninitialized or missing value
let nothing;
console.log(nothing);

// null - intentional absence of an object
let nullVar = null;
console.log(nullVar);

// Reference Types
// Object - key-value pairs {}
let personObject = {
  personName: "Jane",
  age: 20,
};
console.log(personObject);
console.log(personObject.personName);

// array - ordered list []
let fruits = ["apple", "banana", "watermelon", "grapes"];
console.log(fruits);

// accessing array elements
// index
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// modifying array elements
fruits[0] = "strawberry";
console.log(fruits);

// .push() - add an element at the end
fruits.push("mango");
console.log(fruits);

// .pop() - remove the last element
fruits.pop();
console.log(fruits);

// Dynamic Typing
let things = ["item", 25, true];
console.log(things);

// function
function sayHello(name) {
  console.log("Hello ", name);
}

sayHello("Kim");

// Date -
let date = new Date("2022-04-23");
console.log(date);
