// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); 
// console.log("02" > 1);  //both strings converted to numbers and then evaluated

/*When comparing a number and a string, the string is converted to a number before the comparison is made. This conversion follows the rules of converting strings to numbers in JavaScript. If the string cannot be parsed as a valid number, it is converted to the NaN (Not a Number) value, which usually leads to unexpected results.

So, in the expression 1 > "02", JavaScript converts "02" to the number 2 before comparing 1 and 2. This allows JavaScript to compare them numerically rather than lexicographically as strings.*/

// console.log(null > 0);   //=> false
// console.log(null == 0);   //=> false
// console.log(null >= 0);   //=> true

/* The reason is that an equality check == and >,<,<=,>= work differently. Comparisons convert null to a number, treating it as 0. that is why null>=0 is true while others are false*/

/*Double equals (==) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);
Triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned immediately.*/

console.log(undefined == 0);
console.log(undefined > 0);  //when comparing undefined with a number using relational operators like >, undefined gets coerced into NaN, which is
console.log(undefined < 0);  //considered not greater than any number, including 0.

console.log(undefined==null); //TRUE...This is because, in JavaScript, the == operator performs type coercion. When comparing undefined with null, both values are considered "falsy" values. While they are distinct in meaning (undefined means a variable has been declared but not initialized, while null represents the intentional absence of any object value), they are considered equal when using the == operator due to JavaScript's type coercion rules.
console.log(undefined<null); //=> false
console.log(undefined>null); //=> false
// === The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

console.log("2" === 2) //=> false