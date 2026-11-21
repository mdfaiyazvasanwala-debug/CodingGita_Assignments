// Question-41
// var institute = "CodingGita";

// function department() {
//     var dept = "CSE";

//     function batch() {
//         var year = 2025;

//         console.log(year);
//         console.log(dept);
//         console.log(institute);
//     }

//     batch();
// }

// department();

// // Output:
// // 2025
// // CSE
// // CodingGita

// // JavaScript searches the local scope first,
// // then outer scope, then global scope.


// Question-42
// var globalVar = "I am global";

// function outer() {
//     var outerVar = "I am outer";

//     function inner() {
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar);
//     }

//     inner();
// }

// outer();

// // Output:
// // I am global
// // I am outer
// // ReferenceError: innerVar is not defined

// // innerVar is not declared in any accessible scope.


// Question-43
// var a = 1;

// function level1() {
//     var b = 2;

//     function level2() {
//         var c = 3;

//         function deep() {
//             console.log(a, b, c);
//         }

//         deep();
//     }

//     level2();
// }

// level1();

// // Output:
// // 1 2 3

// // deep() can access a, b and c through the scope chain.


// Question-44
// var x = "global";

// function first() {
//     var x = "first";

//     function second() {
//         console.log(x);
//     }

//     second();
// }

// first();
// console.log(x);

// // Output:
// // first
// // global

// // Inside second(), JavaScript uses the nearest x variable.
// // Outside the function, it uses the global x.


// Question-45
// var a = "Global Variable";

// function outer() {
//     var b = "Outer Variable";

//     function middle() {
//         var c = "Middle Variable";

//         function inner() {
//             var d = "Inner Variable";

//             console.log(d);
//             console.log(c);
//             console.log(b);
//             console.log(a);
//         }

//         inner();
//     }

//     middle();
// }

// outer();

// // Output:
// // Inner Variable
// // Middle Variable
// // Outer Variable
// // Global Variable
