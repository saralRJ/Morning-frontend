/**
array
=> Item inside array is called elements of array
=> index of element always start with 0
=> js array is heterogenious 

accessign the elements of array
syntax:
array_name[index]

**/
// var fruits = ['apple', 'mango', 'kiwi',false,4, [1,2,3,4],{
//     name:'ram',
//     address:'kumaripati'
// }]
// console.log(fruits)
// console.log(fruits[1],fruits[6]['name'], fruits[5][2])
// console.log(fruits[6].name)

// var fruits = ['apple', 'mango', 'mango', 'kiwi', 'strawberry', 'orange']

//adding elements to array
//in first position
// fruits.unshift('Papaya')
// //in last position
// fruits.push('orange')
// console.log(fruits)

//removing elements from array
//from first position
// fruits.shift()
// //from last position
// fruits.pop()
// //these doesn't accept any arguments
// console.log(fruits)

//splice
//used to remove elements from array
//syntax:
//array_name.splice(starting-index, 'number-of-elements-to-be-removed','add-elements')
// fruits.splice(1,2,'papaya','orange','strawberry')
// console.log(fruits)

//slice
// var result =fruits.slice(2, 4)
// console.log(result)
// console.log(fruits[1], fruits[3])

//forEach
/*
syntax:
array_name.forEach(function(item, index){
    //body of forEach
})
*/
// function unique(arg) {
//     var uniqueitems = []
//     arg.forEach(function (item, index) {
//         // console.log(item)
//         // console.log(index)
//         if (uniqueitems.includes(item) !== true)
//             uniqueitems.push(item)
//     })
//     // return uniqueitems;
// console.log(uniqueitems)

// }

// var bikes = ['honda', 'yamaha', 'ktm', 'honda']
// var cars = ['lambo','bugatti','porsche','BMW','BMW']
// // var uniquebike = unique(cars)
// unique(cars)
// unique(bikes)
// console.log(uniquebike)

/*
apple: 1,
mango: 2,
kiwi: 2,
orange: 1,
strawberry: 1
*/
var fruits = ['apple','mango','mango','kiwi','kiwi','orange','strawberry']

var uniquefruitss = {}

fruits.forEach(function(item, index){
    if(uniquefruitss[item]==undefined){
        uniquefruitss[item] = 1
    }else{
        uniquefruitss[item]++
    }
})
console.log(uniquefruitss)

// getUniqueArray(fruits)
// getUniqueArray(bikes)

//indexOf
// console.log(fruits.indexOf('mango'))
// console.log(fruits.lastIndexOf('mango'))
