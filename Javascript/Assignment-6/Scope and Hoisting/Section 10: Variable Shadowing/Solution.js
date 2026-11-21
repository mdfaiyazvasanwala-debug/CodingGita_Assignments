// Question-46
// var score = 50;

// function test() {
//     var score = 90;
//     console.log(score);
// }

// test();
// console.log(score);

// // Output:
// // 90
// // 50

// // Shadowing means a local variable has the same name as a global variable.


// Question-47
// var name = "Global Name";

// function show() {
//     var name = "Local Name";
//     console.log(name);
// }

// show();
// console.log(name);

// // Output:
// // Local Name
// // Global Name

// // Local name does not change the global variable.


// Question-48
// var value = 10;

// function update() {
//     value = 20;
//     console.log(value);
// }

// update();
// console.log(value);

// // Output:
// // 20
// // 20

// // Without var, the existing global variable is updated.


// Question-49
// var color = "Blue";

// function changeColor() {
//     var color = "Red";
//     console.log("Inside:", color);
// }

// changeColor();
// console.log("Outside:", color);

// // Output:
// // Inside: Red
// // Outside: Blue


// Question-50
// var marks = 70;

// function showMarks() {
//     var marks = 95;
//     console.log("Inside:", marks);
// }

// showMarks();

// console.log("Outside:", marks);

// // Output:
// // Inside: 95
// // Outside: 70
