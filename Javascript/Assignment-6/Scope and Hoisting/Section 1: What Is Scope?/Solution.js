// Question-1
// var city = "Surat";

// function display() {
//     var country = "India";

//     console.log(city);
//     console.log(country);
// }

// display();

// Global variable: city
// Function-scoped variable: country
// Both are accessible inside display()


// Question-2
// var price = 500;

// function calculate() {
//     var tax = 50;
//     console.log(price + tax);
// }

// calculate();
// console.log(price);

// Output:
// 550
// 500


// Question-3
// var college = "ABC College";

// function student() {
//     var name = "Rahul";
//     var age = 20;
// }

// function teacher() {
//     var subject = "JavaScript";
// }

// college = Global scope
// name = Function scope
// age = Function scope
// subject = Function scope


// Question-4
// function first() {
//     var number = 100;
// }

// function second() {
//     console.log(number);
// }

// first();
// second();

// Output:
// ReferenceError: number is not defined
// number is local to first()


// Question-5
// var globalValue = 100;

// function showValues() {
//     var localValue = 50;

//     console.log(globalValue);
//     console.log(localValue);
// }

// showValues();
// console.log(globalValue);

// Output:
// 100
// 50
// 100
