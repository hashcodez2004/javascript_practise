const accountId = 1448948 //should always be initialized....cannot leave them uninitialized
let accountEmail = "harshsharma@gmail.com"
var accountPassword = "12345"//prefer not to use var...scope reasons
accountCity = "Jaipur" //bad practise
let accountState //if not initialized then undefined.

// accountId = 5678325 // cannot re-assign values to constant variable
accountEmail = "sharmaharsh@gmail.com"
accountPassword = "54321"
accountCity = "Meerut"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* Diff b/w var and let.....
   1) let-block scoped....var-function scoped or global scoped
   2) let cannot be redeclared within the same block whereas var can be redeclared.   

/* to declare a variable in javascript we have two options either declare with var or declare with let. scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. With var, you can redeclare a variable within the same scope without encountering an error. However, with let, attempting to redeclare a variable within the same scope will result in a syntax error. This is because let is block-scoped, meaning it is limited to the block (enclosed by curly braces) in which it is defined, whereas var is function-scoped or globally scoped, depending on where it is declared. This distinction helps in preventing unintended variable redeclarations and makes the code easier to reason about.*/