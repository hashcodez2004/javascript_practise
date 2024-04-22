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