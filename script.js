//? 1-Create a function that accepts a variable and returns its type
const getVariableType = (variable) => typeof variable;

//! Test previous function
console.log("============= 1 =============");
console.log(getVariableType(1)); // number
console.log(getVariableType(true)); // boolean
console.log(getVariableType("true")); // string
console.log(getVariableType(null)); // object
console.log(getVariableType(undefined)); // undefined

//? 2-Create functions for addition, subtraction, moltiplication, and division
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const divide = (a, b) => a / b;

//! Test previous function
console.log("============= 2 =============");
console.log("add(6, 3) =>", add(6, 3)); // 9
console.log("sub(6, 3) =>", sub(6, 3)); // 3
console.log("mul(6, 3) =>", mul(6, 3)); // 18
console.log("divide(6, 3) =>", divide(6, 3)); // 2

//? 3-Create a function that checks if a value is NaN
const isValueNaN = (value) => Number.isNaN(value);

//! Test previous function
console.log("============= 3 =============");
console.log(isValueNaN(3 * 2)); // false
console.log(isValueNaN(0 / 0)); // true
console.log(isValueNaN("NaN")); // false
console.log(isValueNaN("123")); // false

//? 4-Create a function that returns true if a number is even and false if odd
const isEven = (num) => num % 2 === 0;

//! Test previous function
console.log("============= 4 =============");
console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true

//? 5-Create a function to concatenate two strings with a space in between
function stringConcat(str1, str2) {
  // return str1.concat(" ", str2);
  // return str1 + " " + str2;
  return `${str1} ${str2}`;
}

//! Test previous function
console.log("============= 5 =============");
console.log(stringConcat("I'm", "not ok")); // I'm not ok
console.log(stringConcat("Hello", "World!")); // Hello World!

//? 6-Create a function that takes a string and returns its uppercase version
const stringUpperCase = (str) => str.toUpperCase();

//! Test previous function
console.log("============= 6 =============");
console.log(stringUpperCase("ok")); // OK
console.log(stringUpperCase("hello")); // HELLO

//? 7-Create a function that takes a string and an index then returns the character at a given index in the string
function getCharacter(str, index) {
  // return str.at(index);
  return str[index];
}

//! Test previous function
console.log("============= 7 =============");
console.log(getCharacter("Hello", 0)); // H
console.log(getCharacter("Hello", 1)); // e
console.log(getCharacter("Hello", 2)); // l
console.log(getCharacter("Hello", 3)); // l
console.log(getCharacter("Hello", 4)); // o

//? 8-Create a functions greet() that takes a name of a person and then returns "Hello, name"
const greet = (name) => `Hello, ${name}`;

//! Test previous function
console.log("============= 8 =============");
console.log(greet("Mahmoud")); // Hello, Mahmoud
console.log(greet("Esmat")); // Hello, Esmat
console.log(greet("Abdullah")); // Hello, Abdullah

//? 9-Create a function that checks if a value is null or undefined
function valueChecker(value) {
  if (value === null) {
    return "The Value is null";
  } else if (value === undefined) {
    return "The Value is undefined";
  }

  return "The value is't null or undefined";
}

//! Test previous function
console.log("============= 9 =============");
console.log(valueChecker(null)); // The Value is null
console.log(valueChecker(undefined)); // The Value is undefined
console.log(valueChecker()); // The Value is undefined
console.log(valueChecker("")); // The value is't null or undefined

//? 10-Create a function that generates a random number between two values.
function rondomNumber(start, end) {
  return Math.round(start + (end - start) * Math.random());
}

//! Test previous function
console.log("============= 10 =============");
console.log(rondomNumber(1, 2)); // rondom number between 1 and 2
console.log(rondomNumber(1, 5)); // rondom number between 1 and 5
console.log(rondomNumber(1, 10)); // rondom number between 1 and 10
console.log(rondomNumber(1, 50)); // rondom number between 1 and 50

//? 11-Create a function that takes a number, checks its value and return "Positive" or "Negative" or "Zero"
function isPositive(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  }

  return "Zero";
}

//! Test previous function
console.log("============= 11 =============");
console.log(isPositive(123)); // Positive
console.log(isPositive(-22)); // Negative
console.log(isPositive(0.2)); // Positive
console.log(isPositive(0)); // Zero

//? 12-Create a function that safely evaluates a mathematical expression and handles errors gracefully.
const evaluateCalculation = (calc) => eval(calc);

//! Test previous function
console.log("============= 12 =============");
console.log("6 + 3 =>", evaluateCalculation("6 + 3")); // 9
console.log("6 * 3 =>", evaluateCalculation("6 * 3")); // 18
console.log("6 - 3 =>", evaluateCalculation("6 - 3")); // 3
console.log("6 / 3 =>", evaluateCalculation("6 / 3")); // 2

console.log("============= Thanks 😉 =============");
