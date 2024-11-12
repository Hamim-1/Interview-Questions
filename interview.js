// JavaScript Fundamentals
/* Question 1
Question : What are the different data types in JavaScript?

Answer: JavaScript has several data types that can be categorized into Primitive Types and Reference Types.

Primitive Types :

String: Used for text.
Number: Represents numerical values, both integers and floats.
Boolean: Indicates a true or false value.
Undefined: Indicates a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any value.
Symbol: A unique identifier often used for object properties.


Reference Types:

Object: A collection of key-value pairs, ex: { name: "Alice", age: 25 }.
Array: A special type of object for ordered collections, ex: [1, 2, 3].
Function: A callable object that can execute code, ex: function() {}.
Date: For handling dates and times.

*/

/* Question 2
Question : What is the difference between var, let, and const?


Answer: In JavaScript, var, let, and const are keywords used for variable declaration.

var: Function-scoped, meaning it is only accessible within the function where it's declared. If declared outside a function, it’s globally scoped.var are hoisted, meaning they are lifted to the top of their scope and initialized with undefined. var can be redeclared and reassigned.

let & const: Block-scoped, meaning they are confined to the block {}.we can access in the  block {}.Also hoisted, but in a "temporal dead zone" from the start of the block until they are declared. Accessing them before declaration causes a ReferenceError.There is a difference between let and constant.let can be reassigned but const can't be redeclared and reassigned.However, objects and arrays declared with const can still have their contents modified. reassigned means change the variable value and redeclared means creating a new variable with the same name as an existing variable within the same scope.

*/

/* Question 3
Question : Explain JavaScript's == vs. === operators.


Answer:In Javascript (== , ===) operators are used for comparison.If we need to just check the value equal or not we use (==).It compare the value but if we need to check value and type we use (===) operators.

Example:
const a = 5;
const b = "5";
console.log(a == b); ans will be true, because it will check the value just.
console.log(a === b); ans will be false, because it will check the value and type.
*/

/* Question 4
Question : What is type coercion in JavaScript? Give an example.


Answer: Type coercion in JavaScript is the process by which JavaScript automatically converts one data type to another when performing operations that involve different types. JavaScript uses type coercion in situations where it expects a certain data type but encounters another, so it tries to convert it to the expected type.

Example: console.log("5" + 2);
Here, JavaScript converts the number 2 to a string and output will be "52".

"Hello" + 5;
When using the + operator, JavaScript treats the 5 as a string and concatenates it. output will be "Hello5"

*/

/* Question 5
Question : Explain the concept of scope in JavaScript.


Answer: In JavaScript, scope refers to the accessibility of variables, functions, and objects in different parts of the code. Scope determines where a variable can be accessed or used, and JavaScript has three main types of scope: global scope, function scope, and block scope.

1. Global Scope : Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the program.

2. Function Scope : Variables declared within a function are in function scope and are only accessible within that specific function.

3. Block Scope:Block scope is created with code blocks {}, such as those in if statements or loops. Variables declared with let and const are block-scoped, meaning they only exist within the block they are declared in. var is not block-scoped and will ignore block boundaries.

*/

/* Question 6
Question : What is hoisting in JavaScript?


Answer: Hoisting in JavaScript is a behavior where variable and function declarations are moved, or "hoisted," to the top of their containing scope during the compilation phase, before code execution. This means that declarations are processed first.

How Hoisting Works:
1. Variable Hoisting: Only the declaration is hoisted, not the initialization. This is why, if we try to access a variable declared with var before its line of declaration, it will result in undefined rather than an error.Variables declared with let and const are also hoisted but behave differently.  Accessing them before the declaration results in a ReferenceError

2. Function Hoisting: Unlike variables, function declarations are fully hoisted. This means the entire function can be called before its definition in the code but arrow functions are not hoisted like regular function declarations .

*/

/* Question 7
Question : What are template literals, and how are they used?


Answer: Template literals are a feature in JavaScript that allow for easier string creation and manipulation.

Template literals can span multiple lines without needing escape characters for new lines.
const message = `multiple
lines.`;

We can  include variable values or expressions directly within the string.
const name = 'John';
const greeting = `Hello, ${name}!`;

We can execute any JavaScript expression within the ${} placeholders.
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;

In template literals, we can use both single (') and double (") quotes without any issues
const message = `He said, "It's a great day!"`;
console.log(message); // Outputs: He said, "It's a great day!"


*/

/* Question 8
Question : Explain what a higher-order function is in JavaScript.


Answer: A higher-order function in JavaScript is a function that either takes one or more functions as arguments or returns a function as its result

Example: function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}
*/

/* Question 9
Question : What are arrow functions, and how are they different from regular functions?


Answer: Arrow functions are a short syntax for writing function expressions in JavaScript. Introduced in  ES6, they provide several advantages and differences compared to traditional function declarations and expressions.

Differences from regular functions:
1. Arrow functions use a more short syntax. They do not require the function keyword and we don't need to use parentheses if there is only one parameter.
Ex:const add = (a, b) => a + b;

2.Arrow functions do not have their own arguments object. If we need to access arguments, we would need to use the rest parameter syntax (...args).
Ex: const myFunction = (...args) => {
    console.log(args);
};

3.Arrow functions cannot be used as constructor functions, meaning we cannot use new to create instances from them.
Ex:const Person = (name) => {
  this.name = name;
};
const john = new Person('John'); // TypeError: Person is not a constructor

4.In arrow function we can return single expresstion without using return keyword.
Ex: const sum = (a, b) => a + b;
*/


/* Question 10
Question : What is an Immediately Invoked Function Expression (IIFE)?


Answer: An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that is defined and executed immediately after its creation.

Example:(function() {
            console.log("I am an IIFE!");
        })();

*/


// Functions and Objects
/* Question 1
Question : Explain the concept of closures in JavaScript.


Answer: In JavaScript, a closure is a feature where an inner function has access to the outer (enclosing) function’s variables even after the outer function has finished executing. Closures are created when a function is defined inside another function, allowing it to "remember" the scope in which it was created.

Example: function counter() {
          let count = 0;
          return function() {
              count++;
              console.log(count);
          };
        }
*/

/* Question 2
Question : What is the this keyword, and how does it behave in different contexts?


Answer: In JavaScript, the this keyword refers to an object.When (this) is used inside a method of an object, it refers to the object on which the method is called.
Example: const person = {
    name: "John",
    greet: function() {
        console.log(this.name);
    }
};

When (this) is used in a constructor function or class, it refers to the instance of the object being created.
Example: function Car(brand) {
           this.brand = brand;
         }

In an event listener, (this) refers to the element that triggered the event.
<p onclick="doSomething(this)">Click</p>
*/

/* Question 3
Question : How do you create an object in JavaScript?


Answer: The most common way to create an object is using curly braces {} to define properties and methods directly.We have give key value pair.value can be anything like(number,string,object,array,function etc).I usually create objects like this :
  const person = {
    name: "John",
    age: 25,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };

*/

/* Question 4
Question : What is the difference between null and undefined?


Answer: In JavaScript, null and undefined are both values that indicate an absence, but they are used in different contexts and have distinct meanings.

undefined: undefined means a variable has been declared but not yet assigned a value. It is JavaScript’s way of saying that a value is not available.JavaScript automatically assigns undefined to variables that are declared but not initialized.undefined is its own type.

null : null is an intentional absence of any value. We use null to reset a variable or to indicate an empty or non-existent object.null is an object type in JavaScript.

Both null and undefined indicate an absence of a value in JavaScript, but they represent different types
For example:  console.log(null == undefined); // true
              console.log(null === undefined); // false

*/


/* Question 5
Question : How do you copy an object in JavaScript? Explain shallow vs. deep copy.



Answer: Here how i copy an object. shallow vs deep

Shallow Copy : A shallow copy creates a new object that copies the values of the original object's top-level properties.
Ex: const original = { a: 1, b: { c: 2 } };
const copy = { ...original };

Deep Copy : A deep copy creates a new object that recursively copies all properties, including nested objects.For deep copy we have install lodash library (npm install lodash).Then we can follow this method to deep copy an object.
Ex: const _ = require('lodash');
const deepCopy = _.cloneDeep(original);

*/

/* Question 6
Question : Explain how call, apply, and bind work in JavaScript.


Answer: In JavaScript, call, apply, and bind are methods that allow us to control the context (this value) in which a function is executed. They are particularly useful when dealing with object-oriented programming and event handling. Here’s how each of them works:

call:The call() method calls a function with a given this value and arguments provided individually.Syntax: func.call(thisArg, arg1, arg2, ...).

apply: The apply() method is similar to call(), but it takes an array (or an array-like object) of arguments instead of listing them individually.Syntax: func.apply(thisArg, [argsArray]).


bind: The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.Syntax: const boundFunction = func.bind(thisArg, arg1, arg2, ...).
*/

/* Question 7
Question : What is the prototype chain, and how does inheritance work in JavaScript?


Answer:

Example:
*/



// Arrays and Strings
/* Question 1
Question : What are some common array methods in JavaScript?


Answer: array has many methods. here are some common array methods.

1. push: Adds one or more elements to the end of an array .
2. pop:  Removes the last element from an array.
3. unshift: Adds one or more elements to the beginning of an array .
4. shift: Removes the first element from an array.
5. map: Creates a new array populated with the results of calling a provided function on every element in the array.
6. filter: Creates a new array with all elements that pass a specified test function.
7. includes: Checks if an array contains a specified element.

*/

/* Question 2
Question : How does map() differ from forEach() in arrays?


Answer: The main difference between map() and forEach() in JavaScript arrays is how they handle the elements they process and their return values.map creates and returns a new array with the results of calling a function on every element in the array. but forEach Executes a function on each element but does not return a new array.
*/

/* Question 3
Question : Explain the filter() method. How does it work?


Answer: The filter() method takes a callback function, which can have up to three parameters: element, index, and array. This callback applies a condition to each element in the array, and if the condition is match, the element is added to a new array. The method returns this new array containing only the elements that matched.

Example:
*/

/* Question 4
Question : What does the reduce() method do, and how is it used?


Answer:

Example:
*/

/* Question 5
Question : How do you find the length of a string and reverse it?


Answer: For find the length we can use str(variable name).length.
Ex: const str = "Hello, world!";
    const length = str.length;

Reversing a string can be done by converting it to an array, reversing the array, and joining it back into a string.
Ex: const str = "Hello, world!";
    const reversed = str.split('').reverse().join('');

Example:
*/

/* Question 6
Question : What are template literals, and how can they be used for string manipulation?

Answer: Template literals are a feature in JavaScript that allow for easier string creation and manipulation.

Template literals can span multiple lines without needing escape characters for new lines.
const message = `multiple
lines.`;

We can  include variable values or expressions directly within the string.
const name = 'John';
const greeting = `Hello, ${name}!`;

We can execute any JavaScript expression within the ${} placeholders.
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;

In template literals, we can use both single (') and double (") quotes without any issues
const message = `He said, "It's a great day!"`;
console.log(message); // Outputs: He said, "It's a great day!"


*/

/* Question 7
Question : How do you remove duplicates from an array?


Answer: There are many ways to remove duplicates but i use two methods.
1: const array = [1, 2, 3, 1, 2, 4];
   const uniqueArray = [...new Set(array)];

2:  const array = [1, 2, 3, 1, 2, 4];
    const uniqueArray = [];
    array.forEach(value => {
      if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
      }
    });

*/



// Control Structures and Error Handling
/* Question 1
Question : How does JavaScript handle implicit type conversion?


Answer: JavaScript handles implicit type conversion, also known as type coercion, automatically converting values from one data type to another during operations. This behavior can lead to unexpected results if not carefully considered.

1. When an operation involves a string and another type (like a number), JavaScript converts the non-string to a string. For example:
console.log("5" + 1); // Outputs: "51"
console.log("5" - 1); // Outputs: 4 (the string is converted to a number)

2. If an operation involves a number and a boolean, JavaScript converts the boolean to a number (true becomes 1, false becomes 0). For example:
console.log(true + 1); // Outputs: 2
console.log(false + 1); // Outputs: 1

3. Non-boolean values are coerced to boolean in conditional statements. Falsy values include 0, "" (empty string), null, undefined, NaN, and false. Everything else is considered truthy.For Example:
if ("") {
    console.log("This won't run."); // This block won't execute
}

*/

/* Question 2
Question : What does typeof return for different data types?


Answer: In JavaScript the typeof operator is used to determine the data type of a given value. If a variable is declared but not assigned a value, typeof returns "undefined".I give some example of different data types:
1. let x;
console.log(typeof x); // "undefined"

2.let y = null;
console.log(typeof y); // "object"

3.console.log(typeof true); // "boolean"

4.console.log(typeof 42); // "number"

5.console.log(typeof "Hello, World!"); // "string"

6.let sym = Symbol();
console.log(typeof sym); // "symbol"

7.function myFunc() {}
console.log(typeof myFunc); // "function"

8.console.log(typeof {}); // "object"
console.log(typeof []); // "object"


Example:
*/

/* Question 3
Question : What is NaN, and how can you check if a value is NaN?


Answer: In JavaScript, NaN stands for "Not-a-Number." It’s a special value used to represent results that aren't a valid number, typically occurring when a mathematical operation fails.like if we want devide a string by a number it coludn't be done we will get NaN.
Example:  let result = "hello" / 5;
          console.log(result); // NaN

how to check a value is NaN: if value is NaN we will get true otherwise false.
Example: console.log(isNaN("hello")); // true (coerced to NaN).
*/



// Type Conversion and Comparison is same and Control Structures and Error Handling questions are same.



// Miscellaneous
/* Question 1 
Question : What is event delegation, and how does it work?


Answer: Event delegation is a technique in JavaScript that allows us to manage events more efficiently by taking advantage of event bubbling. Instead of adding event listeners to individual elements (such as multiple buttons in a list), event delegation sets an event listener on a common parent element. This approach enables handling events on multiple child elements through a single listener, which can simplify your code and improve performance.

how it works: When an event occurs on an element, it "bubbles up" through its parent elements in the DOM, eventually reaching the root. By setting a listener on a parent element, we can catch events from its children as they bubble up. Using the event.target property in the handler, we identify the specific child element that triggered the event.

Example:
*/

/* Question 2 
Question : What are default parameters in JavaScript?


Answer: In JavaScript, default parameters allow us to set a default value for a function parameter in case no argument is passed for it.Sometimes if we don't passed paremeter we can got error.The default parameters are set to prevent the error.

Example: function greet(name = "Unknown") {
    console.log("Hello, " + name + "!");
}

greet();           // Output: Hello, Unknown!
greet("John");    // Output: Hello, John!

*/

/* Question 3 
Question : What is the difference between synchronous and asynchronous programming? 


Answer: In synchronous programming, tasks are executed one after another in a sequential order. Each task must complete before the next one starts. Asynchronous programming allows multiple tasks to proceed without waiting for each to finish. When an asynchronous task begins, other tasks can execute while waiting for it to complete.


*/

/* Question 4 
Question : How does the setTimeout function work, and what is its use?


Answer: The setTimeout function in JavaScript allows us to execute a specified function or code snippet after a certain delay, measured in milliseconds. It is an example of asynchronous programming because it does not block the main thread while waiting for the timer to complete.Like we want to execute some code after 3000 milliseconds.This code won't execute before 3000 milliseconds but it can be take more than 3000 milliseconds to execute this code.

How it work:
The setTimeout function can take two arguments. The first argument is a function or code to execute, and the second argument is the delay time in milliseconds. After the specified delay, the function or code will be executed. However, sometimes it may take longer than the specified milliseconds to execute.
*/

/* Question 5 
Question : What is the purpose of JSON.stringify() and JSON.parse()?


Answer: JSON.stringify() and JSON.parse() are two methods in JavaScript that work with JSON data. Commonly used for exchanging data between a server and a client.  JSON.stringify() converts a JavaScript object or array into a JSON string. JSON.parse() converts a JSON string back into a JavaScript object. when storing data we need to convert the data to a string format which is done using JSON.stringify(). later when retrieving data we get it as a string so we use JSON.parse() to convert it back into a JavaScript object.

*/

/* Question 6 
Question : How can you handle asynchronous code in JavaScript?


Answer: I handle asynchronous code using promise. promises is a cleaner way to handle asynchronous operations. They have states—pending, fulfilled, or rejected—and use .then() for successful operations and .catch() for errors.

Example: fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

*/

/* Question 7 
Question : Explain the concept of the Event Loop in JavaScript.


Answer: 

Example:
*/



