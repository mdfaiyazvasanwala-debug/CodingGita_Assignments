// // Part F: Logical Operators (&&, ||, !)
// // 1. Logical AND (&&)



// // Question-1
// let username = "admin";
// let password = 1234;

// console.log(username === "admin" && password === 1234);
// // true

// // Question-2
// let isLoggedIn = true;
// let hasPermission = true;

// console.log(isLoggedIn && hasPermission);
// // true

// // Question-3
// let inStock = true;
// let price = 800;

// console.log(inStock && price < 1000);
// // true

// // Question-4
// let marks = 75;
// let attendance = 80;

// console.log(marks > 65 && attendance > 70);
// // true

// // Question-5
// let isWeekend = true;
// let isHoliday = false;

// console.log(isWeekend && isHoliday);
// // false



// // Question-6
// let a = 0;
// let b = 10;
// let result = a && b;
// console.log(result);
// // Output: 0

// // Question-7
// let x = 5;
// let y = 10;
// let result = (x > 3 && y) || 0;
// console.log(result);
// // Output: 10

// // Question-8
// let p = "Hello";
// let q = "";
// let r = "World";
// let result = p && q && r;
// console.log(result);
// // Output: "" (empty string)

// // Question-9
// let val = 5;
// let condition = val && (val = 0);
// console.log(condition);
// console.log(val);
// // Output:
// // 0
// // 0

// // Question-10
// let x = 10;
// let y = 20;
// let result = (x && y) && (x > y);
// console.log(result);
// // Output: false


// 2. Logical OR (||)



// // Question-11
// let passwordCorrect = true;
// let otpValid = false;

// console.log(passwordCorrect || otpValid);
// // true

// // Question-12
// let isMember = false;
// let hasCoupon = true;

// console.log(isMember || hasCoupon);
// // true

// // Question-13
// let age = 16;
// let height = 155;

// console.log(age > 18 || height > 150);
// // true

// // Question-14
// let emailGiven = true;
// let phoneGiven = false;

// console.log(emailGiven || phoneGiven);
// // true

// // Question-15
// let score = 900;
// let timeBonus = true;

// console.log(score > 1000 || timeBonus);
// // true



// // Question-16
// let a = 0;
// let b = false;
// let c = "";
// let d = null;
// let e = 42;
// let result = a || b || c || d || e;
// console.log(result);
// // Output: 42

// // Question-17
// let x = "Hello" || 0;
// let y = 0 || "Hi";
// console.log(x, y);
// // Output: Hello Hi

// // Question-18
// let a = 10;
// let b = 20;
// let result = (a < 5) || (b > 15);
// console.log(result);
// // Output: true

// // Question-19
// let val = 5;
// let condition = val || (val = 0);
// console.log(condition);
// console.log(val);
// // Output:
// // 5
// // 5

// // Question-20
// let x = "" || 0 || false || null || undefined || "OK";
// console.log(x);
// // Output: OK


// 3. Logical NOT (!)


// // Question-21
// let isBanned = false;

// console.log(!isBanned);
// // true (user can log in)

// // Question-22
// let isCompleted = false;

// console.log(!isCompleted);
// // true (task is pending)

// // Question-23
// let isOn = true;

// console.log(!isOn);
// // false (the light is not off)

// // Question-24
// let isActive = false;

// console.log(!isActive);
// // true (subscription is inactive)

// // Question-25
// let isReadOnly = false;

// console.log(!isReadOnly);
// // true (file can be edited)

// Question-26
// let a = 0;
// let b = 1;
// console.log(!a, !b);
// // Output: true false

// // Question-27
// let x = "Hello";
// let y = "";
// console.log(!x, !y);
// // Output: false true

// // Question-28
// let val = 5;
// let result = !val;
// console.log(result);
// // Output: false

// // Question-29
// let a = 10;
// let b = 20;
// let result = !(a && b);
// console.log(result);
// // Output: false

// // Question-30
// let x = 0;
// let y = 1;
// let result = !(x || y);
// console.log(result);
// // Output: false






