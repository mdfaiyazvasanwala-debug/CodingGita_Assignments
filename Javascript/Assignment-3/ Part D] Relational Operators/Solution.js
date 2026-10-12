// Part D] Relational Operators
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
