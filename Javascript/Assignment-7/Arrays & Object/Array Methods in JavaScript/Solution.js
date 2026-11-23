// Section 1: push()
// Question-1:
// let colors = ["Red", "Blue", "Green"];

// colors.push("Yellow", "Black");

// console.log(colors);


// Output:
// ["Red", "Blue", "Green", "Yellow", "Black"]


// Question-2: 
// let numbers = [];

// numbers.push(5);
// numbers.push(10);
// numbers.push(15);

// console.log(numbers);


// Output:
// [5, 10, 15]


// Question-3:
// let items = ["Pen", "Book"];

// items.push("Eraser", "Scale");

// console.log(items);


// Output:
// ["Pen", "Book", "Eraser", "Scale"]


// Question-4:

// Question-5: Yes. push() modifies the original array by adding new elements.

// Section 2: pop()
// Question-1: 
// let numbers = [10, 20, 30, 40, 50];

// let removed1 = numbers.pop();
// let removed2 = numbers.pop();

// console.log("Array:", numbers);
// console.log("Removed 1:", removed1);
// console.log("Removed 2:", removed2);


// Output:
// Array: [10, 20, 30]
// Removed 1: 50
// Removed 2: 40


// Question-2:
// let colors = ["Red", "Blue", "Green"];

// let removed = colors.pop();

// console.log("Array:", colors);
// console.log("Removed:", removed);


// Output:
// Array: ["Red", "Blue"]
// Removed: Green


// Question-3: 
// let numbers = [100, 200, 300, 400];

// let removed = numbers.pop();

// console.log("Removed:", removed);
// console.log("Array:", numbers);


// Output:
// Removed: 400
// Array: [100, 200, 300]


// Question-4: pop() returns the removed last element.

// Question-5: If you call pop() on an empty array, it returns undefined.

// Section 3: unshift()
// Question-1: 
// let subjects = ["CSS", "JavaScript"];

// subjects.unshift("HTML");

// console.log(subjects);


// Output:
// ["HTML", "CSS", "JavaScript"]


// Question-2:
// let numbers = [20, 30];

// numbers.unshift(5, 10);

// console.log(numbers);


// Output:
// [5, 10, 20, 30]


// Question-3:
// let cities = [];

// cities.unshift("Ahmedabad");
// cities.unshift("Surat");
// cities.unshift("Rajkot");

// console.log(cities);


// Output:
// ["Rajkot", "Surat", "Ahmedabad"]


// Question-4: unshift() adds new elements at the beginning of an array.

// Question-5: Yes. unshift() can add multiple elements in a single call.

// Section 4: shift()
// Question-1:
// let cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara"];

// let removed = cities.shift();

// console.log("Removed:", removed);
// console.log("Remaining:", cities);


// Output:
// Removed: Ahmedabad
// Remaining: ["Surat", "Rajkot", "Vadodara"]


// Question-2: 
// let numbers = [10, 20, 30, 40];

// let removed1 = numbers.shift();
// let removed2 = numbers.shift();

// console.log("Array:", numbers);
// console.log("Removed 1:", removed1);
// console.log("Removed 2:", removed2);


// Output:
// Array: [30, 40]
// Removed 1: 10
// Removed 2: 20


// Question-3:
// let fruits = ["Apple", "Banana", "Mango"];

// let removed = fruits.shift();

// console.log("Removed:", removed);
// console.log("Array:", fruits);


// Output:
// Removed: Apple
// Array: ["Banana", "Mango"]


// Question-4: shift() removes the first element, whereas pop() removes the last element.

// Question-5: shift() returns the removed first element.

// Section 5: indexOf()
// Question-1:
// let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Kiwi"];

// console.log(fruits.indexOf("Banana"));
// console.log(fruits.indexOf("Papaya"));


// Output:
// 2
// -1


// Question-2:
// let arr = ["A", "B", "C", "B", "D"];

// console.log(arr.indexOf("B"));


// Output:
// 1


// Question-3:
// let students = ["Jenil", "Mahir", "Arjun", "Krishna"];

// console.log(students.indexOf("Arjun"));


// Output:
// 2


// Question-4: indexOf() returns -1 if the element is not found.

// Question-5: It returns the index of the first occurrence of the element.

// Section 6: lastIndexOf()
// Question-1:
// let numbers = [10, 20, 10, 30, 10];

// console.log(numbers.lastIndexOf(10));


// Output:
// 4


// Question-2: 
// let arr = ["X", "Y", "Z", "Y", "X"];

// console.log("Y:", arr.lastIndexOf("Y"));
// console.log("X:", arr.lastIndexOf("X"));


// Output:
// Y: 3
// X: 4


// Question-3: 
// let numbers = [5, 10, 20, 10, 30];

// console.log(numbers.lastIndexOf(10));


// Output:
// 3


// Question-4: indexOf() searches from the beginning, whereas lastIndexOf() searches from the end.

// Question-5: Use lastIndexOf() when you need to find the last occurrence of a repeated element.

// Section 7: includes()
// Question-1:
// let friends = ["Jenil", "Mahir", "Arjun", "Krishna"];

// if (friends.includes("Mahir")) {
//     console.log("Name Found");
// }
// else {
//     console.log("Name Not Found");
// }


// Output:
// Name Found


// Question-2:
// let numbers = [11, 22, 33, 44];

// console.log(numbers.includes(33));
// console.log(numbers.includes(55));


// Output:
// true
// false


// Question-3: 
// let subjects = ["HTML", "CSS", "JavaScript", "Python"];

// console.log(subjects.includes("CSS"));
// console.log(subjects.includes("Java"));


// Output:
// true
// false


// Question-4: includes() returns either true or false.

// Question-5: Yes. includes() works with both numbers and strings.

// Section 8: reverse()
// Question-1:
// let numbers = [10, 20, 30, 40, 50];

// console.log("Before:", numbers);

// numbers.reverse();

// console.log("After:", numbers);


// Output:
// Before: [10, 20, 30, 40, 50]
// After: [50, 40, 30, 20, 10]


// Question-2:
// let arr = ["A", "B", "C", "D"];

// arr.reverse();

// console.log(arr);


// Output:
// ["D", "C", "B", "A"]


// Question-3: 
// let cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara"];

// cities.reverse();

// console.log(cities);


// Output:
// ["Vadodara", "Rajkot", "Surat", "Ahmedabad"]


// Question-4: reverse() modifies the original array.

// Question-5: In-place means changing the original array directly instead of creating a new array.

// Section 9: sort() – Basic Version
// Question-1: 
// let students = ["Yashvi", "Mahir", "Jenil", "Arjun", "Krishna"];

// students.sort();

// console.log(students);


// Output:
// ["Arjun", "Jenil", "Krishna", "Mahir", "Yashvi"]


// Question-2:
// let animals = ["Dog", "Cat", "Elephant", "Ant"];

// animals.sort();

// console.log(animals);


// Output:
// ["Ant", "Cat", "Dog", "Elephant"]


// Question-3:
// let numbers = [40, 100, 5, 25];

// numbers.sort();

// console.log(numbers);


// Output:
// [100, 25, 40, 5]


// Question-4: Because sort() converts numbers to strings by default and sorts them alphabetically (lexicographically), not numerically.

// Question-5: Yes. sort() changes the original array.

// Section 10: join()
// Question-1: 
// let languages = ["JavaScript", "Python", "Java", "C++"];

// let result = languages.join(" | ");

// console.log(result);


// Output:
// JavaScript | Python | Java | C++


// Question-2:
// let subjects = ["HTML", "CSS", "JavaScript"];

// console.log(subjects.join(" - "));


// Output:
// HTML - CSS - JavaScript


// Question-3: 
// let subjects = ["Python", "JavaScript", "HTML"];

// console.log(subjects.join(" / "));


// Output:
// Python / JavaScript / HTML


// Question-4: If no separator is passed, join() uses a comma (,).

// Question-5: join() returns a string.

// Section 11: concat()
// Question-1: 
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let result = arr1.concat(arr2);

// console.log("New Array:", result);
// console.log("Array 1:", arr1);
// console.log("Array 2:", arr2);


// Output:
// New Array: [10, 20, 30, 40, 50, 60]
// Array 1: [10, 20, 30]
// Array 2: [40, 50, 60]


// Question-2: 
// let arr1 = [1, 2];
// let arr2 = [3, 4];

// console.log(arr1.concat(arr2));


// Output:
// [1, 2, 3, 4]


// Question-3:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let result = arr1.concat(arr2, arr3);

// console.log(result);


// Output:
// [1, 2, 3, 4, 5, 6]


// Question-4: No. concat() does not modify the original arrays.

// Question-5: Yes. You can combine multiple arrays using a single concat() call.

// Section 12: slice()
// Question-1: 
// let numbers = [5, 10, 15, 20, 25, 30];

// let result = numbers.slice(2, 5);

// console.log(result);


// Output:
// [15, 20, 25]


// Question-2: 
// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.slice(1, 4);

// console.log("New Array:", result);
// console.log("Original Array:", numbers);


// Output:
// New Array: [20, 30, 40]
// Original Array: [10, 20, 30, 40, 50]


// Question-3:
// let numbers = [10, 20, 30, 40, 50, 60];

// let result = numbers.slice(0, 3);

// console.log(result);


// Output:
// [10, 20, 30]


// Question-4: No. slice() does not modify the original array.

// Question-5: If the second argument is omitted, slice() extracts elements from the starting index to the end of the array.

// Section 13: splice()
// Question-1: 
// let students = ["Jenil", "Mahir", "Arjun"];

// students.splice(1, 0, "Krishna");

// console.log(students);


// Output:
// ["Jenil", "Krishna", "Mahir", "Arjun"]


// Question-2: 
// let numbers = [10, 20, 30, 40, 50];

// numbers.splice(1, 2, 25);

// console.log(numbers);


// Output:
// [10, 25, 40, 50]


// Question-3: 
// let numbers = [100, 200, 300];

// numbers.splice(1, 1, 250);

// console.log(numbers);


// Output:
// [100, 250, 300]


// Question-4: slice() extracts elements without changing the original array, whereas splice() can add, remove or replace elements in the original array.

// Question-5: Yes. splice() modifies the original array.

// Section 14: toString()
// Question-1:
// let movies = ["Avatar", "Inception", "Joker", "Titanic"];

// let result = movies.toString();

// console.log(result);


// Output:
// Avatar,Inception,Joker,Titanic


// Question-2: 
// let numbers = [1, 2, 3, 4];

// let result = numbers.toString();

// console.log(result);


// Output:
// 1,2,3,4


// Question-3:
// let subjects = ["Python", "HTML", "JavaScript"];

// console.log(subjects.toString());


// Output:
// Python,HTML,JavaScript


// Question-4: toString() converts array elements into a comma-separated string, whereas join() allows us to choose a separator.

// Question-5: toString() uses a comma (,) as the default separator.

// Section 15: fill()
// Question-1:
// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.fill(10);

// console.log(numbers);


// Output:
// [10, 10, 10, 10, 10, 10]


// Question-2:
// let numbers = [1, 2, 3, 4, 5];

// numbers.fill(0);

// console.log(numbers);


// Output:
// [0, 0, 0, 0, 0]


// Question-3:
// let arr = [1, 2, 3, 4];

// arr.fill("Hello");

// console.log(arr);


// Output:
// ["Hello", "Hello", "Hello", "Hello"]


// Question-4: Yes. fill() changes the original array.

// Question-5: Yes. fill() can change only a specific part of an array by using starting and ending indexes.

// Example:
// let numbers = [1, 2, 3, 4, 5];

// numbers.fill(0, 1, 4);

// console.log(numbers);


// Output:
// [1, 0, 0, 0, 5]
