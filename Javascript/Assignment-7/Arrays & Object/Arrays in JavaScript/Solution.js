// Section 1: What Is an Array?
// Question-1: An array is a collection of multiple values stored in a single variable.

// Question-2: Index.

// Question-3: Index starts from 0.

// Question-4: 30

// Question-5: Index 3.

// Section 2: Creating Arrays
// Question-1: Two ways:
// 1. Array literal []
// 2. Array constructor new Array().
// Question-2: Array literal method is recommended.

// Question-3:
// let students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];


// Question-4:
// let marks = new Array(85, 90, 78);


// Question-5: new keyword.

// Section 3: Accessing Values in an Array
// Question-1: Index number using square brackets [].

// Question-2: Jenil

// Question-3: Priyesha

// Question-4: undefined

// Question-5:
// console.log(colors[0]);



// Section 4: Updating Values
// Question-1: By using the index number and assigning a new value.

// Question-2:
// marks[1] = 95;


// Question-3:
// [80, 95, 90]


// Question-4: False.

// Question-5: Yes. JavaScript allows assigning values at higher indexes. The array length increases, and the empty positions in between become empty slots.

// Section 5: Array Length
// Question-1: length

// Question-2: 4

// Question-3: 0

// Question-4: It helps us know the total number of elements and control loops.

// Question-5: It is a property, not a function. No parentheses are required.

// Section 6: Looping Through Arrays
// Question-1:
// 1. for loop
// 2. while loop
// Question-2: i < students.length

// Question-3: After the array access statement.

// Question-4:
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }


// Question-5: The loop runs one extra time and prints undefined for the out-of-range index.

// Question-6:
// for (let sub of subject) {
//     console.log(sub);
// }


// Question-7: It is simpler and directly gives the values without needing an index variable.

// Question-8:Correct code:
// const colors = ["Red", "Blue", "Green"];

// for (const color of colors) {
//     console.log(colors.indexOf(color));
// }


// Output:
// 0
// 1
// 2



// Section 7: Adding Elements to Arrays
// Question-1: push()

// Question-2: unshift()

// Question-3:
// let nums = [1, 2, 3];

// nums.push(4);

// console.log(nums);


// Output:
// [1, 2, 3, 4]


// Question-4:
// nums.unshift(0);

// console.log(nums);


// Output:
// [0, 1, 2, 3, 4]


// Question-5: True.

// Section 8: Removing Elements
// Question-1: pop()

// Question-2: shift()

// Question-3: pop() removes the last element (500).

// Remaining array:
// [100, 200, 300, 400]


// Question-4: shift() removes the first element (100).

// Remaining array:
// [200, 300, 400]


// Question-5: Both methods return the removed element and modify the original array.

// Section 9: Searching in Arrays
// Question-1: It returns the index of the searched value.

// Question-2: It returns -1.

// Question-3: 1

// Question-4: -1

// Question-5:
// console.log(students.indexOf("Priyesha"));



// Section 10: Array with Different Data Types
// Question-1: Yes, JavaScript arrays can store different data types.

// Question-2:
// let data = [100, "Hello", true, null];


// Question-3: By using the typeof operator.

// Example:
// for (let value of data) {
//     console.log(typeof value);
// }


// Question-4: number

// Question-5: boolean


// Section 11: Array of Arrays (Matrix) – 2D Arrays
// Question-1:
// const matrix = [
//     [10, 20],
//     [30, 40],
//     [50, 60],
//     [70, 80]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i][1]);
// }


// Output:
// 20
// 40
// 60
// 80


// Question-2:
// const marks = [
//     [85, 90, 78],
//     [70, 75, 80],
//     [88, 82, 95],
//     [60, 65, 70]
// ];

// console.log(marks[2]);


// Output:
// [88, 82, 95]


// Question-3:
// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// let total = 0;

// for (let i = 0; i < matrix.length; i++) {
//     total = total + matrix[i].length;
// }

// console.log("Total Elements:", total);


// Output:
// Total Elements: 12


// Question-4:
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// matrix[1][1] = 0;

// console.log(matrix);


// Output:
// [
//   [1, 2, 3],
//   [4, 0, 6],
//   [7, 8, 9]
// ]


// Question-5: 
// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];

// console.log(matrix[0][2]);


// Output:
// 30



// Section 12: Real-World Example
// Question-1: What does marks[i] represent inside the loop?

// It represents the marks of one student (an inner array).

// Question-2: Why do we use marks.length instead of hard-coding 3?

// Because marks.length automatically gives the total number of students, making the code flexible.

// Question-3: What happens if one student has only 2 subject marks instead of 3?

// The calculation will use undefined for the missing third mark. The total and average will become NaN (Not a Number).

// Section 13: Common Mistakes
// Question-1: What does the following code output?
// const arr = [10, 20, 30];
// console.log(arr[3]);


// Output:
// undefined


// Question-2: Why is this code considered wrong?
// arr[arr.length] = 10;


// It is not actually wrong. It adds 10 at the end of the array. However, if the intention is to replace the last element, this code does not do that.

// Question-3: Correct the code so that 40 is properly added at the end of the array.
// let arr = [10, 20, 30];

// arr[arr.length] = 40;

// console.log(arr);


// Output:
// [10, 20, 30, 40]


// Question-4: What is a sparse array? Give one example.

// A sparse array is an array that contains empty slots between elements.

// Example:
// let arr = [10, 20, 30];

// arr[5] = 60;

// console.log(arr);


// Question-5: True or False: Accessing an invalid index throws an error in JavaScript.

// False. It returns undefined.

// Question-6: What is the difference between an array and an object in JavaScript?
// - Array stores values using numbered indexes.
// - Object stores values using named keys (properties).

// Section 14: Practice Exercises
// Question-1: 
// const numbers = [12, 7, 18, 25, 4, 9, 30];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }


// Output:
// 12
// 18
// 4
// 30


// Question-2:
// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];

// for (let i = cities.length - 1; i >= 0; i--) {
//     console.log(cities[i]);
// }


// Output:
// Bhavnagar
// Vadodara
// Rajkot
// Surat
// Ahmedabad


// Question-3:
// const scores = [12, 45, 7, 89, 23];

// let largest = scores[0];
// let second = -Infinity;

// for (let i = 1; i < scores.length; i++) {
//     if (scores[i] > largest) {
//         second = largest;
//         largest = scores[i];
//     }
//     else if (scores[i] > second) {
//         second = scores[i];
//     }
// }

// console.log("Second Largest:", second);


// Output:
// Second Largest: 45


// Question-4:
// const colors = ["Red", "Blue", "Green", "Yellow"];

// colors.push("Purple");
// colors.unshift("Black");

// console.log(colors);


// Output:
// ["Black", "Red", "Blue", "Green", "Yellow", "Purple"]


// Question-5:
// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];

// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         sum = sum + matrix[i][j];
//     }
// }

// console.log("Total Sum:", sum);


// Output:
// Total Sum: 210


// Question-6:
// const marks = [45, 67, 89, 32, 76, 91, 54];

// let count = 0;

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 50) {
//         count++;
//     }
// }

// console.log("Count:", count);


// Output:
// Count: 5


// Question-7: 
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i][i]);
// }


// Output:
// 1
// 5
// 9



// Section 15: Multiple Choice Questions
// Question-1: What will be the output?

// Answer: d) 20

// Question-2: Which method adds an element at the beginning?

// Answer: c) arr.unshift(5)

// Question-3: What does indexOf("Orange") print?

// Answer: c) -1

// Question-4: Which statement about JavaScript arrays is true?

// Answer: c) Arrays can store mixed data types.

// Question-5: What is the output?
// let nums = [1, 2, 3];
// nums.pop();
// nums.push(4);
// console.log(nums);


// Answer: b) [1, 2, 4]

// Question-6: What does matrix[2][1] return?

// Answer: d) 60

// Question-7: What does typeof data[1] return?

// Answer: b) string

// Section 16-A: Mini Assignment 1 – Shopping Cart Calculator
// Question-1:
// const cart = [
//     ["Laptop", 45000, 1],
//     ["Mouse", 800, 2],
//     ["Keyboard", 1500, 1],
//     ["Headphones", 2500, 1]
// ];

// let grandTotal = 0;

// for (let i = 0; i < cart.length; i++) {
//     let product = cart[i][0];
//     let price = cart[i][1];
//     let quantity = cart[i][2];

//     let itemTotal = price * quantity;

//     console.log("Product:", product);
//     console.log("Price:", price);
//     console.log("Quantity:", quantity);
//     console.log("Item Total:", itemTotal);
//     console.log("----------------");

//     grandTotal = grandTotal + itemTotal;
// }

// console.log("Grand Total:", grandTotal);

// let discount = 0;

// if (grandTotal > 50000) {
//     discount = grandTotal * 0.10;
// }

// let finalAmount = grandTotal - discount;

// console.log("Discount:", discount);
// console.log("Final Payable Amount:", finalAmount);


// Output:
// Product: Laptop
// Price: 45000
// Quantity: 1
// Item Total: 45000
// ----------------
// Product: Mouse
// Price: 800
// Quantity: 2
// Item Total: 1600
// ----------------
// Product: Keyboard
// Price: 1500
// Quantity: 1
// Item Total: 1500
// ----------------
// Product: Headphones
// Price: 2500
// Quantity: 1
// Item Total: 2500
// ----------------
// Grand Total: 50600
// Discount: 5060
// Final Payable Amount: 45540



// Section 16-B: Mini Assignment 2 – Classroom Attendance Tracker
// Question-1: 
// const attendance = [
//     ["Jenil", ["P", "P", "A", "P", "P"]],
//     ["Mahir", ["P", "A", "P", "P", "A"]],
//     ["Yashvi", ["P", "P", "P", "P", "P"]],
//     ["Arjun", ["A", "A", "P", "P", "A"]]
// ];

// let highest = 0;
// let topper = "";

// for (let i = 0; i < attendance.length; i++) {
//     let name = attendance[i][0];
//     let days = attendance[i][1];

//     let present = 0;
//     let absent = 0;

//     for (let j = 0; j < days.length; j++) {
//         if (days[j] === "P") {
//             present++;
//         }
//         else {
//             absent++;
//         }
//     }

//     let percentage = (present / days.length) * 100;

//     let status;

//     if (percentage >= 75) {
//         status = "Good";
//     }
//     else {
//         status = "Low Attendance";
//     }

//     console.log("Name:", name);
//     console.log("Present:", present);
//     console.log("Absent:", absent);
//     console.log("Attendance:", percentage + "%");
//     console.log("Status:", status);
//     console.log("----------------");

//     if (percentage > highest) {
//         highest = percentage;
//         topper = name;
//     }
// }

// console.log("Highest Attendance:", topper);
// console.log("Percentage:", highest + "%");


// Output:
// Name: Jenil
// Present: 4
// Absent: 1
// Attendance: 80%
// Status: Good
// ----------------
// Name: Mahir
// Present: 3
// Absent: 2
// Attendance: 60%
// Status: Low Attendance
// ----------------
// Name: Yashvi
// Present: 5
// Absent: 0
// Attendance: 100%
// Status: Good
// ----------------
// Name: Arjun
// Present: 2
// Absent: 3
// Attendance: 40%
// Status: Low Attendance
// ----------------
// Highest Attendance: Yashvi
// Percentage: 100%



// Section 16-C: Mini Assignment 3 – Movie Rating Analyzer
// Question-1:
// const movies = [
//     ["Inception", [9, 8, 9, 10, 8]],
//     ["Avatar", [7, 8, 7, 6, 8]],
//     ["Interstellar", [10, 9, 9, 10, 9]],
//     ["Joker", [8, 7, 8, 9, 8]]
// ];

// let highest = 0;
// let bestMovie = "";

// for (let i = 0; i < movies.length; i++) {
//     let name = movies[i][0];
//     let ratings = movies[i][1];

//     let total = 0;

//     for (let j = 0; j < ratings.length; j++) {
//         total = total + ratings[j];
//     }

//     let average = total / ratings.length;

//     let verdict;

//     if (average >= 9) {
//         verdict = "Excellent";
//     }
//     else if (average >= 7) {
//         verdict = "Good";
//     }
//     else {
//         verdict = "Average";
//     }

//     console.log("Movie:", name);
//     console.log("Ratings:", ratings.join(" "));
//     console.log("Average Rating:", average);
//     console.log("Verdict:", verdict);
//     console.log("----------------");

//     if (average > highest) {
//         highest = average;
//         bestMovie = name;
//     }
// }

// console.log("Highest Rated Movie:", bestMovie);
// console.log("Highest Average:", highest);


// Output:
// Movie: Inception
// Ratings: 9 8 9 10 8
// Average Rating: 8.8
// Verdict: Good
// ----------------
// Movie: Avatar
// Ratings: 7 8 7 6 8
// Average Rating: 7.2
// Verdict: Good
// ----------------
// Movie: Interstellar
// Ratings: 10 9 9 10 9
// Average Rating: 9.4
// Verdict: Excellent
// ----------------
// Movie: Joker
// Ratings: 8 7 8 9 8
// Average Rating: 8
// Verdict: Good
// ----------------
// Highest Rated Movie: Interstellar
// Highest Average: 9.4



// Section 16-D: Mini Assignment 4 – Temperature of the Week
// Question-1:
// const temperatures = [
//     ["Monday", 32],
//     ["Tuesday", 35],
//     ["Wednesday", 30],
//     ["Thursday", 28],
//     ["Friday", 33],
//     ["Saturday", 36],
//     ["Sunday", 31]
// ];

// let highest = temperatures[0][1];
// let lowest = temperatures[0][1];

// let highestDay = "";
// let lowestDay = "";

// let total = 0;

// for (let i = 0; i < temperatures.length; i++) {
//     let day = temperatures[i][0];
//     let temp = temperatures[i][1];

//     console.log(day + ":", temp + "°C");

//     total = total + temp;

//     if (temp > highest) {
//         highest = temp;
//         highestDay = day;
//     }

//     if (temp < lowest) {
//         lowest = temp;
//         lowestDay = day;
//     }

//     if (temp >= 35) {
//         console.log("Heat Alert on", day);
//     }
// }

// let average = total / temperatures.length;

// console.log("----------------");
// console.log("Highest Temperature:", highest + "°C");
// console.log("Highest Day:", highestDay);
// console.log("Lowest Temperature:", lowest + "°C");
// console.log("Lowest Day:", lowestDay);
// console.log("Average Temperature:", average.toFixed(2) + "°C");


// Output:
// Monday: 32°C
// Tuesday: 35°C
// Heat Alert on Tuesday
// Wednesday: 30°C
// Thursday: 28°C
// Friday: 33°C
// Saturday: 36°C
// Heat Alert on Saturday
// Sunday: 31°C
// ----------------
// Highest Temperature: 36°C
// Highest Day: Saturday
// Lowest Temperature: 28°C
// Lowest Day: Thursday
// Average Temperature: 32.14°C




