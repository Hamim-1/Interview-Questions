// ES6
/* Question 1
Question : What are arrow functions in ES6, and how are they different from regular functions?


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

Example:
*/

/* Question 2
Question : What is destructuring assignment in ES6, and how does it work with arrays and objects?


Answer: Destructuring assignment in ES6 allows us to create variables for array values or object properties.

 Array Destructuring:
 1. const arr = [1, 2, 3];
    const [a, b, c] = arr;

2.  const arr = [1, 2, 3];
    const [, b, ] = arr; // b = 2, skips first and last elements.


Object Destructuring:
1:  const person = { name: 'Alice', age: 25 };
    onst { name, age } = person;

2.We can also rename the variables when destructuring:
    const person = { name: 'Alice', age: 25 };
    const { name: fullName, age: yearsOld } = person;

project:
function project(obj) {
  for (let key in obj) {
      console.log(key + ": " + obj[key]);
  }
}

const person = {
  name: "John",
  age: 23,
  city: "Chottagram"
};

project(person);

*/

/* Question 3
Question : Explain let, const, and var keywords. When should you use each?


Answer:  In JavaScript, var, let, and const are keywords used for variable declaration.

var: Function-scoped, meaning it is only accessible within the function where it's declared. If declared outside a function, it’s globally scoped.var are hoisted, meaning they are lifted to the top of their scope and initialized with undefined. var can be redeclared and reassigned.

let & const: Block-scoped, meaning they are confined to the block {}.we can access in the  block {}.Also hoisted, but in a "temporal dead zone" from the start of the block until they are declared. Accessing them before declaration causes a ReferenceError.There is a difference between let and constant.let can be reassigned but const can't be redeclared and reassigned.However, objects and arrays declared with const can still have their contents modified. reassigned means change the variable value and redeclared means creating a new variable with the same name as an existing variable within the same scope.


When to use each:

var: var is generally considered outdated, and its use is discouraged in modern JavaScript. It is recommended to use let or const instead.

let : We use let when we expect the variable's value could change.

const :  We Use const when we expect the variable's value couldn't  change.
*/

/* Question 4
Question : What is the spread operator, and how can it be used with arrays and objects?


Answer: The spread operator (...) in JavaScript allows us to expand or "spread" elements of an iterable (like an array or object) into individual elements.We can easily copy or merge data through it.

UseCase:
1. Copying an Array
Ex: const arr1 = [1, 2, 3];
    const arr2 = [...arr1];

2. Merging Arrays
Ex: const arr1 = [1, 2];
    const arr2 = [3, 4];
    const mergedArr = [...arr1, ...arr2];

3. Copying an Object)
Ex: const obj1 = { name: 'John', age: 23 };
    const obj2 = { ...obj1 };

4. Merging Objects
Ex: const obj1 = { name: 'John' };
    const obj2 = { age: 23 };
    const mergedObj = { ...obj1, ...obj2 };


Project:
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2];


*/

/* Question 5
Question : How does template literals work in ES6, and how does it make string interpolation easier?


Answer:  Template literals are a feature in JavaScript that allow for easier string creation and manipulation.

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


Example:
*/

/* Question 6
Question : What are default parameters in ES6, and how do they improve function flexibility?


Answer: In JavaScript, default parameters allow us to set a default value for a function parameter in case no argument is passed for it.

Default parameters improve function flexibility by making parameters optional, providing fallback values to prevent errors, and reducing the need for additional checks within the function.

Example: function greet(name = "Unknown") {
    console.log("Hello, " + name + "!");
}
greet() // "Hello Unknown"
*/

/* Question 7
Question : Explain what Map and Set are in ES6 and how they differ from objects and arrays.


Answer:
Map : A Map is a collection of key-value pairs where keys can be any data type (not just strings as in objects). Maps maintain the order of insertion, meaning they are ordered, and they provide efficient methods to add, retrieve, and delete entries.

Differences from Objects:
1. Maps allow any data type as a key.
2. Maps are ordered by insertion, while object properties are unordered.
3. Maps have a (.size) property to get the number of entries, whereas objects require manual counting.


Set: A Set is a collection of unique values (no duplicates) and allows storing any type of value. Sets are useful for storing distinct items without duplication and have efficient methods for checking if an item exists, adding, and deleting items.

Differences from Arrays:
1. Sets do not allow duplicate values.
2. Sets are unordered and do not have indexing, unlike arrays.
3. Sets have a .size property but lack methods like .map() or .filter() available in arrays.


Project:
const dictionary = new Map();

function addWord(word, definition) {
  dictionary.set(word, definition);
}

function getWord(word) {
  return dictionary.get(word) || "Word not found in dictionary.";
}

function removeWord(word) {
  dictionary.delete(word);
}

*/

/* Question 8
Question : What is the purpose of the for...of loop, and how is it different from for...in?


Answer: (for...of) This is used to iterate over iterable objects like arrays, strings, Maps, and Sets. It provides the actual values of each item in the iterable, making it ideal for situations where we need to work directly with the elements themselves.

Example:const arr = [10, 20, 30];
        for (const value of arr) {
        console.log(value);
        }


how is it different from for...in :
1. for...of works on iterables (arrays, strings, Maps, Sets), while for...in is for objects.

2. for...of gives values; for...in gives keys (or indexes in arrays)

3. for...of is generally preferred for arrays; for...in is suited for plain objects.
*/

/* Question 9
Question : Explain the concept of Promise in JavaScript. How do you use .then() and .catch()?


Answer: A Promise in JavaScript represents a value that may not be available yet but will be resolved in the future. It’s used to handle asynchronous operations, like data fetching or file reading, by allowing us to perform actions after an operation either succeeds (resolved) or fails (rejected).
.then() is called when the Promise is resolved (successful) and takes a function that processes the resolved value.
.catch() is called when the Promise is rejected (failed) and handles any error from the Promise.

Project:
let delayedMessage = new Promise((resolve) => {
    setTimeout(() => {
        resolve("We will this message after 2 seconds!");
    }, 2000);
});

delayedMessage.then((message) => console.log(message));

*/

/* Question 10
Question : What is async/await, and how does it work with Promises?


Answer: async/await is a syntax in JavaScript that simplifies working with Promises, making asynchronous code look and behave more like synchronous code. Adding async before a function makes it return a Promise. Within this function, we can use await to pause the execution until a Promise is resolved.We can use await only inside an async function. It makes JavaScript wait until a Promise resolves and returns the result, making code easier to read and write.

Example:
async function fetchData() {
  try {
    const response = await fetch('https://apiurl/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

*/


// DOM
/* Question 1
Question : What is the DOM, and how does JavaScript interact with it?


Answer: The DOM (Document Object Model) is a structured representation of the HTML in a webpage, which JavaScript can interact with to manipulate content, structure, and styles dynamically. When a browser loads a webpage, it creates a DOM tree where each HTML element is a "node" in this tree.JavaScript interacts with the DOM by using the document object, which represents the entire HTML document. Through this object, JavaScript can access and manipulate any element on the page.

How Javascript interact with DOM:
1. JavaScript can select elements using methods like:
document.getElementById("id")
document.getElementsByClassName("class")
document.querySelector("selector")

2. JavaScript can change the content, attributes, and styles of elements. For example:
const element = document.getElementById("myElement");
element.innerHTML = "New Content";
element.style.color = "blue";

3. avaScript can create, append, or remove elements to update the structure of the webpage dynamically.
Example:
const newElement = document.createElement("div");
newElement.textContent = "Hello!";
document.body.appendChild(newElement);

4.Javascript can interact through eventListener like  (clicks or keyboard inputs),
example:
element.addEventListener("click", function() {
  alert("Element clicked!");
});

*/

/* Question 2
Question : Explain how to select elements in the DOM using methods like getElementById,


Answer: In JavaScript, selecting DOM elements allows you to access and manipulate them. Here’s getElementById, querySelector, and querySelectorAll methods work:

getElementById : For select a element we have give an id to which element we wanna select and then we have use this methods.
example: const header = document.getElementById("header");

querySelector:For select a element we can use css selector.like for id(#id),class(.class) tag(tagName).
example: const header = document.querySelector("#header");

querySelectorAll: it same as querySelector but it return multiple matching elements as a NodeList.
const listItems = document.querySelectorAll(".list-item");

Project:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Change Project</title>
    <style>
        #colorBox {
            width: 200px;
            height: 200px;
            margin: 20px;
        }

        .blue {
            background-color: blue;
        }

        .red {
            background-color: red;
        }

        #changeColorButton {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div id="colorBox" class="blue"></div>
    <button id="changeColorButton">Change Color</button>

    <script>
        const colorBox = document.getElementById("colorBox");
        const changeColorButton = document.getElementById("changeColorButton");

        changeColorButton.addEventListener("click", () => {
            if (colorBox.classList.contains('blue')) {
                colorBox.classList.replace('blue', 'red');
            } else {
                colorBox.classList.replace('red', 'blue');
            }
        });
    </script>
</body>

</html>

*/

/* Question 3
Question : How do event listeners work in JavaScript? Explain addEventListener.


Answer: In JavaScript, event listeners are used to listen for events on HTML elements and execute a function in response to those events, such as clicks, mouse movements, key presses, etc.We can add addEventListener two or three ways.First we can use event="function" as attribute.second we can select this element through Javascript and like this element.addEventListener(event, function,); For example we have a button and we want when user will click user can see an alert.

function showAlert(){
    alert("button clicked");
}
<button onclick="showAlert()"> Click</button>
or we can do same thing using this

<button id="btn"> Click</button>
const btn = document.getElementById('id');
btn.addEventListener('onclick', showAlert);
*/

/* Question 4
Question : What is event delegation, and why is it useful?


Answer: Event delegation is a technique in JavaScript where we attach a single event listener to a parent element, rather than to individual child elements.

Why is Event Delegation Useful:
1.Performance Optimization:  Instead of attaching multiple event listeners to each child element (like list items or buttons), we attach just one listener to the parent. This can significantly improve performance.

2.Dynamic Content: It is especially useful when dealing with dynamic content, where new child elements are added to the DOM after the page has loaded . Since the event listener is attached to the parent, it will automatically handle events for newly added elements without needing to rebind listeners.

3.Reduced Memory Usage: Instead of keeping track of multiple event listeners for each child, we can use a single listener for the parent, reducing memory usage and simplifying code.

Project:
// HTML code
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>

// Javascript code
const list = document.querySelector("#list");


list.addEventListener("click", function(event) {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});


*/

/* Question 5
Question : What is the difference between innerHTML, textContent, and innerText?


Answer: In JavaScript, innerHTML, textContent, and innerText are three commonly used properties for manipulating the content of an element.Here's how they differ:

innerHTML: This property gets or sets the HTML content inside an element, including any tags and HTML structure.

textContent: This property gets or sets the raw text content of an element, excluding any HTML tags.

innerText: Similar to textContent, this property gets or sets the text content, but it also considers CSS styling. For example, it will not include text hidden by display: none or other styles that hide text.
*/

/* Question 6
Question : Explain how you can manipulate CSS styles of an element using JavaScript.


Answer: The style property allows us to directly change the inline styles of an element. It only affects the style of that specific element and is applied dynamically using JavaScript.For change style of an element we have to like this element.style.property = vlaue. if property have (-) like border-radius we don't need to use (-) and we have to camelCase like element.style.borderRadius = value;

Example:
*/

/* Question 7
Question : How do you traverse the DOM? Explain parentNode, firstChild, lastChild, etc.


Answer: To traverse the DOM in JavaScript, we use properties and methods that navigate through the hierarchy of nodes in the DOM tree. Here’s an overview of commonly used properties and methods:

1.parentNode: Accesses the parent node of the current element. For example, if we have a child element and want to navigate up to its parent.
Ex: let listItem = document.querySelector(".listItem");
    let parent = listItem.parentNode;

2. firstChild: It returns the first child node within an element, including text and comment nodes. To get only the first child element (ignoring text nodes), use firstElementChild.
Ex: let parent = document.querySelector(".parent");
    let firstNode = parent.firstChild;

3.lastChild: llastChild behaves similarly to firstChild but returns the last child node.
Ex: let lastNode = parent.lastChild;
*/

/* Question 8
Question : What is the purpose of preventDefault() and stopPropagation() in event handling?



Answer: In JavaScript, preventDefault() and stopPropagation() are methods used in event handling to control how events behave.

Purpose of preventDefault(): This method stops the default action of an event from occurring. For example, when a form is submitted, the page usually reloads as a default action. If we use preventDefault(), it will stop this default behavior, allowing us to handle the submission with custom code instead.

Purpose of stopPropagation(): This method stops an event from "bubbling up" to parent elements, preventing parent event handlers from being triggered. This is useful when we want the event to affect only a specific element.

project:
// HTML code
<form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <button type="submit">Submit</button>
</form>

// Javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Form submitted successfully!');
});
*/


// BOM
/* Question 1
Question : What is the Browser Object Model (BOM) in JavaScript?


Answer: The Browser Object Model (BOM) in JavaScript is a collection of objects provided by the browser to interact with the browser environment, apart from the webpage content. While the Document Object Model (DOM) deals with HTML elements, the BOM includes objects that represent the browser window and other aspects of the environment around it.Like we can change the URL through BOM.

Example:
*/

/* Question 2
Question : How does window differ from document?


Answer: In JavaScript, the window and document objects are both part of the Browser Object Model (BOM) and the Document Object Model (DOM), but they serve distinct purposes.

window: The window object represents the browser's window or the overall environment. It's the top-level object that contains everything related to the browser, such as the location (for URL manipulation), history (for browser navigation), navigator (for browser information), and localStorage and sessionStorage (for storing data). All global variables and functions in JavaScript are part of the window object.

document: The document object is a property of the window and specifically represents the loaded HTML document. It contains the content of the web page and provides methods to interact with and manipulate the page, such as getElementById, querySelector, and createElement. The document object is your primary way to access and update the DOM elements.


*/

/* Question 3
Question : Explain how localStorage, sessionStorage, and cookies work and their differences.


Answer: localStorage, sessionStorage, and cookies are three methods for storing data in the browser.Here are their differences.

localStorage: Stores data per origin (domain), accessible across all pages on the same domain.Data remains even after the browser is closed or the device is restarted, only clearing if explicitly removed by code or by the user.We can store data 5–10 MB per domain.

sessionStorage: Stores data per origin and per session, accessible only within the tab or window where it was created.data is cleared when the page session ends, like when the tab or browser is closed.We can store data 5 MB per domain.

Cookies: Data can be shared between the server and client; accessible across all pages of a domain and, optionally, across subdomains if specified.We can set an expiration date, making cookies temporary (session cookies, cleared after the session) or persistent (cleared after a set time).It has  limited to around 4 KB per cookie, with a maximum of 20–50 cookies per domain.

project:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Preference</title>
    <style>
        body.light {
            background-color: white;
            color: black;
        }

        body.dark {
            background-color: black;
            color: white;
        }
    </style>
</head>

<body>
    <h1>Welcome!</h1>
    <button id="toggleTheme">Toggle Theme</button>
    <script>
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.body.classList.add(currentTheme);

        const toggleThemeBtn = document.getElementById('toggleTheme');
        toggleThemeBtn.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';

            document.body.className = newTheme;

            localStorage.setItem('theme', newTheme);
        });

    </script>
</body>

</html>
*/

/* Question 4
Question : What is the purpose of the navigator object, and what properties does it have?


Answer: The navigator object in JavaScript provides information about the user's browser and system environment. It’s a core part of the Browser Object Model (BOM) and allows JavaScript to interact with the browser itself. This object is helpful for detecting the user’s device, browser type, online status, language preferences, and more, which can enable developers to create more tailored, responsive web applications.It has many properties i mention some:

1. navigator.onLine: Returns true if the browser is connected to the internet.

2. navigator.language: Gives the language setting of the browser, allowing for content localization.

3. navigator.platform: Shows the platform the browser is running on.
Example:
*/

/* Question 5
Question : How do window.open and window.close methods work in JavaScript?


Answer:
The window.open and window.close methods in JavaScript allow us to manage browser windows programmatically.

window.open(): This method opens a new browser window or tab. It takes several optional parameters:The first parameter is the URL of the page to open..The second parameter is the window name, which can be used to target specific windows.The third parameter includes optional settings, such as dimensions (width, height), position (top, left), and display features (like resizable, scrollbars).

window.close(): This method closes the current window. It works on windows that were opened by JavaScript, meaning we cannot close the main browser window unless it was opened using window.open.
*/

/* Question 6
Question : Explain how to get the viewport width and height of a browser window using JavaScript.


Answer: To get the viewport width and height of a browser window in JavaScript, we can use the window.innerWidth and window.innerHeight properties. These properties return the width and height of the viewport, respectively, in pixels.

Example:
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

Project:
function logWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(`Width: ${width}, Height: ${height}`);
}

window.addEventListener("resize", logWindowSize);


*/

/* Question 7
Question : What is the purpose of the setTimeout and setInterval functions?


Answer: The purpose of setTimeout is to execute a function or a piece of code after a specified delay (in milliseconds).

The purpose of setInterval is to execute a function or a piece of code repeatedly at a specified interval (in milliseconds).

project:
// HTML
    <h1 id="clock"></h1>

// Javascript
   function updateClock() {
            const clockElement = document.getElementById('clock');
            const currentTime = new Date();

            // Format the time as HH:MM:SS
            const hours = String(currentTime.getHours()).padStart(2, '0');
            const minutes = String(currentTime.getMinutes()).padStart(2, '0');
            const seconds = String(currentTime.getSeconds()).padStart(2, '0');

            // Update the clock element with the formatted time
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        // Update the clock every second (1000 ms)
        setInterval(updateClock, 1000);

        // Initial call to display the time immediately when the page loads
        updateClock();

*/

/* Question 8
Question : How can you detect if a user is online or offline using the BOM?


Answer: We can detect if a user is online or offline using the Browser Object Model (BOM) with the navigator.onLine property and the online and offline events.

Example:
if (navigator.onLine) {
    console.log("You are online!");
} else {
    console.log("You are offline!");
}
*/


// Web API & JSON
/* Question 1 
Question : What is the Fetch API, and how does it work with Promises?


Answer: The Fetch API is a modern way to make HTTP requests in JavaScript. It is used to retrieve data from a server, send data to a server, or interact with resources over the web, and it works based on Promises to handle asynchronous operations.The fetch() function returns a Promise that resolves with a Response object when the request is completed successfully or with an error if something goes wrong.

Project: 
// HTML
 <h1>Posts</h1>
<div id="posts"></div>

// Javascript
function fetchAndDisplayPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse response as JSON
    })
    .then(posts => {
      const postsContainer = document.getElementById('posts');
      
      postsContainer.innerHTML = '';

      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      document.getElementById('posts').textContent = 'Failed to load posts.';
    });
}


fetchAndDisplayPosts();


Example:
*/

/* Question 2 
Question : How does XMLHttpRequest differ from the Fetch API?


Answer: The XMLHttpRequest (XHR) and Fetch API are both used for making HTTP requests in JavaScript, but they differ significantly in syntax, ease of use, and functionality. Here’s a breakdown of the main differences:

XMLHttpRequest: XHR is older and has a more complex, callback-based syntax.XHR is older and has a more complex, callback-based syntax.Setting up an XHR request requires multiple steps, including configuring the request, handling different ready states, and manually parsing the response.

Fetch API: Fetch provides a simpler, Promise-based syntax, making it more readable and easier to work with. Fetch automatically handles common request tasks, like JSON parsing, with fewer lines of code.
*/

/* Question 3 
Question : Explain what JSON is and how it’s used in JavaScript.


Answer: JSON (JavaScript Object Notation) is a lightweight, text-based format for representing structured data. It is commonly used for data exchange between a server and a client, such as between a web server and a web application. JSON is easy for both humans to read and write and for machines to parse and generate.JSON is written as a string and can be easily transmitted over a network.It represents data as a set of key-value pairs (similar to a JavaScript object).

how it’s used in JavaScript: If we need to store data we use JSON.If we want get data we get data as string that's why we need to covert text to actual data.For covert use JSON.parse(data).For set/store data we have give as a string.To make data/object to string we have to do this JSON.stringify(data).
*/

/* Question 4 
Question : How do you parse JSON data in JavaScript, and how do you stringify JavaScript objects?


Answer: In JavaScript, we can parse JSON data (convert it from a JSON string to a JavaScript object) and stringify JavaScript objects (convert them from an object to a JSON string) using the built-in JSON.parse() and JSON.stringify() methods.

parse JSON data:
const jsonString = '{"name": "Alice", "age": 25, "isStudent": false}';
const userObject = JSON.parse(jsonString); // Converts JSON string to JavaScript object
console.log(userObject);


stringify JavaScript objects:
const userObject = { name: "Alice", age: 25, isStudent: false };
const jsonString = JSON.stringify(userObject); // Converts JavaScript object to JSON string
console.log(jsonString);


Project: 
function convertObject(obj) {
  const jsonString = JSON.stringify(obj);
  console.log("JSON String:", jsonString);

  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedObject);

  return parsedObject;
}

*/

/* Question 5 
Question : What is CORS, and why do we need it when making API requests?


Answer: 

*/

/* Question 6 
Question : Explain how the FormData API works and when you’d use it.


Answer: The FormData API in JavaScript provides an easy way to construct a set of key/value pairs representing form fields and their values, which can then be sent using the Fetch API or XMLHttpRequest. It is commonly used when submitting form data, especially with file uploads, as it handles encoding data in a way that can include files, binary data, and other complex content types.

When to Use the FormData API:
1. Handling File Uploads: FormData is especially useful when submitting files, as it handles encoding for binary data. File objects (like images, PDFs, etc.) can be appended directly to FormData and sent to the server without extra encoding.

2. Submitting Form Data with Complex Fields: For forms with various types of data (like text fields, checkboxes, and file inputs), FormData makes it easy to gather and send all fields at once.

3. Building Dynamic Forms: If we are building a form dynamically with JavaScript and need to gather all fields without creating a conventional HTML form, FormData can build the data payload without an HTML <form>.
*/

/* Question 7 
Question : What is the purpose of the History API, and how do pushState and replaceState work?


Answer: The History API in JavaScript allows developers to manage and manipulate the browser history, enabling control over the session history (the list of pages visited within a session). This API is particularly useful for single-page applications, as it enables updating the URL and browser history without triggering a full page reload.

How pushState Work:  pushState(state, title, url) adds a new entry to the browser’s history stack. The browser URL updates to reflect the new state, but the page does not reload.This is useful when navigating between views in a single-page application, as it allows the URL to change and history to be preserved.Users can now use the browser’s back and forward buttons to navigate through these states as if they were different pages, even though the page hasn’t actually reloaded.

How replaceState Work:  replaceState(state, title, url) works similarly to pushState, but instead of adding a new entry to the history stack, it replaces the current history entry. This is useful when we want to update the URL or state information without adding another item to the history stack, avoiding clutter.The current history entry is updated with the new state and URL. The back button will take the user to the previous entry, not to the previous version of this entry.

Project:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single-Page Navigation</title>
</head>

<body>
    <nav>
        <a href="/" id="homeLink">Home</a>
        <a href="/about" id="aboutLink">About</a>
        <a href="/contact" id="contactLink">Contact</a>
    </nav>

    <div id="content"></div>

    <script>
        const content = document.getElementById("content");
        const homeLink = document.getElementById("homeLink");
        const aboutLink = document.getElementById("aboutLink");
        const contactLink = document.getElementById("contactLink");

        function loadView(page) {
            if (page === "home") {
                content.innerHTML = "<h1>Home</h1><p>Welcome to the Home Page!</p>";
            } else if (page === "about") {
                content.innerHTML = "<h1>About</h1><p>This is the About Page.</p>";
            } else if (page === "contact") {
                content.innerHTML = "<h1>Contact</h1><p>Contact us at contact@example.com.</p>";
            }
        }

        const initialPage = window.location.pathname.slice(1) || "home";
        loadView(initialPage);

        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            history.pushState({ page: "home" }, "", "/");
            loadView("home");
        });

        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            history.pushState({ page: "about" }, "", "/about");
            loadView("about");
        });

        contactLink.addEventListener("click", (e) => {
            e.preventDefault();
            history.pushState({ page: "contact" }, "", "/contact");
            loadView("contact");
        });

        window.addEventListener("popstate", (event) => {
            if (event.state) {
                loadView(event.state.page);
            } else {
                loadView("home");
            }
        });
    </script>
</body>

</html>
*/

/* Question 8 
Question : How can you handle errors in API requests with try/catch blocks and the .catch() method?


Answer: We can handle errors in API requests using try/catch blocks in async/await syntax or using the .catch() method with promises. try/catch blocks are typically used with async/await to handle asynchronous errors. The try block contains the code that might throw an error, while the catch block catches and handles the error. (.catch()) method is used when working with promises directly. It is chained to the promise to catch any rejection or errors during the execution.

Example:
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data); // Handle the data here
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();

*/

/* Question 9 
Question : What are WebSockets, and how do they differ from HTTP requests?


Answer: WebSockets provide a full-duplex communication channel over a single, long-lived connection. This allows for real-time, bidirectional communication between a client (such as a web browser) and a server. Unlike traditional HTTP requests, which are request-response based, WebSockets enable ongoing communication where both the client and server can send messages to each other independently, without needing to establish a new connection for each message.

Differences Between WebSockets and HTTP Requests: 

1. WebSocket: Persistent, full-duplex connection.
HTTP Requests: Short-lived, request-response connection.

2. WebSocket: Bidirectional communication (both client and server can send/receive data).
HTTP Requests: Unidirectional communication (client sends a request, server responds).

3. WebSocket: Uses ws:// or wss:// (WebSocket protocol).
HTTP Requests: Uses http:// or https:// (HTTP protocol).

4. WebSocket: Low latency, once the connection is established, data flows continuously without reconnection.
HTTP Requests: Higher latency, as each request/response cycle involves reconnecting and setting up a new connection.

5.WebSocket: Ideal for real-time applications (e.g., chat apps, online games, live data feeds).
HTTP Requests: Best for traditional client-server interactions (e.g., retrieving static resources, form submissions).

6. WebSocket: Keeps the connection open for long durations.
HTTP Requests: Each request opens and closes a new connection, making it more suited for stateless interactions.

*/

/* Question 10 
Question : Explain the basics of the Service Worker API and its use in creating progressive web apps (PWAs).


Answer: The Service Worker API is a browser feature that allows developers to create scripts that run in the background, separate from the web page, enabling features like offline support, background syncing, and push notifications. A service worker is essentially a script that the browser runs in the background, providing a network proxy for handling network requests, caching resources, and managing the interaction between the web application and the network.

Example:
*/



