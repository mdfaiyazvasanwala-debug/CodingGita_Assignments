// Question-26
// function calculate() {
//     for (var number = 1; number <= 3; number++) {
//         console.log(number * 10);
//     }

//     console.log("Final:", number);
// }

// calculate();

// // Output:
// // 10
// // 20
// // 30
// // Final: 4

// // number is accessible inside the function but not outside it.


// Question-27
// function student() {
//     for (var marks = 60; marks <= 80; marks += 10) {
//         console.log(marks);
//     }

//     console.log(marks);
// }

// student();

// // console.log(marks);
// // ReferenceError: marks is not defined

// // Output:
// // 60
// // 70
// // 80
// // 90

// // The first four uses are valid.
// // The last statement outside the function causes an error.


// Question-28
// function test() {
//     var value = 5;

//     while (value < 8) {
//         console.log(value);
//         value++;
//     }

//     console.log("Final value:", value);
// }

// test();

// // Output:
// // 5
// // 6
// // 7
// // Final value: 8

// // Loop executes 3 times.


// Question-29
// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }

// // console.log(i);
// // ReferenceError: i is not defined

// calculate();

// // Output:
// // 1
// // 2

// // i is local to calculate(), so it cannot be accessed outside.


// Question-30
// function printNumbers() {
//     for (var i = 1; i <= 5; i++) {
//         console.log(i);
//     }

//     console.log("Final:", i);
// }

// printNumbers();

// // console.log(i);
// // ReferenceError: i is not defined

// // Output:
// // 1
// // 2
// // 3
// // 4
// // 5
// // Final: 6

// // var is function-scoped, so i is accessible inside the function only.
