//  Primitive(call by value) and Non-Primitive(call by reference)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3//number
const isLoggedIn = false//boolean
const outsideTemp = null//null
let userEmail//undefined

const id = Symbol('123')
const anotherId = Symbol('123') //dono ka datatype symbol hai na ki string

console.log(id === anotherId)//false => values aur dataType same hone k baad bhi dono different aur unique hainn

const bigNumber = 3456543576654356754n// n lgane se bigint me badal jata hai

// Reference (Non primitive)

// Array, Objects, Functions => sabka data type object hi hota hai mtlb typeof ka result will be object but in case of function it will return function but it will be object function not normal function

const heros = ["shaktiman", "naagraj", "doga"] //array
let myObj = { //object
    name: "hitesh",
    age: 22,
}
const myFunction = function(){ //function
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3 mdn docs