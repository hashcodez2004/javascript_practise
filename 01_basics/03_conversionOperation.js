let score = undefined

// console.log(typeof score)
// console.log(typeof(score))

/*In both cases, the output will be the same, indicating the type of the variable score. The difference is mainly in syntax style; the first one uses the operator typeof directly with the operand score, while the second one encloses score within parentheses and then applies the typeof function to it.*/

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1  false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true  0 => false
// "" => false
// "harsh" => true

let someNumber = null
let stringNumber = String(someNumber)
// console.log(typeof someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)

// true => true   false => false  .....boolean to string
// null => nul....object to string
// undefined => undefined....undefined to undefined
// 34 => 34....number to string


//*********************Operations**********************
let value = 3
let negValue = -value
// console.log(negValue) // => -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) // 2^3 exponential operator
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " harsh"

let str3 = str1 + str2
// console.log(str3) // => hello harsh

console.log("1" + 2) // =>12
console.log(1 + "2") // =>12
console.log("1" + 2 + 2) // =>122
console.log(1 + 2 + "2") // =>32

/* These type of practises are only good for exam or interview point of view but not in companies. Make your code simple and readable*/

// console.log(3 + 4 * 5 % 3)//not good use parenthesis

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // not a good practise

// let gameCounter = 100
// ++gameCounter
// console.log(gameCounter)