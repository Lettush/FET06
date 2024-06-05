// JS Operators and expression
// arithmetic operators and expressions + - * /
let a = 10;
let b = 5;

// addition +
// result = a + b
// a = a + b;
// console.log(a);

// compound assignment operator
a += b;
console.log(a);

// subtraction: a = a - b
a -= b;
console.log(a);

// multiplication: a = a * b
a *= b;
console.log(a);

// division: a = a/b
a /= b;
console.log(a);

// modulo: a = a % b
a %= b;
console.log(a);

// concatenation
console.log("hello " + a + " World");

// comparison operator - true and false
let x = 10;
let y = 5;

console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal to
console.log(x <= y); // less than or equal to
console.log(x == y); // equal to
console.log(x != y); // not equal

// type coercion
console.log(50 == "50"); // true; loose equality
console.log(50 === "50"); // false; strict equality

// Logical Operators
let sunny = false;
let warm = true;

// AND - &&
console.log("Sunny AND warm: ", sunny && warm);

// OR - ||
console.log("Sunny OR warm: ", sunny || warm);

// NOT - !
console.log("Not warm: ", !warm);

// Unary Operator (++, --)
let num = 1;
num++; //increment
console.log(num);

num--; //decrement
console.log(num);

// Ternary Operator - condition ? expression1 : expression2
let activeStatus = true;
let member = activeStatus ? "Registered" : "Not registered";

console.log(member);

// typeof operator
console.log(typeof num);
console.log(typeof member);
