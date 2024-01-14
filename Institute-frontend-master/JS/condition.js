/*
conditions in javascript
black => {

}
1. if
syntax:
if(condition){
    //body of if
}
condition:
truth value=> true, any defined value, any value
false value => false, null, 0, undefined, ""
*/
// var a = 20;
// var b = 15;
// if(true){
//     console.log(a, ' is greater than ',b)
// }

/*
2. nested if
syntax:
if(condition){
    if(condition){

    }
}
*/

// if(a=b){
//     console.log('I am ram')
//         if(a==b){
//             console.log('name:ram','address:kumaripati')
//         }
//     }
var a = 22
var b = 3
var c = 7
var div1 = a/b
var div2 = a/c
if(a%b==0)
console.log(a, 'is divisible by 3')
    if(a%c==0){
        console.log(a, 'is divisible by', b, 'and', c)
    }

/*
3. if else
task:
a. check the number odd or even number
b. check number is positive or negative
syntax:
if(condition){
    body of if
}
else{
    body of else
}
*/

/*
4. nested if else
syntax:
if(condition){
    body of if
}
else if(condition1){
    body of condition1
}
else if(condition2){
    body of condition2
}
else if(condition3){
    body of condition3
}
else{
    body of else
}
*/

/*
5. switch
syntax:
*/