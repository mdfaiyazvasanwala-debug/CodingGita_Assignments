// Question-21
// for (var number = 2; number <= 6; number += 2) {
//     console.log(number);
// }

// console.log("Final:", number);

// // Output:
// // 2
// // 4
// // 6
// // Final: 8


// Question-22
// var count = 10;

// for (var count = 1; count <= 3; count++) {
//     console.log(count);
// }

// console.log("Count:", count);

// // Output:
// // 1
// // 2
// // 3
// // Count: 4

// // The original value 10 is replaced because var has no block scope.


// Question-23
// var i = 5;

// while (i > 2) {
//     console.log(i);
//     i--;
// }

// console.log("After loop:", i);

// // Output:
// // 5
// // 4
// // 3
// // After loop: 2

// // i is accessible after the loop because it is declared using var.


// Question-24
// for (var item = 1; item <= 3; item++) {
//     console.log("Item:", item);
// }

// console.log("Last item:", item);

// // Output:
// // Item: 1
// // Item: 2
// // Item: 3
// // Last item: 4

// // No error because var is accessible outside the loop.


// Question-25
// for (let step = 1; step <= 4; step++) {
//     console.log(step);
// }

// // console.log(step);
// // ReferenceError: step is not defined

// // let provides block scope, so step cannot be accessed outside the loop.
