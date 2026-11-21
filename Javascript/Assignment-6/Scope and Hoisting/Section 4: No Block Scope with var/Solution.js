// Question-16
// if (10 > 5) {
//     var result = "Success";
// }

// console.log(result);

// // Output:
// // Success
// // var does not have block scope.


// Question-17
// var number = 1;

// if (true) {
//     var number = 2;
// }

// console.log(number);

// // Output:
// // 2
// // Both declarations refer to the same variable.


// Question-18
// var message = "Start";

// {
//     var message = "End";
// }

// console.log(message);

// // Output:
// // End
// // A normal block does not create a separate scope for var.


// Question-19
// if (false) {
//     var result = 100;
// }

// console.log(result);

// // Output:
// // undefined
// // var is hoisted, but the assignment is not executed.


// Question-20
// if (true) {
//     let secret = "Hidden";
// }

// // console.log(secret);
// // ReferenceError: secret is not defined

// // let provides block scope, so secret cannot be accessed outside the if block.
