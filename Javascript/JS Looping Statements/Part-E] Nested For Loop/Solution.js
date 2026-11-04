// Question-1

// let num =1

// for(let i =1 ; i<=4 ; i++){
//     let row = ""
//     for (let j =1 ; j<=i ; j++){
//         row =row + num+" ";
//         num++;
//     }
//     console.log(row);
// }


// Question-2

// let num =1;

// for(let i = 1 ; i<=4 ; i++){
//     let row = "";
//     for(let j = 1 ; j<=i ; j++){
//         row = row + num + " ";

//     }
//     console.log(row);
//     num++;
// }


// Question-3

// let num =1

// for(let i =1 ; i<=4 ; i++){
//     let row = ""
//     for (let j =1 ; j<=i ; j++){
//         row =row + num+" ";
//         num++;
//     }
//     console.log(row);
// }


// Question-4

// for(let i=1 ; i<=4 ; i++){
//     let row = ""
//     for(let j=1 ; j<=4 ; j++){
//         if(i===1 || i===4 || j===1 || j===4){
//             row = row + "* "

//         }
//         else{
//             row = row + "  "

//         }

//     }
    
//     console.log(row)

// }


// Question-5


// for(let i =1 ; i<=6 ; i++){
//     let row = "";
//     for(let j =1 ; j<=i ; j++){
//         if(i%2===0){
//             row =row + "$ "
//         }
//         else{
//             row =row + "# "
//         }
//     }
//     console.log(row)

// }


// Question-6


// for (let i=1 ; i<=5 ; i++){
//     let row = "";
//     for (let j=1 ; j<=i ; j++){
//         row =row + String.fromCharCode((64+j)) + " " ;
        
//     }
//     console.log(row);

// }


// Question-7


// for (let i =1 ; i<=5 ; i++){
//     let row = "";
//     for (let j =1 ; j<=i ; j++){
//         if(i===5 || j===1 || j===i){
//             row =row + "* "
//         }
//         else{
//             row = row + "  "
//         }
//     }
//     console.log(row)
// }


// Question-8


// for (let i =5 ; i>=1 ; i--){
//     let row = "";
//     for (let j =1 ; j<=i ; j++){
//         row =row + "*"
//     }
//     console.log(row)
// }


// Question-9


// for (let i =5 ; i>=1 ; i--){
//     let row = "";
//     for (let j =1 ; j<=i ; j++){
//         row =row + i + " "
//     }
//     console.log(row)
// }


// Question-10


// for (let i =5 ; i>=1 ; i--){
//     let row = "";
//     for (let j =1 ; j<=i ; j++){
//         row =row + j + " "
//     }
//     console.log(row)
// }


// Question-11

// let num =15

// for (let i =5 ; i>=1 ; i--){
//     let row = "";
//     for (let j =1 ; j<=i ; j++){
//         row =row + num + " "
//         num--;
//     }
//     console.log(row)
// }


// Question-12


// for (let i=5 ; i>=1 ;i--){
//     let row = "";
//     for (let j =1 ; j<=i ; j++){
//         if(i===5 || j===1 || j==i){
//             row =row+"* "

//         }
//         else{
//             row = row +"  ";
//         }
//     }
//     console.log(row);
// }


// Question-13

// let row =5;
// let col =5;

// for (let i=1 ; i<=row ;i++){
//     let bag = "";
//     for (let j =1 ; j<=col ; j++){
//         if(j==i){
//             bag =bag+"  "

//         }
//         else{
//             bag = bag +"* ";
//         }
//     }
//     console.log(bag);
// }


// Question-14


// for(let i = 1 ; i<=5 ; i++){
//     let row = "";
//     for(let j = 1 ; j<=10 ; j++){
//         if(i*j%2===0){
//             row = row + `${i * j} `                
//         }
        

//     }
//     console.log(`Table = ${i} => ${row}`)


// }


// Question-15

// let row =3;

// for(let i =1 ;i<=row ; i++){
//     let bag = "";
//     for(let j =1 ;j<=row-i ; j++){
//         bag = bag + "  ";

//     }
//     for(let k =1 ;k<=i ; k++){
//         bag = bag + k + " ";

//     }
//     for(let l =i-1 ;l>=1 ; l--){
//         bag = bag + l + " ";

//     }
//     console.log(bag)
// }


