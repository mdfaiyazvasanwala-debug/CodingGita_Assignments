// Question-56
// function test() {
//     x = 100;
// }

// test();

// console.log(x);

// // Output in a non-strict classic script:
// // 100

// // Problem: x is created as a global variable accidentally.
// // In strict mode, this causes a ReferenceError.


// Question-57
// if (true) {
//     var x = 20;
// }

// console.log(x);

// // Output:
// // 20

// // var does not have block scope.
// // Therefore, x is accessible outside the if block.


// Question-58
// console.log(a);

// var a = 10;

// // Output:
// // undefined

// // var declaration is hoisted to the top of its scope.


// Question-59
// var x = 10;

// var x = 20;

// console.log(x);

// // Output:
// // 20

// // var allows redeclaration.
// // It can become confusing because the previous value is overwritten.


// Question-60
// function calculate() {
//     var total = 0;

//     for (var i = 1; i <= 5; i++) {
//         total = total + i;
//     }

//     console.log(total);
// }

// calculate();

// // console.log(total);
// // ReferenceError: total is not defined

// // Output:
// // 15

// // total is declared inside the function.
// // It cannot be accessed outside the function.
