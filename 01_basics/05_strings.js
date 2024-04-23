/* In JavaScript, String is both a data type and an object.

Data Type: Strings are a primitive data type in JavaScript. Primitive data types are immutable and are not objects. When you declare a string using quotes (' ' or " "), you are creating an instance of the string data type.
Object: Additionally, JavaScript provides a built-in String object, which wraps a string primitive, providing various methods and properties to work with strings. This object allows you to access string-related functionalities such as length, substring extraction, and more. You can create a String object explicitly using the new keyword, like new String("example"), but it's more common to work directly with string primitives.
So, while String primarily represents a data type for storing textual data, it also exists as an object in JavaScript, providing additional functionality for working with strings. */

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

/*In JavaScript, backticks (`) are used to define template literals, which are a special type of string that allows for easier interpolation of variables and expressions within the string. Here's how you can use backticks in strings
const name = "John";
const age = 30;

// Using backticks for template literals
const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
In the example above:

Backticks (`) are used to enclose the entire string.
Inside the string, you can use ${} syntax to insert variables or expressions directly into the string. JavaScript evaluates the expressions inside ${} and includes the result in the string.
This syntax makes it easier to create strings with dynamic content, especially when incorporating variables or expressions.
Template literals offer a cleaner and more readable way to create strings with dynamic content compared to traditional string concatenation or interpolation methods.*/

const string4 = new String("A String object") //=> String object

//+++++++++++++++++++++++++++++++++++++Comparison++++++++++++++++++++++++++++++++++++++

/* Equality (==): When you use the double equals (==) operator to compare two strings, JavaScript compares them character by character. If the characters at corresponding positions are equal, it moves to the next character. If all characters are equal, it returns true, otherwise false. Note that this comparison is case-sensitive.*/

console.log("apple" == "apple") // true
console.log("apple" == "Apple") // false

//Inequality (!=): The inequality operator (!=) works similarly to the equality operator but returns true if the strings are not equal.

console.log("apple" != "banana") // true

/* Strict Equality (===) and Strict Inequality (!==): These operators compare both the value and the type of the operands. They work the same way as equality and inequality operators, but they do not perform type coercion. So, if the operands are of different types, they will return false.
Comparison (<, >, <=, >=): These comparison operators compare strings in lexicographical order. They compare strings character by character starting from the first character. If the characters at corresponding positions are equal, it moves to the next character until it finds a difference. The result of the comparison is determined by the Unicode values of the characters.*/

console.log("apple" < "banana"); // true
console.log("apple" > "banana"); // false
console.log("apple" <= "banana"); // true
console.log("apple" >= "banana"); // false

/*Locale Comparison: JavaScript also supports locale-specific string comparison using the localeCompare() method. This method compares two strings according to the current locale settings of the user's environment.
/*It's important to note that for locale-specific comparisons, the result may vary depending on the locale settings of the environment where the code is executed.*/

console.log("apple".localeCompare("banana")); // -1  means banana apple se pehle nhi aata
console.log("banana".localeCompare("apple")); // 1   means apple banana se pehle aata hai
console.log("apple".localeCompare("apple")); // 0    

/*Negative number (-1): Indicates that the first string comes before the second string in the sorting order.
  Zero (0): Indicates that the two strings are equal in terms of sorting order.
  Positive number (1): Indicates that the first string comes after the second string in the sorting order.*/