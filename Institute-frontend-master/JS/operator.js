/*
operator
=> symbol which perform specific task

types:
1. arithmetic operator
+_/*
%(remainder)
++(increment)
--(decrement)


2. relational operator
<
>
<=less than or equals to 
>=greater than or equals to
result is always either true or false(boolean)

3. assignment operator
=
+=
-=
/=
*=
%=

a+=b and a = a + b are the same thing

4. comparision operator
== : doesn't check data types
=== : checks data types 
result = either true or false(boolean)


5. concatinate operator
+ ,

6. logical operator
a. logical and(&&)
condition1 condition2  result(condition1 && condition2)
T          T            T && T => T
T          F            F
F          F            F
F          T            F

b. logical or(||)
ondition1 condition2  result(condition1 || condition2)
T          T            T || T => T
T          F            T
F          F            T
F          T            F




c. logical not(!)
ondition1   result(!condition)
T           !T => F
F           !F => T


7. conditional operator(ternary)
syntax:
condition ? 'body of truth' : 'body of false'



*/

// var a = 20;
// var b = 20;
// // b++;
// console.log('the sum of thwo number '+ a +' and '+b+" is:"+ (a + b))
var a = 26;
var b = 25;
var x = (a > b)
var y = (a == b)
var res = (x || y)
// console.log(res)
var greaterOne = a < b
greaterOne? console.log(a, 'is less than', b) : console.log(a,' is greater than' ,b)
// console.log(greaterOne)
