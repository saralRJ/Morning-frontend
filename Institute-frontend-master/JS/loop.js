/** 
types
1. for loop
syntax:
for(initialization; condition; increment/decrement){
    body of for loop
}  
 
2.while loop
syntax:
initialization;
while(condition){
    body of while
    increment/decrement
}


3.do while loop
initialization
do{
    body of do while
    increment/decrement
}while(condition)

*/
//print number from 1 to 10
//initialization
// i=1
//condition
// i<=10
//increment
//i++

// for(i=1; i<=10; i++){
//     console.log(i)
// }
// write a program to print even number from 1 to 50
// var mult = num1 * num2
// for(i=0; i<=50; i = i+2){
//     if(i%2!=0){
// console.log(i)
//     // }else{
//     //     console.log(i,'is an odd number')
//     }
// }

//wap(write a program) to print the sum of number from 1 to 10

//     var j = 0
// for(i=1; i<=10; i++){
//         j = j + i
//     }
//     console.log(j)

//wap to print the factorial of the number 5
// var j = 1
// for(i=5;i>=1;i--){
//     j = j * i
//     console.log(j)
// }
//WAP to check the number is prime number
//wap to print the fibonacci series eg: 0+1=1, 1+1=2, 1+2=3, 3+2=5

// var divcount = 0
// var n = Number(prompt('enter number'))
// for(i=1;i<=n;i++){
//     if(n%i==0){
//         divcount++
//     }
// }
// if(divcount==2){
//     console.log(n,'is a prime number')
// }else{
//     console.log(n,'is not a prime number')
// }

//fibonacci series
// var n = 7
// var a = 0
// var b = 1
// if (n == 1) {
//     console.log(a)
// }
// else if (n == 2) {
//     console.log(a)
//     console.log(b)
// } else {
//     console.log(a)
//     console.log(b)
//     for (i = 1; i <= n - 2; i++) {
//         var c = a + b
//         a = b
//         b = c
//         console.log(c)
//     }
// }

// var i =1
// while(i<=10){
//     console.log(i)
//     i++
// }

var n = 9
var a = 0
var b = 1
do{
    console.log(a)
}while(n==1)
do{
    console.log(b)
}while(n==2)
var i = 1
do{
    // console.log(i)
    i++
    var c = a + b
    a = b
    b = c
    console.log(c)
}while(i <= n - 2)