/* 
scope

application data => variable, constant, function

scope:
scope is accessibility of application data

types of scope:
1. global scope
2. functional/local scope
3. block scope


*/

//global scope
//declare in outermost layer
//accessible within a file
// var name = 'ram'
// function welcome(){
//     console.log(name)
// }
// welcome()
// console.log(name)

/*fucntional/local scope
=> declared within a function
=> only accessible within the function
=> Var maintains functional scope
*/

// var location = 'Kathmandu'
// function greetingText(name){
//     var location= 'lalitpur'
//     //location='kathmandu'  is a global scope and not a local scope
//     console.log('hi', name, 'welcome to', location)
// }
// greetingText('Ram')
// console.log(location)

/*
3. block scope 
=> declared within a block 
=> accessible within a block
=> "let" maintains block scope
{

}
*/

var msg = 'hi'
var text = 'Good morning'
if(msg){
    let names = 'Ram'
    var text = msg + names
    console.log(text)
}
else{
    var name = 'Shyam'
    let text = msg + names
    console.log(text)
}
console.log(text)
console.log(names)