// conditional statement
// if
let number = 25;

if (number > 23) {
  console.log("You are greater than 23");
}

// if - else
if (number > 25) {
  console.log("You are greater than 25");
} else if (number < 25) {
  console.log("You are less than 25");
} else {
  console.log("you are equal to 25");
}

// switch
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("It's the end of the week");
    break;
  default:
    console.log("It's a regular day");
}

// loops
// console.log(1);
// console.log(2);

// for loop
for (let i = 0; i <= 5; i++) {
  console.log("For Loop Count: ", i);
}

// while loop
let count = 1;

while (count <= 5) {
  console.log("While Loop: ", count);
  count++;
}

// do-while loop
let j = 8;

do {
  console.log("Do-While Count:", j);
  j++;
} while (j <= 5);

// simple validation
let input = "";

do {
  input = prompt("Please put in something");
} while (input == "");
