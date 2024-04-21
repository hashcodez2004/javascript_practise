let score = undefined

console.log(typeof score)
// console.log(typeof(score))

/*In both cases, the output will be the same, indicating the type of the variable score. The difference is mainly in syntax style; the first one uses the operator typeof directly with the operand score, while the second one encloses score within parentheses and then applies the typeof function to it.*/

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1  false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true  0 => false
// "" => false
// "harsh" => true