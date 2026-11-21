// Question-36
// sayHello();

// function sayHello() {
//     console.log("Hello from CodingGita");
// }

// // Output:
// // Hello from CodingGita

// // Function declarations are completely hoisted.


// Question-37
// display();

// function display() {
//     console.log("Function is hoisted completely");
// }

// // Output:
// // Function is hoisted completely

// // Unlike var, the complete function is available before declaration.


// Question-38
// greet();

// // Output:
// // TypeError: greet is not a function

// var greet = function() {
//     console.log("Hi");
// };

// // var is hoisted as undefined, but the function assignment is not hoisted.


// Question-39
// console.log(typeof myFunc);

// function myFunc() {
//     return "I am hoisted";
// }

// console.log(myFunc());

// // Output:
// // function
// // I am hoisted


// Question-40
// var name = "Rahul";

// showMessage();

// function showMessage() {
//     console.log("Hello " + name);
// }

// // Output:
// // Hello Rahul

// // The function can be called before its declaration because of hoisting.
