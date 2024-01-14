// object
// onject is collection of key-value, property-value, name-value pair
//block :{}
var phone = {
    brand: {
        brand1: 'Samsung',
        brand2: 'Apple',
        brand3: 'Redmi'
    },
    price: '12,000',
    ram: '8gb'
}
// brand, price and ram=> key/property/name
// mi, 12000, 8gb => value
console.log(phone.brand.brand1)
console.log(phone['brand']['brand3'])

/*
two way of accessing object value
1. dot notation
syntax:
object_name.key

2. bracket notation
syntax:
object_name['key']
*/

// dot notation method
// var brand = phone.brand;
// console.log(brand)

//bracket notation method
// var brnd = phone['brand']
// console.log(brnd)

/*
adding property-value to object
syntax:
object_name.key = value

*/
phone.ram = '12gb'
phone.status = 'available'
console.log(phone)