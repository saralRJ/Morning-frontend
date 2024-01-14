/*
function
=> function is a reusable block of code which performs a specific task
syntax:

//function declaration, initialization
function function_name(){
    \\body of function
}

//function call
function_name()

types of function:
1. named function
2. function with argument
3. function with return type
4. anonymous/unnamed function
5. IIFE(immediately invoked functional expression)

*/

//named function
// function sum(){
//     var n1 = 10
//     var n2 = 20
//     var sum = n1 + n2
//     console.log(sum)
// }
// sum()

//function with argument
// function welcome(name, address){
//     //name and address are parameter
//     // console.log('Good Morning '+name+' !!!')
//     var greetingText = 'Hello ' + name + ', welcome to ' + address;
//     console.log(greetingText)
// }
// welcome('Ram', 'Vedu.')

// function sum(){
//     var n1 = 10
//     var n2 = 20
//     var add = n1 + n2
//     console.log(add)
// }

// function sub(){
//     var n1 = 10
//     var n2 = 20
//     var minus = n1 - n2
//     console.log(minus)
// }
// function mul(){
//     var n1 = 10
//     var n2 = 20
//     var  mult= n1 * n2
//     console.log(mult)
// }
// function div(){
//     var n1 = 10
//     var n2 = 20
//     var division = n1 / n2
//     console.log(division)
// }

function details(detail){
    var info = 'Hello '+ detail[0] + ' welcome to ' + detail[6] + ' your email: ' + detail[1] + ' your phone ' + detail[2] + ' your status '+ detail[3] + ' your id and gender '+ detail[4]+' ' + detail[5]
    console.log(info)
}
var detail = ['ram', 'ram@gmail.com', 12345667, 'online', 122 , 'male', 'vedu' ]
details(detail)