// Question-1

// let temperature = [28, 32, 25, 40, 18, 35];
// let days = 0;

// for (let temp of temperature){
//     if(temp>30){
//         days+=1
//     }
// }

// console.log( "Number of hottest Days =>" , days)


// Question-2

// let number = 4729;
// let sum=0;

// for (;number>0 ; number=Math.floor(number/10)){
//     let digit=number%10;
//     sum=sum+digit;

// }

// console.log("Sum of digits=>" , sum);


// Question-3


// for (let i=1 ; i<=100 ; i++){
//     if(i%3==0 && i%5==0 && i%7!=0){
//         console.log(i)
//     }
// }


// Question-4

// let str1 = "JavaScript";
// let str2 = "";

// for (let consonants of str1){
//     if (consonants !== "a" && consonants !== "e" &&
//         consonants !== "i" && consonants !== "o" &&
//         consonants !== "u" && consonants !== "A" &&
//         consonants !== "E" && consonants !== "I" &&
//         consonants !== "O" && consonants !== "U")
//         {
//             str2 = str2 + consonants
//         }
// }

// console.log("Contains Only Consonants =>" , str2)



// Question-5

// let arr = [17,78,90,-5,7];
// let larger = arr[0];

// for(let i =1 ; i<=arr.length ; i++){
//     if(arr[i] > larger){
//         larger=arr[i]
//     }
// }

// console.log("largest Number=>" , larger)



// Question-6

// let num = 28;
// let sum=0;

// for(let i=1 ; i<num ; i++){
//     if(num%i==0){
//         sum+=i
//     }
// }

// if(num===sum){
//     console.log("Perfect Number.")
// }else{
//     console.log("Not a Perfect Number.")
// }


// Question-7


// for(let i=0 ; i<=7 ; i++){
//     console.log(2**i)
// }


// Question-8

// let a = 0;
// let b = 1;

// for (let i=1 ; i<=20 ; i++){
//     console.log(a);

//     let result = a + b;
//     a = b;
//     b = result;
// }




// Question-9

// let arr = [45, 78, 90, 32, 56, 88];
// let avg=0;
// let count=0;

// for (let i=0 ; i<arr.length;i++){
//     let arr1 = arr[i];
//     avg += arr1;

// }
// let average = Math.floor(avg/arr.length);

// console.log("Average Marks =>" , average)

// for(let i =0 ; i<arr.length ; i++){
//     let arr1 =arr[i];
//     if(average<arr1){
//         count+=1
//     }
// }

// console.log("Number of Students has marks above than Average Marks =>" , count)


// Question-10

// let num = 25;
// let binary = "";

// for(let n =num ; n >0 ; n = Math.floor(n/2) ){
//     let remainder = n%2;
//     binary=remainder +binary;
// }

// console.log(binary)








