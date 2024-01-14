/*
syntax:
function(){
    //body of function
}

*/
// function welcome(){
//     console.log('welcome!!')
// }


// var x = function(){
//     console.log('I am anonymous function')
// }
// x()

// //hoisting =>hoisting is an mechanism which moves all the declaration at top before execution

// //callback
// setTimeout(function(){
//     console.log('Namaste')
// }, 5000)

// var x = 1
// setInterval(function(){
//     console.log(x)
//     x++
// },1000)

var i =1
var a = setInterval(function(){
    if(i==10){
        clearInterval(a)
    }
    console.log(i)
    i++
}, 1000)