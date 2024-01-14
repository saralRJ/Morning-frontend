/*
mutation
1. mutable behaviour
=> if change in original is reflected in the new references
=> if change in new references is reflected in original
=> non-primitive data types(object and array) are mutable

*/
// var laptops= {
//     name:'acer',
//     ram:'4gb',
//     color:'grey'
// }

// var laptop1 = laptops
// laptop1.price= 50000

// console.log(laptops)
// console.log(laptop1)

// function displayDetails(item){
//     item.price = 90000
//     console.log(item)
// }
// displayDetails(laptops)
// console.log(laptops)

/*
immutable behaviour
=> if change in original it is not reflected in references
=> if change in references it is not reflected in original
=> primitive date type(string, number, boolean) are immutable 
*/

var naam = 'rashik'
var naam1 = naam
naam1 = 'Saral'

console.log(naam)
console.log(naam1)

var naam1 = 'rashik'
function name(){
    
}