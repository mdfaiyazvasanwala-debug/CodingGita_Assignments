// Question-31
// console.log(score);

// var score = 90;

// console.log(score);

// // Output:
// // undefined
// // 90

// // var declaration is hoisted and initialized with undefined.


// Question-32
// var a = 10;

// function test() {
//     console.log(a);

//     var a = 20;

//     console.log(a);
// }

// test();

// // Output:
// // undefined
// // 20

// // Local a is hoisted, so it does not use the global value.


// Question-33
// console.log(first);
// console.log(second);

// var first = 100;
// var second = 200;

// console.log(first);
// console.log(second);

// // Output:
// // undefined
// // undefined
// // 100
// // 200


// Question-34
// function calculate() {
//     console.log(total);

//     var total = 50;

//     console.log(total);
// }

// calculate();

// // Output:
// // undefined
// // 50

// // Hoisting works like this:

// function calculateExample() {
//     var total;
//     console.log(total);

//     total = 50;
//     console.log(total);
// }

// calculateExample();


// Question-35
// var price = 100;

// function showPrice() {
//     console.log(price);

//     var price = 500;
// }

// showPrice();
// console.log(price);

// // Output:
// // undefined
// // 100

// // Local price is hoisted inside the function.
// // It does not use the global price.
