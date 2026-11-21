// Question-51
// function outer() {
//     var teacher = "Kartik Sir";

//     function inner() {
//         var student = "Jenil";

//         console.log(student);
//         console.log(teacher);
//     }

//     inner();
// }

// outer();

// // Output:
// // Jenil
// // Kartik Sir

// // teacher and student cannot be accessed directly outside outer().


// Question-52
// function parent() {
//     var a = "Parent";

//     function child() {
//         var b = "Child";

//         function grandchild() {
//             var c = "Grandchild";

//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }

//         grandchild();
//     }

//     child();
// }

// parent();

// // Output:
// // Parent
// // Child
// // Grandchild


// Question-53
// function outer() {
//     var secret = "Hidden";

//     function inner() {
//         console.log(secret);
//     }
// }

// // inner();
// // ReferenceError: inner is not defined

// outer();

// // Error occurs because inner() is declared inside outer()
// // and cannot be called directly outside it.


// Question-54
// function createMessage() {
//     var greeting = "Hello";

//     function show() {
//         console.log(greeting + " students");
//     }

//     return show;
// }

// var messageFunc = createMessage();

// messageFunc();

// // Output:
// // Hello students

// // The inner function remembers the outer variable greeting.
// // This is called a closure.


// Question-55
// function studentInfo() {
//     var name = "Rahul";
//     var course = "JavaScript";

//     function display() {
//         console.log("Name:", name);
//         console.log("Course:", course);
//     }

//     display();
// }

// studentInfo();

// // Output:
// // Name: Rahul
// // Course: JavaScript
