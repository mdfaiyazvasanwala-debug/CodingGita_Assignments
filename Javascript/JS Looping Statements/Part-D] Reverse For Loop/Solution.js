// Question-1

// for (let i=50 ; i>=1 ; i--){
//     if (i%3 === 0 && i%9 !==0){
//         console.log(i)
//     }
// }


// Question-2


// let num = 4729;
// let product = 1;

// for (let n=num ; n>0 ; n=Math.floor(n/10)){
//     let result = (n%10)
//     if(result%2 !==0 ){
//         console.log(result)
//         product = product *result
//     }
    
// }

// console.log(product)


// Question-3


// let str = "Programming";
// let result =""

// for(let i = str.length-1 ; i>=0 ; i--){

//     let ch = str[i];

//     if (
//         ch !== "a" && ch !== "e" &&
//         ch !== "i" && ch !== "o" &&
//         ch !== "u" &&
//         ch !== "A" && ch !== "E" &&
//         ch !== "I" && ch !== "O" &&
//         ch !== "U"
//     ) {
//         result = result + ch;
//     }
    
// }
// console.log(result)



// Question-4

// let a = 0;
// let b = 1;
// let c;

// for (let i = 1; i <= 15; i++) {
//     c = a + b;
//     a = b;
//     b = c;
// }

// for (let i = 1; i <= 15; i++) {
//     c = b - a;
//     console.log(c);
//     b = a;
//     a = c;
// }


// Question-5


// let num =747;

// let reverse =0;

// for(let n = num ; n>0 ; n=Math.floor(n/10)){
//     let result = n%10;
//     reverse = reverse*10 + result;
// }
// if(reverse===num){
//     console.log("Palindrome Number");
    
// }
// else{
//     console.log("Not a Palindrome Number");

// }


// Question-6

// let arr = [12, 45, 7, 23, 56, 89, 34];

// let greater = arr[0];

// for (let i = arr.length-1 ; i>=0 ; i-- ){

//     if(arr[i]<50 && arr[i]>greater){

//         greater=arr[i]
//     }
// }

// console.log(greater)


// Question-7


// let temp = [32, 28, 41, 19, 35, 27, 38];

// let count = 0;

// for(let i = temp.length-1 ; i>=0 ; i--){

//     if(temp[i] < 30 ){
//         count+=1
//     }
// }
// console.log("Days Colder Than 30 degree =>" , count)


// Question-8

// let num =13 ;

// let binary = "";

// for(let n=num ; n>0 ; n = Math.floor(n/2)){
//     let remainder = n%2;
//     binary = binary + remainder;

// }

// console.log(binary)


// Question-9


// let arr = [90, 85, 70, 95, 60, 88, 75];

// for(let i=arr.length-1 ; i>=0 ; i--){

//     if(arr[i] > 80){
//         console.log("Score =>" , arr[i])
//         console.log("Score Index =>" , i)
//         break;
//     }
// }


// Question-10


// for(let i =40 ; i>=0 ; i--){

//     if(Number.isInteger(Math.sqrt(i))){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }
