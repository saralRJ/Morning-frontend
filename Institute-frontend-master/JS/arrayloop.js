var laptops = [
    {
        name:'acer',
        ram: '8gb',
        price: '50000'
    },
    {
        name:'samsung',
        ram: '4gb',
        price: '40000'
    },
    {
        name:'dell',
        ram: '9gb',
        price: '60000'
    },
    {
        name:'hp',
        ram: '1gb',
        price: '10000'
    },
    {
        name:'lenovo',
        ram: '11gb',
        price: '51000'
    },
    {
        name:'mac',
        ram: '16gb',
        price: '151000'
    },
    {
        name:'axus',
        ram: '12gb',
        price: '52000'
    }
]
// laptops.forEach(function(item, index){
//     console.log(item)
//     item.generation = 'i10'

// })
// console.log(laptops)

//map
// var laptopname = laptops.map(function(item, index){
//     return item.name;
// })
// console.log(laptopname)

//filter
// var priced = laptops.filter(function(item, index){
//     if(item.price == 50000 || item.name == 'hp'){
//         return true;
//         //or return item
//     }
// })
// console.log(priced)

// //find
// var findprice = laptops.find(function(item, index){
//     if(item.price == 50000){
//         return true;
//     }
// })
// console.log(findprice)

//some
var someresult = laptops.some(function(item, indes){
    if(item.price == 50000){
        return true;
    }
})
console.log(someresult)

//every
var everyresult = laptops.every(function(item, indes){
    if(item.price == 50000){
        return true;
    }
})
console.log(everyresult)

//reduce
laptops.reduce(function(acc, item, index, source){
    console.log(source)
    return 5;
})


