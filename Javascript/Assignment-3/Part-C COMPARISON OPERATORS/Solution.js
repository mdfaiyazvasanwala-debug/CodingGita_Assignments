// C] COMPARISON OPERATORS

// 1. LOOSE EQUALITY (==)

// Question-1

// let a = "25";
// let b = 25;

// console.log(a == b);

// // Output:
// // true


// Question-2

// console.log(0 == false);

// // Output:
// // true


// Question-3

// console.log(10 == "10");
// console.log(null == undefined);

// // Output:
// // true
// // true


// Question-4

// console.log("" == 0);
// console.log([] == false);

// // Output:
// // true
// // true


// Question-5

// console.log(NaN == NaN);

// // Output:
// // false

// // Explanation:
// // NaN is not equal to anything, including itself.



// 2. LOOSE INEQUALITY (!=)

// Question-1

// console.log("18" != 18);

// // Output:
// // false


// Question-2

// let password = "1234";
// let userInput = 1234;

// console.log(password != userInput);

// // Output:
// // false


// Question-3

// console.log(5 != "5");
// console.log(0 != false);

// // Output:
// // false
// // false


// Question-4

// console.log(null != undefined);
// console.log("" != 0);

// // Output:
// // false
// // false


// Question-5

// console.log(NaN != NaN);

// // Output:
// // true

// // Explanation:
// // NaN is not equal to itself, so != returns true.



// 3. STRICT EQUALITY (===)

// Question-1

// let a1 = "25";
// let b1 = 25;

// console.log(a1 === b1);

// // Output:
// // false

// // Explanation:
// // === checks both value and data type.
// // "25" is a string and 25 is a number.


// Question-2

// console.log(0 === false);
// console.log(null === undefined);

// // Output:
// // false
// // false


// Question-3

// console.log(10 === "10");
// console.log(true === 1);

// // Output:
// // false
// // false


// Question-4

// console.log("" === 0);
// console.log([] === false);

// // Output:
// // false
// // false


// Question-5

// let value1 = 10;
// let value2 = "10";

// console.log(value1 === value2);

// // Output:
// // false

// // Explanation:
// // === is preferred because it does not perform automatic type conversion.
// // It checks both value and data type.



// 4. STRICT INEQUALITY (!==)

// Question-1

// console.log("18" !== 18);

// // Output:
// // true


// Question-2

// console.log(0 !== false);
// console.log(null !== undefined);

// // Output:
// // true
// // true


// Question-3

// console.log(5 !== "5");
// console.log(true !== 1);

// // Output:
// // true
// // true


// Question-4

// console.log("" !== 0);
// console.log(NaN !== NaN);

// // Output:
// // true
// // true


// Question-5

// let input = "5";

// if (input !== "0") {
//     console.log("Input is not equal to 0");
// }

// // Output:
// // Input is not equal to 0


// Part C] Relational Operators
// 5. Greater Than >


// Q1
// let marks = 78;
// let passingMarks = 40;
// console.log(marks > passingMarks); // true

// // Q2
// let today = 35;
// let yesterday = 28;
// console.log(today > yesterday); // true

// // Q3
// console.log(15 > 10); // true
// console.log(10 > 15); // false
// console.log(10 > 10); // false

// // Q4
// console.log("20" > 15); // true
// console.log("5" > "10"); // true
// console.log("abc" > 10); // false

// // Q5
// console.log(null > 0);      // false
// console.log(undefined > 0); // false


// // Q6
// let stock = 120;
// let wanted = 85;
// console.log(stock > wanted); // true

// // Q7
// console.log(true > false); // true
// console.log("10" > "2");   // false
// console.log(NaN > 5);      // false
// Booleans convert to numbers.


// 7. Greater Than or Equal To >=

// Q1
// let marks = 75;
// let distinction = 75;
// console.log(marks >= distinction); // true

// // Q2
// let money = 300;
// let ticketPrice = 300;
// console.log(money >= ticketPrice); // true

// // Q3
// console.log(25 >= 25); // true
// console.log(30 >= 25); // true
// console.log(20 >= 25); // false

// // Q4
// console.log("25" >= 25); // true
// console.log("10" >= "2"); // false
// console.log(null >= 0); // true

// // Q5
// console.log(undefined >= 0); // false
// // undefined converts to NaN, so the comparison is false.

// // Q6
// let people = 8;
// let maxPeople = 8;
// console.log(people >= maxPeople); // true

// // Q7
// console.log(true >= 1); // true
// console.log("" >= 0);   // true
// console.log(NaN >= NaN); // false


// 8. Less Than or Equal To <=

// Q1
// let speed = 60;
// let speedLimit = 60;
// console.log(speed <= speedLimit); // true

// // Q2
// let marks = 39;
// let passingMarks = 40;
// console.log(marks < passingMarks); // true (failed)

// // Q3
// console.log(15 <= 20); // true
// console.log(20 <= 15); // false
// console.log(15 <= 15); // true

// // Q4
// console.log("15" <= 20); // true
// console.log("30" <= "5"); // true
// console.log(null <= 0); // true

// // Q5
// console.log(undefined <= 0); // false
// // undefined converts to NaN.

// // Q6
// let books = 10;
// let maxBooks = 10;
// console.log(books < maxBooks); // false (no space for more books)

// // Q7
// console.log(false <= 0); // true
// console.log("" <= 0);    // true
// console.log(NaN <= 5);   // false

// Mixed Practice

// Q1
// console.log(18 >= 18); // true
// console.log(32 < 35);  // true
// console.log(90 > 85);  // true

// // Q2
// console.log(10 > 5 && 5 < 10); // true
// console.log("10" >= 10);       // true
// console.log(null <= undefined); // false
// console.log("5" < "10" && 5 > 2); // false

// // Q3
// let productPrice = 499;
// let customerMoney = 500;

// console.log(customerMoney >= productPrice); // true: can buy
// console.log(customerMoney > productPrice);  // true: change will be left
// console.log(customerMoney - productPrice);  // 1

// // Q4
// console.log("10" > "2"); // false
// console.log(10 > 2);     // true
