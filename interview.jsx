// Basic Interview Questions Of React
/* Question 1
Question : What is React, and why is it used?


Answer: React is an open-source JavaScript library for building user interfaces (UIs), especially for single-page applications where we need a dynamic and interactive experience. React was developed by Facebook and is maintained by Facebook and a community of developers. It allows developers to build reusable UI components and manage the state of their applications efficiently.

Why is React Used:
1.Efficient Rendering: React uses a virtual DOM to improve performance by minimizing direct updates to the actual DOM. When the state of a component changes, React updates only the affected parts of the UI rather than re-rendering the entire page.

2.Component Reusability: React’s component-based structure promotes reusability, allowing us to create modular, maintainable, and testable code. Components can be reused across different parts of our application or even in different projects.

3.Cross-Platform Development: React can be used not only for web development but also for building mobile applications through React Native. This allows developers to write cross-platform mobile apps using the same React concepts.

4.SEO-Friendly: React can be used in combination with server-side rendering (SSR) frameworks like Next.js, which helps improve the SEO of single-page applications by pre-rendering pages on the server before sending them to the browser.
*/

/* Question 2
Question : What is JSX, and why is it preferred in React?


Answer: JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows us to write HTML-like code within JavaScript. It supports embedding JavaScript expressions directly within the markup.

Why is JSX Preferred in React: JSX makes it easier to understand the structure of our component because it visually resembles HTML. JSX lets us embed JavaScript expressions directly into HTML-like markup using { }, making it easy to dynamically generate content and handle logic within the UI.With JSX, defining reusable components is straightforward. Components are written as functions or classes that return JSX, making them modular and easy to combine to build complex UIs.JSX is compiled to JavaScript functions like React.createElement(), which enables React to use its Virtual DOM for efficient updates. This results in better performance and optimized DOM manipulation.
*/

/* Question 3
Question : How does JSX differ from HTML?


Answer: JSX and HTML look very similar, but they have key differences due to JSX’s role in React and JavaScript. Here are the primary ways JSX differs from HTML:

1.JSX: We can embed JavaScript expressions in JSX using { } curly braces, allowing for dynamic content and logic directly within markup.
HTML: Cannot embed JavaScript expressions directly in markup.

2.JSX: Uses camelCase for attributes (e.g., className instead of class, onClick instead of onclick).
HTML: Uses standard HTML attribute names (e.g., class and onclick).

3.JSX: Requires self-closing tags to end with a / (e.g., <img src="image.jpg" />).
HTML: Self-closing tags don’t need a /, so both <img src="image.jpg"> and <img src="image.jpg" /> are valid.

4.JSX: Event handlers use camelCase (e.g., onClick), and they accept JavaScript functions directly.
HTML: Event handlers are lowercase (e.g., onclick) and are often provided as JavaScript strings.

5.JSX: Supports fragments using <></> to wrap elements without adding extra nodes to the DOM.
HTML: Requires a parent element to wrap multiple elements (e.g., <div>).


*/

/* Question 4
Question : What are components in React?


Answer: In React, components are the building blocks of the user interface. A component is a self-contained piece of code that defines a part of the UI.For example if we need 10-20 card same design but different data.we make a component and use it how many time we need.There are two type of componets 1.Functional Components  2.Class Components.

Example:
*/

/* Question 5
Question : What is the difference between functional and class components?


Answer: In React, both functional components and class components are used to define UI elements, but they have key differences, especially in terms of syntax, behavior, and the ability to manage state and side effects.

Difference Between Functional and Class Components in React:
1.Functional Components:Written as JavaScript functions
  Class Components:Written as ES6 classes that extend React.Component .

2. Functional Components: Use React Hooks (e.g., useState, useEffect) for state and side effects.
 Class Components: Use this.state and this.setState() for state management and lifecycle methods for side effects.

 3. Functional Components: Can be simpler and more concise.
 Class Components: Tend to be more verbose due to the need for a constructor, render() method, and this.

 4. Functional Components: Can directly return JSX without the need for a render() method.
  Class Components: Must use a render() method to return JSX.

 5. Functional Components: Easier to read and maintain, especially with hooks.
 Class Components: May be harder to understand for beginners due to their verbosity and complexity.

 6. Functional Components: More performant in modern React due to fewer overheads.
 Class Components: May have slightly more overhead due to the this binding and class structure.

 7.Functional Components: Recommended for modern React development.
 Class Components: Still supported but less commonly used in new React applications.
*/

/* Question 6
Question : What is a single-page application (SPA), and how does React enable it?


Answer: A Single-Page Application (SPA) is a web application that loads a single HTML page and dynamically updates that page as the user interacts with the application. This differs from traditional multi-page applications, where each page is loaded separately. This approach offers a more seamless and responsive user experience, as there's no need for full page reloads.


1.Component-Based Architecture:
React encourages breaking down the user interface into reusable components, each managing its own state and rendering logic.
This modular approach makes it easier to build complex UIs and maintain them effectively.

2.Virtual DOM:
React uses a virtual DOM, an in-memory representation of the actual DOM.
When changes occur, React efficiently updates only the necessary parts of the real DOM, resulting in faster rendering and smoother interactions.

3. Declarative Programming:
React's declarative style allows developers to describe the desired UI state, and React handles the updates automatically.
This simplifies the development process and reduces the risk of errors.

4. State Management:
React provides robust mechanisms for managing state within components, allowing you to update the UI dynamically in response to user actions or data changes.
Libraries like Redux can be used for more complex state management scenarios.

5. Routing:
Libraries like React Router allow you to define different routes within your SPA, enabling navigation between different views without full page reloads.:
*/

/* Question 7
Question : What are props in React?


Answer: Props (short for properties) are a mechanism in React that allows us to pass data from a parent component to a child component. Props are used to make components dynamic and reusable by allowing them to receive input data from their parent. They are read-only, meaning they cannot be modified by the component that receives them.


*/

/* Question 8
Question : How is state different from props?


Answer: In React, both state and props are used to manage and display data in components, but they serve different purposes and have distinct characteristics. Here's a detailed comparison:

1. Definition:
State: Refers to the local data or internal data that is managed within a component. It is mutable, meaning it can be changed by the component itself.
Props: Refers to data passed from a parent component to a child component. It is immutable within the child component and cannot be modified by the child.

2. Purpose:
State: Used to manage data that can change over time and needs to trigger a re-render when updated (e.g., user input, toggle switches, form data, etc.).
Props: Used to pass data from a parent component to a child component and enable component reuse by passing different values to the same component.

3. Mutability:
State: Mutable. It can be updated within the component using setState in class components or the useState hook in functional components.
Props: Immutable. The child component cannot modify the props it receives; props can only be changed by the parent component.

4. Where They Are Defined:
State: Defined within a component (using useState in functional components or this.state in class components).
Props: Passed down from the parent component to the child component as attributes.

5. Default Values:
State: We define the default value of state when initializing it.
Props: We can set default values for props using defaultProps in class components or by assigning default values in the function parameters (in functional components).
*/

/* Question 9
Question : How can you pass data from one component to another in React?


Answer: In React, data can be passed from one component to another primarily using props. The general flow of data in React is from parent to child, where the parent component can pass data down to its child components via props.We have to send data as key value pair.
Example:
// Child component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function App() {
  const name = "John";
  return (
    <div>
      <Greeting name={name} />
    </div>
  );
}

export default App;

*/

/* Question 10
Question : What is the significance of the key prop in lists?


Answer: In React, the key prop is used to uniquely identify elements in a list or collection of elements. It is a special prop that helps React efficiently update and re-render lists when the data changes. The key is crucial for performance optimization and ensuring the correct behavior when working with lists of dynamic items.

*/

/* Question 11
Question : How do you handle events in React?


Answer: In React, handling events is similar to how it’s done in regular JavaScript, but with some key differences in syntax and approach. React provides a way to listen to events on elements, and it also ensures that the events are handled in a consistent and efficient way across all browsers.React events are named in camelCase (e.g., onClick, onChange, onSubmit).We have use {}.Because it not string or text.We hava use the function name not call the function.

Example:
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

*/

/* Question 12
Question : What are controlled and uncontrolled components in React?


Answer: Controlled Components in React are form elements whose values are managed by React state. The input value is set by a state variable, and any change is handled by an onChange function that updates the state. This gives React complete control over the form data, making it easy to validate and manipulate as needed.

Uncontrolled Components are form elements that maintain their own state internally within the DOM. Instead of updating React state with every change, we use a ref to access the element’s value directly when needed. This approach is often simpler for basic forms or when we don’t need real-time state synchronization.

Example:
*/

/* Question 13
Question : What is a React fragment, and why would you use it?


Answer: A React Fragment is a special component that allows us to group multiple elements without adding extra nodes to the DOM. It’s useful when we want to return multiple elements from a component, but don’t want to introduce an additional wrapper element (like a <div>) that could affect styling or layout.

Example:
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}
*/

/* Question 14
Question : How do you conditionally render elements in React?


Answer: In React, we can conditionally render elements using a variety of methods, including if-else statements, ternary operators, and logical && operators. These methods allow us to display elements based on certain conditions or state values.

1.Using if-else Statements:
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
}

2.Using the Ternary Operator
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
  );
}

3.Using the Logical && Operator
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
    </div>
  );
}

*/

/* Question 15
Question : What are React Hooks? Name a few commonly used hooks.


Answer: React Hooks are functions that let us "hook into" React state and lifecycle features from function components. Before React Hooks, state and lifecycle methods were only available in class components. With hooks, we can now use state, effects, context, and more in function components, making our code more concise and easier to manage.

Commonly Used React Hooks:

1. useState(): Used to add state to a function component. It returns an array with the current state value and a function to update it.
Ex:
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

2.useEffect(): Used to perform side effects (like data fetching, subscriptions, or manually changing the DOM) in function components. It runs after every render by default or only when specific dependencies change.
Ex:
import { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);  // Empty dependency array means it runs once after the first render

  return <div>{data ? <pre>{JSON.stringify(data)}</pre> : 'Loading...'}</div>;
}

3. useRef(): Provides a way to persist values across renders without causing a re-render. It’s commonly used to access DOM elements or store mutable values.
Ex: import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

*/



// Intermediate Interview Questions Of React
/* Question 1
Question : Explain the useState Hook.


Answer: The useState Hook is one of the most commonly used hooks in React. It allows us to add state to function components, which was previously only possible in class components. useState helps us store values and manage changes to those values within a component.

Example: const [state, setState] = useState(initialState);

state: This is the current value of the state.
setState: This is the function used to update the state.
initialState: This is the initial value of the state when the component is first rendered.value can be (string,boolean,number,object,array).
*/

/* Question 2
Question : How does the useEffect Hook work?


Answer: The useEffect hook in React works by allowing us to perform side effects in our functional components. These side effects could be tasks like data fetching, setting up event listeners, or interacting with an external API. It’s an essential hook because it enables us to run code that doesn’t directly affect the UI, but is important for the component’s behavior or for managing external resources.

How Does useEffect Work:
1. Runs After the Component Renders: The useEffect hook is triggered after the component renders. This means the code inside useEffect is executed after the DOM is updated, which is why it’s ideal for side effects that require a rendered DOM or interaction with external APIs or resources.

2. Effect Function: The useEffect hook accepts a function (effect function) that contains the side effect code. This function is called after the component renders.

3. Dependencies: The second argument to useEffect is an optional array of dependencies. It tells React when to re-run the effect. If a dependency in this array changes between renders, the effect function will run again. If the array is empty ([]), the effect runs only once, after the initial render.

4.Cleanup: If we want to clean up resources, like unsubscribing from an event or clearing timeouts, we can return a cleanup function from the effect function. This cleanup function runs when the component is about to unmount, or before the effect function runs again (if the dependencies have changed).
*/

/* Question 3
Question : How can you make an API call in React?


Answer: In React, we can make an API call using the fetch API or other HTTP libraries, typically within a useEffect hook. This ensures the API call is made after the component mounts, and the data can be stored in the component’s state to trigger a re-render and display the data.

how we can call API:
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error.message);
      });
    }, []);

  return (
    <ul>
      {error ? (
        <li>Error: {error}</li>
      ) : (
        data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))
      )}
    </ul>
  );
}

export default DataFetchingComponent;


*/

/* Question 4
Question : What are Higher-Order Components (HOCs)? Give an example.


Answer: Higher-Order Components (HOCs) in React are functions that take a component and return a new component. They are used for reusing component logic. By wrapping a component with an HOC, we can add additional functionality or behavior to that component without modifying its code directly.

Example: Let's create a simple HOC that provides loading functionality to any component. The HOC will take a component and show a loading message until the data is available.

import React, { useState, useEffect } from 'react';

// Higher-Order Component that adds loading functionality
function withLoading(Component) {
  return function WrappedComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
}

// Sample component to display data
function DataComponent() {
  return <p>Data has been loaded!</p>;
}

// Wrap DataComponent with the withLoading HOC
const DataComponentWithLoading = withLoading(DataComponent);

function App() {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <DataComponentWithLoading />
    </div>
  );
}

export default App;

*/

/* Question 5
Question : Explain the use of React Context API.


Answer: The React Context API is a feature that enables you to share state and data across components without having to pass props down manually at every level. This is especially helpful for managing global state, such as user information, theme settings, or language preferences, and helps avoid "prop drilling" (the need to pass props through multiple levels of components).

Example:
*/

/* Question 6
Question : How does the Context API differ from props drilling?


Answer: The React Context API and prop drilling both allow you to pass data between components, but they differ in how they work and when to use each approach.

1. Direct Access to Data:
Context API: Components can directly access the data provided by the context, regardless of their position in the component tree. This avoids passing data through multiple intermediate components.
Prop Drilling: To pass data to a deeply nested component, we need to pass it through each level in the component tree, even if intermediate components don’t need the data. This can make the code hard to manage.

2.Performance:
Context API: React’s Context API re-renders every component that consumes the context whenever the context data changes. While this can be managed, unnecessary re-renders may affect performance if many components consume the same context.
Prop Drilling: Since data is passed down through props, only components that directly receive new prop values will re-render. This can sometimes be more efficient, but it adds complexity and is less manageable in deep or broad component trees.

3.Scalability:
Context API: Well-suited for sharing global data that many components need access to, such as themes, authentication status, or language preferences. It scales better in large applications since we don’t need to worry about prop-passing chains.
Prop Drilling: Suitable for passing data down a few levels in simpler applications. However, it becomes cumbersome and error-prone as the component tree grows deeper or the number of props increases.

*/

/* Question 7
Question : What are refs, and when should you use them in React?


Answer: In React, refs (short for references) are a way to access and interact with DOM elements or React components directly. Using refs allows us to manipulate elements outside of the typical React data flow (which usually involves props and state).

When we should use refs in React:

Directly access or manipulate a DOM element (e.g., focusing an input field).
Trigger animations or interact with elements outside React’s data flow.
Integrate third-party libraries that require direct DOM manipulation.
*/

/* Question 8
Question : What is the useRef Hook, and how is it different from createRef?


Answer:  In React, the useRef hook is used to create mutable references to DOM elements or values in functional components. It provides a way to persist values across renders without causing a re-render when the value changes. It can be used for directly accessing and interacting with DOM elements, storing values that don't trigger re-renders, or keeping references to values that need to persist across component lifecycle events.

Diffence:
useRef:Used in functional components.The ref persists across renders.It doesn’t trigger re-renders when the value of the ref changes.Ideal for storing mutable values that don't require re-renders, like DOM references or timers.

createRef:Used in class components.A new ref is created on each render.It can be used to store DOM references but is less efficient in functional components because of re-creation on each render.Typically used when working with class-based components.

Example:
*/

/* Question 9
Question : What is the purpose of React.memo?


Answer: React.memo is a higher-order component (HOC) used to optimize the performance of functional components by preventing unnecessary re-renders. It only re-renders the component if its props have changed. If the props remain the same, React.memo will skip the re-render, making the app more efficient.

Purpose:
Performance Optimization: It helps optimize the performance of functional components by preventing unnecessary renders when the props haven't changed.

Shallow Comparison: React.memo performs a shallow comparison of the previous and current props. If they are the same, it skips the render.
*/

/* Question 10
Question : Explain React lifecycle methods.


Answer:

Example:
*/

/* Question 11
Question : What are componentDidMount and componentWillUnmount, and when are they used?


Answer:

Example:
*/

/* Question 12
Question : Explain the useCallback Hook and why it is useful.


Answer: The useCallback hook is used in React to memoize functions and prevent unnecessary re-creations of functions during re-renders. It returns a memoized version of the callback function that only changes if one of the specified dependencies has changed.

Why It’s Useful:
Avoid Unnecessary Re-renders: By using useCallback, the function passed to ChildComponent won't change on each render of ParentComponent, preventing unnecessary re-renders of ChildComponent if it's wrapped in React.memo.

Performance Optimization: It helps avoid redundant calculations or re-creations of functions, improving performance, especially in large applications where passing functions down to many components is common.
*/

/* Question 13
Question : How is the useMemo Hook used in React?


Answer: The useMemo hook in React is used to memoize expensive computations and prevent them from being recalculated on every render. It returns a memoized value that only changes when one of its dependencies has changed. This helps optimize performance by preventing unnecessary recalculations of values during re-renders.

How it used:
1.Import useMemo from React.

2.Wrap Expensive Computations with useMemo:
Place the computation inside the useMemo function.
Pass an array of dependencies. The computation will only re-run if any of these dependencies change.

3.Return the Memoized Value:
useMemo returns the memoized value, which we can use in our component.

Example:In this example, we’re calculating an expensive value (simulating by looping) based on a count. This calculation will only run again when count changes, rather than on every render.

import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(false);

  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += count;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOtherValue(!otherValue)}>Toggle Other Value</button>
      <p>Other Value: {otherValue.toString()}</p>
    </div>
  );
}

export default ExpensiveCalculationComponent;

*/

/* Question 14
Question : What are controlled components in forms?


Answer: In React, controlled components are form elements (like input, textarea, and select) whose value is controlled by React state. This means that the displayed value of the form element is always driven by the component's state, and any change to the input value is handled by a React event handler to update that state.

Here’s an example of a controlled component with a simple input field:
import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </form>
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default ControlledForm;

*/



// React Router Questions
/* Question 1
Question : What is React Router, and why is it used?


Answer: React Router is a popular library used for handling routing in React applications. It allows us to create single-page applications  with multiple views or pages, each mapped to a different URL path, without requiring full-page reloads. React Router manages navigation between these views, making the user experience seamless and fast.

Why React Router is Used:

1. Single-Page Application (SPA) Routing: In SPAs, there’s often a need to navigate between different "pages" without reloading the browser. React Router enables this by loading different components based on the URL, providing the feel of multiple pages in a single application.

2. Declarative Routing: React Router uses a declarative approach, making it easy to define and manage routes in the application. Instead of manually coding route transitions, we define routes as components, which enhances readability and maintainability.

3. URL Synchronization: It keeps the UI in sync with the URL, so users can share URLs for specific views within the application, enabling better accessibility and bookmarking of different parts of the app.

4. Nested Routes: React Router supports nested routes, allowing developers to create complex interfaces with multiple levels of navigation.

5. Dynamic Routing: It provides dynamic routing capabilities, where routes can change based on app state or user actions, making it more flexible compared to hardcoded routes.
*/

/* Question 2
Question : Explain the difference between BrowserRouter, HashRouter, and MemoryRouter.


Answer: In React Router, BrowserRouter, HashRouter, and MemoryRouter are different types of routers, each serving unique routing needs in a React application.

Difference between BrowserRouter, HashRouter, and MemoryRouter:

1. BrowserRouter
URL Format: Uses clean, standard URLs (e.g., /home, /about).
Use Case: Ideal for modern web applications hosted on a server capable of handling client-side routing.
Pros: Clean URLs and full support for server-side routing, making it more SEO-friendly.
Cons: Requires server configuration to handle routing, as direct URL access needs to be redirected to the main entry point (e.g., index.html).

2. HashRouter
URL Format: Adds a hash (#) to the URLs (e.g., /#/home, /#/about).
Use Case: Best for static sites hosted on file servers or environments where we don’t have control over server routing.
Pros: Simple to use without server configuration.
Cons: URLs are less clean due to the # symbol, which can make them less SEO-friendly.

3. MemoryRouter
URL Format: Does not display a URL in the browser address bar, and routes exist only in memory.
Use Case: Primarily used for testing or non-URL-based navigation needs, such as in embedded applications or mobile apps.
Pros: Independent of the browser’s URL, making it suitable for test environments or UI components where URL changes aren't necessary.
Cons: Not ideal for applications that rely on bookmarking or sharing URLs.

*/

/* Question 3
Question : How do you handle navigation in React?


Answer: I handle navigation in react using React Router, which allows us to manage client-side routing in a single-page application. This means users can navigate between different pages without triggering a full page reload. React Router allows us to define routes and handle navigation declaratively.

Steps to Handle Navigation in React:
1. Set up a Router: Wrap our application with a router component like <BrowserRouter>.

2. Define Routes: Use <Route> to define paths and their corresponding components.

3. Navigation (Links): Use <Link> for declarative navigation or useNavigate for programmatic navigation.

Example:
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

*/

/* Question 4
Question : What is the use of Switch and Route in React Router?


Answer: In React Router v5, <Switch> and <Route> are used to handle routing and conditional rendering based on the URL path. However, with React Router v6, the <Switch> component has been replaced with the <Routes> component, and there are some other changes in how routing works.

<Route> Component:
1. The <Route> component is used to define a mapping between a URL path and a component.
2. It takes a path prop (the URL) and an element or component prop (the React component to render).
3. When the current URL matches the path, the corresponding component is rendered.

Ex: <Route path="/home" component={Home} />
*/

/* Question 5
Question : How can you use dynamic routes in React Router?


Answer: In React Router, dynamic routes are routes with parameters, allowing us to create routes that can match variable parts in the URL. These are especially useful when we want to display content based on an ID or other dynamic value in the path.

Here's how we can use dynamic routes in React Router v6:

1. Define a Dynamic Route Using (:) Syntax
In our route configuration, we can define a dynamic segment by prefixing it with a colon (:). For example, if we want a route to display a user profile based on a user ID, we can define a path like "/user/:id".

2. Access Route Parameters with the useParams Hook
React Router provides the useParams hook to retrieve route parameters. This hook returns an object with key-value pairs, where the keys are the names of the dynamic segments in the route path.

Example:
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/user/1">User 1</Link>
      <br />
      <Link to="/user/2">User 2</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;

*/

/* Question 6
Question : What is the purpose of useParams Hook?


Answer: The useParams hook in React Router is used to access the dynamic parameters from the URL in a component. It allows us to retrieve values from the route path, such as IDs or other dynamic segments, making it possible to render content based on those parameters.

Purpose: The main purpose of useParams is to get dynamic URL parameters (like productId, userId) and show users a dynamic page based on the provided ID.

*/



// Advanced Interview Questions Of React
/* Question 1
Question : What are React portals, and when should you use them?


Answer:React Portals provide a way to render children into a DOM node that exists outside the parent component's DOM hierarchy. By default, React renders components as direct descendants of their parent components, but with portals, we can render children into a different part of the DOM, which can be outside the root DOM element.

When to Use React Portals:
1. Modals: For rendering a modal dialog on top of other UI elements, portals ensure that the modal is rendered outside the regular content flow, avoiding layout issues.

2. Tooltips or Popups: For elements like tooltips, dropdowns, and pop-ups, portals allow them to be rendered outside their parent elements to avoid clipping or overflow issues.

3. Overlays: When we need to create overlays that may require being visually separated from the rest of the content.
*/

/* Question 2
Question : What is code-splitting, and how do you implement it in React?


Answer: Code-splitting is a technique in web development where we split our application’s code into smaller bundles that can be loaded on demand, rather than loading the entire application code at once. This can significantly improve the performance of our app, especially for larger applications, as it reduces the initial load time.

Example:
*/

/* Question 3
Question : Explain lazy loading and how you can implement it in React.


Answer: Lazy loading is a design pattern where resources or components are loaded only when they are needed, rather than loading everything upfront. This helps to improve the performance of the application by reducing the initial load time and making the app feel faster.

How to Implement Lazy Loading:

1. Use React.lazy(): This function allows us to dynamically import a component only when it is needed.

2. Wrap the Lazy-loaded Component with Suspense: We must wrap any lazy-loaded components in a Suspense component, which allows us to define a fallback UI (like a loading spinner) while the component is loading.

Example: Lazy Loading with React Router
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Lazy load components
const HomePage = React.lazy(() => import('./HomePage'));
const AboutPage = React.lazy(() => import('./AboutPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;


*/

/* Question 4
Question : What is Concurrent Mode in React, and what are its benefits?


Answer: Concurrent Mode in React is an experimental set of features that enables React to work on multiple tasks at the same time. It allows React to prioritize updates and keep the user interface responsive by breaking rendering work into smaller chunks and allowing React to interrupt and pause work as needed. This makes applications more fluid and responsive, especially when dealing with complex UIs or large datasets.

Benefits of Concurrent Mode:
1. Smoother UI: Keeps the interface responsive by prioritizing user interactions over less important updates.

2. Efficient Loading States: Shows loading progressively, providing a faster feel.

3. Seamless Transitions: Enables smooth, lag-free transitions between views or actions.

4. Automatic Batching: Combines quick updates to reduce re-renders and improve performance.
*/

/* Question 5
Question : How do you implement Error Boundaries in React?


Answer: In React, Error Boundaries are special components that catch JavaScript errors anywhere in their child component tree.

How to Implement Error Boundaries:
1. Create an Error Boundary Component: Error Boundaries can only be implemented in class components by overriding the componentDidCatch and getDerivedStateFromError lifecycle methods.
ex:
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.log("Error:", error, "Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h2>Something went wrong.</h2>;
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;

2. Wrap Components with Error Boundary: Wrap any component(s) you want to protect with the ErrorBoundary component. This will catch errors in the wrapped components and display a fallback UI.
ex:
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;

*/

/* Question 6
Question : What are the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?


Answer: Differences Between Client-Side Rendering (CSR) and Server-Side Rendering (SSR).

1. Rendering Location:
CSR: The content is rendered in the browser on the client side, after the initial JavaScript loads.
SSR: The content is rendered on the server, and a fully-rendered HTML page is sent to the client.

2. Initial Load Time:
CSR: Initial load may be slower since the browser has to download JavaScript, then render content.
SSR: Initial load is faster as the server sends fully-rendered HTML, so the user sees content sooner.

3. SEO:
CSR: Generally not ideal for SEO on its own since content is rendered after JavaScript execution, which some search engines struggle to parse.
SSR: Better for SEO because search engines can directly read the fully-rendered HTML sent from the server.

4. User Interactivity:
CSR: Faster interactions after the initial load, as only specific components are re-rendered without needing server communication.
SSR: Interactions may involve additional requests to the server, potentially leading to slower interactions in complex apps.

5. Caching:
CSR: Caching typically happens at the browser level, which may not be as efficient for dynamic content.
SSR: Caching can be managed on the server, allowing efficient caching strategies for static or less frequently changing content.

6. Complexity and Maintenance:
CSR: Simpler setup with front-end frameworks (like React or Vue) as only the client is responsible for rendering.
SSR: More complex setup since it requires server configuration and handling for rendering HTML on the server side.
*/

/* Question 7
Question : What is Server-Side Rendering (SSR) in React, and how does it work?


Answer: Server-Side Rendering (SSR) in React refers to rendering React components on the server instead of in the client’s browser. With SSR, the server generates the initial HTML content for a page and sends it to the client, allowing users to see a fully-rendered page faster. Once the HTML is delivered, the client-side JavaScript takes over, making the app interactive

How SSR Works in React:
Initial Request: When a user requests a page, the server receives this request.

Rendering on the Server: The server renders the React components into static HTML by running JavaScript on the server.

Sending HTML to Client: The server sends this HTML content to the client’s browser, so the user immediately sees a fully-rendered page.

Hydration: Once the HTML is loaded, React’s JavaScript is loaded on the client, and a process called hydration occurs. During hydration, React binds event listeners and makes the static HTML interactive.
*/

/* Question 8
Question : How does Next.js improve SSR and static generation in React applications?


Answer:

Example:
*/

/* Question 9
Question : What are the benefits of using Next.js over a standard React app?


Answer: Benefits of Using Next.js Over a Standard React App:

Server-Side Rendering (SSR) & Static Site Generation (SSG): Better SEO and faster initial load times.

File-Based Routing: Automatic routes based on file structure, simplifying routing.

API Routes: Built-in serverless functions, enabling backend logic without separate servers.

Automatic Performance Optimizations: Code-splitting, image optimization, and lazy loading out of the box.

Incremental Static Regeneration (ISR): Update static pages without full redeployment.

Enhanced SEO: Pre-rendered pages improve search engine visibility.

Improved Developer Experience: Hot reloading, TypeScript, and CSS support built-in.
*/

/* Question 10
Question : What are Suspense and Concurrent Mode in React?


Answer:
Suspense: Suspense is a feature in React that allows components to "wait" for some asynchronous operation (like data fetching) before rendering. Suspense can display a fallback UI (such as a loading spinner) until the component's data or resource is ready.
Example:
<Suspense fallback={<div>Loading...</div>}>
  <SomeComponent />
</Suspense>


Concurrent: Concurrent Mode (still experimental) enables React to handle multiple tasks simultaneously, enhancing performance and user experience. It allows React to prioritize more important updates, like user interactions, and suspend less critical updates in the background, making UI interactions smoother and more responsive.

*/

/* Question 11
Question : How do you handle asynchronous data with Suspense in React?


Answer: To handle asynchronous data with Suspense in React, we use React.lazy for code-splitting or pair Suspense with libraries like React Query or Relay for data fetching. However, React’s built-in Suspense doesn’t support data fetching directly, so we rely on libraries to make data-fetching "suspense-ready.

How to handle:
1.Import our component lazily:
ex:const LazyComponent = React.lazy(() => import('./LazyComponent'));

2.Wrap it in a <Suspense> component, specifying a fallback (loading state) while the component loads:
ex:
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

*/

/* Question 12
Question : What are custom hooks in React, and why would you use them?


Answer: Custom Hooks are user-defined functions that allow us to reuse stateful logic across multiple components. They are a way to extract and share common logic, making our code more modular, readable, and maintainable. Custom hooks follow the same naming convention as built-in hooks, such as useState or useEffect, by starting with the use prefix.

Why we use Custom Hooks:
Code Reusability: They allow us to share logic between multiple components without duplicating code.

Separation of Concerns: We can move complex logic into custom hooks, keeping components simple and focused on UI.

Maintainability: By organizing logic into separate hooks, the codebase becomes easier to manage, especially as the app grows.

Abstraction: They help abstract away implementation details, making components easier to understand.
*/

/* Question 13
Question : What are the best practices for structuring a large React project?


Answer: Here’s a shortened version of the best practices for structuring a large React project:

Organize by Feature: Group files by feature (e.g., auth, dashboard) instead of by type (e.g., components, services).

Atomic Design: Break down UI into small, reusable components (atoms, molecules, organisms, templates, pages).

Separate Business Logic: Keep API calls and state management separate from UI components (use Redux, Context API, or custom hooks).

Use Containers and Presentational Components: Separate components into containers (with logic) and presentational components (UI-only).

Modular Styles: Use CSS-in-JS or CSS Modules for scoped styles, keeping styles close to components.

Use TypeScript: Add static typing to catch errors early and improve maintainability.

Lazy Loading and Code Splitting: Use React.lazy() and Suspense for performance optimization.

Error Boundaries: Implement error boundaries to catch and handle errors in the component tree.

Naming Conventions: Use PascalCase for component file names (e.g., MyComponent.js).

Add Tests: Use Jest and React Testing Library for unit and integration tests.

Linting and Formatting: Use ESLint, Prettier, and Husky for consistent code quality.
*/

/* Question 14
Question : How does the Virtual DOM work in React?


Answer: The Virtual DOM in React is a lightweight representation of the actual DOM. It improves performance by minimizing the number of direct updates to the real DOM. Here's how it works:

1. Virtual DOM Creation: When a component's state or props change, React creates a Virtual DOM (a JavaScript object) that represents the UI.

2. Comparison (Diffing): React compares the updated Virtual DOM with the previous version to identify the changes.

3. Reconciliation: React calculates the most efficient way to update the real DOM by applying the minimal set of changes.

4. Updating the Real DOM: React then updates the real DOM only with the changes that are necessary, avoiding unnecessary re-renders and improving performance.
*/

/* Question 15
Question : How does React’s reconciliation algorithm work?


Answer: React's reconciliation algorithm is responsible for efficiently updating the DOM by comparing the old and new Virtual DOMs.

Example:
*/

/* Question 16
Question : Explain how React.StrictMode works and its purpose.


Answer: React.StrictMode is a tool in React that helps developers identify potential problems in an application during development. It does not affect the production build but provides additional checks and warnings in the development environment.

Example:
*/

/* Question 17
Question : How do you prevent unnecessary re-renders in React?


Answer: To prevent unnecessary re-renders in React, we can use various techniques and optimizations. Here are some of the most common methods whcih i use :

1. Use React.memo for Functional Components
React.memo is a higher-order component that memoizes a component and prevents it from re-rendering unless its props change.
Usage: Wrap functional components with React.memo to avoid unnecessary re-renders when props haven't changed.

Ex: const MyComponent = React.memo((props) => {
  return <div>{props.name}</div>;
});

2. Use useMemo Hook
The useMemo hook is used to memoize expensive calculations so that they are recomputed only when dependencies change.
This is useful for optimizing performance when rendering large lists or performing expensive operations.

Ex: const memoizedValue = useMemo(() => expensiveFunction(data), [data]);


3. Lazy Load Components
Use React's React.lazy() to load components only when they are needed. This helps reduce the initial rendering load and prevents unnecessary re-renders when components are not used.

Ex:const LazyComponent = React.lazy(() => import('./LazyComponent'));


*/

/* Question 18
Question : Explain how to debounce or throttle a function in React.


Answer:

Example:
*/

/* Question 19
Question : What are prop types, and why are they used in React?


Answer: PropTypes are a way to validate the props passed to a React component. They allow us to enforce that the correct type of data is being passed to the component, which helps catch bugs and makes the code more predictable. By defining PropTypes, we can check the type of props during development  and ensure that the right data is passed down to components.

Why PropTypes are used:

1. Type Safety: PropTypes help ensure that the component receives props of the correct type (e.g., string, number, array).

2. Code Readability: They serve as documentation, making it clear what type of data a component expects.

3. Debugging: PropTypes can warn us if we are passing the wrong data types to a component, which makes debugging easier.

4. Development Only: PropTypes validation happens only in development mode, so it doesn't affect production performance.

*/

/* Question 20
Question : How do you manage side effects in a React app?


Answer: In React, side effects are operations that can affect other parts of the application, such as fetching data from an API, subscribing to a service, or manually changing the DOM. React provides the useEffect hook to handle side effects in functional components.I give an example how we can manage side effects.

Timers (setInterval, setTimeout)
When: When we need to set up timers, like intervals or timeouts.
How:We can use useEffect to set the timers and a cleanup function to clear them when the component unmounts or before the effect runs again.

Example:
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}

export default Timer;

*/

/* Question 21
Question : How does the useReducer Hook work, and when would you use it?


Answer: The useReducer hook in React is a way to manage complex state logic in components, especially when the state depends on multiple actions or complex updates. It’s an alternative to useState and is often preferred when you have to manage multiple related state values, or when state transitions need to be explicitly defined.

How it work:
useReducer takes two arguments:
1. A reducer function that defines how the state should change based on an action.
2. An initial state for the component.

It returns:
1. The current state.
2. A dispatch function that triggers state changes.

Reducer Function
The reducer function determines the new state by accepting the current state and an action object as parameters, then returning a new state based on the action’s type.

When to Use :

1. Complex State Logic: When the state logic is complex and involves multiple sub-values or complex transitions.

2. Related State Updates: When updates are dependent on the current state or involve multiple actions affecting the state.

3. Scalability: When state management grows or is part of a larger application, useReducer can make the code more readable and manageable by centralizing state logic in a single function.
*/

/* Question 22
Question : Explain how to create and use custom hooks.


Answer:
Example:
*/

// Real Life Project 
/*
import React, { useRef, useState } from 'react';

const A = () => {
    const [editingContact, setEditingContact] = useState(false);
    const [editingContactId, setEditingContactId] = useState(null);
    const [search, setSearch] = useState('');
    const name = useRef();
    const phone = useRef();
    const email = useRef();
    const [contacts, setContacts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const tel = e.target.tel;
        const email = e.target.email;

        if (!editingContact) {
            setContacts([...contacts, { name: name.value, phone: tel.value, email: email.value, id: contacts.length }]);
        } else {
            const editContact = contacts[editingContactId];
            editContact.name = name.value;
            editContact.phone = tel.value;
            editContact.email = email.value;

            setEditingContact(false);
        }
        clearInputs();
    };

    function clearInputs() {
        name.current.value = '';
        phone.current.value = '';
        email.current.value = '';
    }

    const onEdit = (contact) => {
        name.current.value = contact.name;
        phone.current.value = contact.phone;
        email.current.value = contact.email;
        setEditingContactId(contact.id);
        setEditingContact(true);
    };

    const onDelete = (contactId) => {
        const newContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(newContacts);
    };


    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>Contact Manager</h1>


            <input
                type="text"
                placeholder="Search contacts by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    id='name'
                    ref={name}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    id='tel'
                    ref={phone}
                    required
                />
                <input
                    type="email"
                    id='email'
                    ref={email}
                    placeholder="Email"
                    required
                />
                <button type="submit">{editingContact ? 'Edit' : 'Add'} Contact</button>
            </form>

            <ul>
                {filteredContacts.map((contact) => (
                    <li key={contact.id} style={{ display: 'flex', flexDirection: 'column', gap: '7px', border: '1px solid red', padding: '5px', margin: '10px' }}>
                        <h3>{contact.name}</h3>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email}</p>
                        <div style={{ display: "flex", gap: '15px' }}>
                            <button onClick={() => onEdit(contact)}>Edit</button>
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default A;
*/
