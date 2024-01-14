/*
setTimeout()
setInterval()
typeof()
Number()

*/
// string
// var string = 'GoodMorning'
// var email = 'ram@gmail.com'
// var result = string.length
// // console.log(result)

// // console.log(string.toUpperCase())
// // console.log(string.toLowerCase())
// // console.log(string.substring(1,6))
// // console.log(string.substr(1,6))
// console.log(email.includes('@gmail'))

//use split to convert string to array
// var fruits = 'mango, apple, banana, kiwi, papaya'
// var fru = fruits.split(',')
// console.log(fru)

//number
// var number = 100.126
// console.log(number.toFixed(6))
// console.log(!isNaN(number))

//object
var laptop = {
    name: 'acer',
    gen: 'i9',
    ram: '8gb',
    color: 'grey'
}
// // console.log(laptop.hasOwnProperty('name'))
// // console.log(Object.keys(laptop))
// // console.log(Object.values(laptop))

// // for in loop
for(var item in laptop){
    console.log(item)
    console.log(laptop[item])
    // use only [] bracket for output in for in loop 
}

//JSON => javascript object notation
// var serialization = JSON.stringify(laptop)
// // console.log(typeof(laptop))
// // console.log(serialization)

// var deserialization = JSON.parse(serialization)
// console.log(typeof(deserialization))
// console.log(deserialization)