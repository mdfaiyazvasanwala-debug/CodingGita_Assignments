Assignment: Introduction to Variables and Datatypes

==================================================
Part I: Variables (let, var, const)
==================================================

Part A - 4 Questions


Q1. Personal Information

let name = "Faiyaz";
let age = 20;
let city = "Gujarat";

console.log(name);
console.log(age);
console.log(city);


Q2. Change the Score

let score = 50;
score = 80;

console.log(score);

Output:
80

Explanation:
let is used because the value of score can be changed.


Q3. Constant Value

const PI = 3.14;

console.log(PI);

Output:
3.14

Explanation:
const is used because the value of PI should not be changed.


Q4. Uninitialized Variables

var num1;
let num2;

console.log(num1);
console.log(num2);

num1 = 10;
num2 = 20;

console.log(num1);
console.log(num2);

Output:
undefined
undefined
10
20

Explanation:
Variables declared without a value have the value undefined.


==================================================
Part B - 4 Questions
==================================================


Q5. Choose the Correct Keyword

const studentName = "Faiyaz";
let marks = 85;
const schoolName = "ABC School";

marks = 90;

console.log(studentName);
console.log(marks);
console.log(schoolName);

Explanation:
const is used for values that do not change.
let is used for values that may change.


Q6. Understand Scope

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
console.log(b);
console.log(c);

Output:
10
ReferenceError
ReferenceError

Explanation:
var can be accessed outside the block.
let and const are block-scoped and cannot be accessed outside the block.


Q7. Test Re-declaration

Using var:

var user = "Faiyaz";
var user = "Rahul";

console.log(user);

Output:
Rahul

Explanation:
var allows re-declaration.

Using let:

let userName = "Faiyaz";
let userName = "Rahul";

Output:
SyntaxError

Explanation:
let does not allow re-declaration in the same scope.


Q8. Test Re-assignment

var a = 10;
let b = 20;
const c = 30;

a = 100;
b = 200;
c = 300;

console.log(a);
console.log(b);
console.log(c);

Output:
100
200
TypeError

Explanation:
var and let allow re-assignment.
const does not allow re-assignment.


==================================================
Part C - 2 Questions
==================================================


Q9. Predict and Explain

Given Code:

var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z);

Output:

20
ReferenceError
ReferenceError

Explanation:

1. x becomes 20 because var is not block-scoped.
2. y is declared using let inside the if block, so it cannot be accessed outside.
3. z is declared using const inside the if block, so it cannot be accessed outside.


Q10. Fix the Program

Correct Code:

const name = "Faiyaz";

let age = 20;
age = 25;

if (true) {
    var city = "Delhi";
}

let country = "India";

console.log(name);
console.log(age);
console.log(city);
console.log(country);

let score = 50;
score = 80;

console.log(score);

Output:

Faiyaz
25
Delhi
India
80

Explanation:

1. const must be initialized when declared.
2. let cannot be re-declared in the same scope, so age = 25 is used for re-assignment.
3. country is declared outside the if block because let is block-scoped.
4. score uses let because its value is changed from 50 to 80.
