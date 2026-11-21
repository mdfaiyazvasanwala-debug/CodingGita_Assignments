// Question-1
// function mainTask() {
//     function helperTask() {
//         return "Task completed successfully";
//     }

//     return helperTask();
// }

// console.log(mainTask());


// Question-2
// function calculateFinal(m1, m2) {
//     function getTotal() {
//         return m1 + m2;
//     }

//     return "Final marks = " + getTotal();
// }

// console.log(calculateFinal(80, 90));


// Question-3
// function studentStatus(name, marks) {
//     function getGrade() {
//         if (marks >= 80) {
//             return "A";
//         } else if (marks >= 60) {
//             return "B";
//         } else {
//             return "C";
//         }
//     }

//     return name + " has received grade " + getGrade();
// }

// console.log(studentStatus("Aarav", 85));


// Theory Questions
// Question-4

// The main advantage of nested functions is that they keep helper functions private and organize related code. We use them when a function is needed only inside another function.

// Question-5

// Yes, an inner function can access variables of its outer function because of lexical scope. But the outer function cannot directly access variables declared inside the inner function.
