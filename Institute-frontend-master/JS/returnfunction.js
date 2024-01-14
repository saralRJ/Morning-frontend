// function welcome(name, address){
// var text = 'Hi '+name+ ', welcome to ' +address
// // console.log(text)
// return text;
// }
// var result = welcome('Sujan', 'Vedu')
// console.log(result)

// function sum(a, b){
//     var add = b - a
//     return add;
// }
// var result = sum(4, 7)
// var result1 = sum(6, 9)
// var result2 = sum(7, 9)
// console.log('The sum is:', result)
// console.log('Sum:', result1)
// console.log('The sum of the numbers are:', result2)

// function cal(a, b){
//     var sum=a+b
//     var sub=a-b
//     var mul=a*b
//     // return{
//     //     sum: sum,
//     //     sub: sub,
//     //     mul: mul
//     // }
//     return[
//         sum,sub,mul
//     ]
// }
// var calculator = cal(5, 3)
// console.log('The sum is:', calculator[0])
// console.log('The substraction is:', calculator[1])
// console.log('The multiplication is:', calculator[2])

function food(){
    var fruits=['apple','banana','kiwi','orange']
    var veg={veg:'potato', veg1:'saag',veg2:'mushroom', veg3:'onio'}
    return{
        fruits,veg
    }
}
var grocery = food()
console.log('You just bought', grocery.fruits[2])
console.log('You just bought', grocery.veg.veg1)