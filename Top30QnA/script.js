// -----------------------------------------1. What is prototype in js?------------------------------------------
// Need - prototype play a crucial role in implementing prototyple inheritance in js. the need for prototype
//         arises from the desire to create efficient and reusable code. prototype help in conserving memory.
// what is it - in js everything is Object. prototype is also Object. whenever we create any Object along with
//              that object prototype is also associated with it. in this prototype there are several 
//              properties included. and this prototype is connected to other prototype and this is called 
//              prototype chain. when we try to search any property in object then it will try to search in 
//              object. after that it will search in its prototype and then it will search for in protyple 
//              chain. and finally it reaches end where prototype object is null and it return undefined. so 
//              prototype plays very important role in creating reusable code and conserving memory.
// how to use - eg - 
        // function Person(name,surname, age, role){
        //     this.name=name;
        //     this.surname=surname;
        //     this.age=age;
        //     this.role=role;
        // }
        // const obj1=new Person("travis","head",20,"engineer")
        // Person.prototype.fullName=obj1.name+" "+obj1.surname;
        // console.log(obj1.name); // travis
        // console.log(obj1.fullName); // travis head

// -----------------------------------------2. This keyword--------------------------------------------
// need - 
        // to avoid conflicts between current context and the external one.
// what it is -
        // this keyword refers to current context or current object we can say and if we use "this" keyword
        // globally it will refer to window object.
// how to use -
        // eg - here we are passing john in greet but I want to print "Hello, I'm Alice" now if we don't use "this" 
        // then it will print john but if I use "this" then it point to current object i.e Alice.
        // const person = {
        //         name: "Alice",
        //         greet(name) {
        //             console.log(`Hello, I'm ${this.name}.`);
        //         },
        //     };
        //     person.greet("john"); // Logs "Hello, I'm Alice."


// -------------------------------------------3. What is Hoisting----------------------------------------------
// need - The concept of hoisting in JavaScript was not necessarily introduced to fulfill a specific need but 
//         rather as a result of how the language is designed and how its execution context works.
// what is it - Hoisting is a behavior that occurs during the compilation phase of the JavaScript code,
//         Hoisting is a javascript mechanism where variables and function declarations are moved to top of 
//         scope before the execution of code.
// how to use - eg -
        // Variable hoisting
        //    console.log(x); // undefined 
        //      var x= 5; 
        //    console.log(x); //5  Function hoisting:
        // Function hoisting 
        //     are entirely hoisted, including both the name and the function body.
        //     This allows you to call a function before it's declared in the code.
        // javascriptCopy code
        // sayHello(); // "Hello, World!" 
        // function sayHello() { console.log("Hello, World!"); }


// ------------------------4. What are event loops?------------------------------------------------------
// Need for it - before the introduction of event loops asynchronous operations were handled by using callback
//               functions or nested promises we can say which was complex to understand. but by event loop
//               one structure got generated for handling asynchronous functions which was preety easy.
// what is it - Event loops are a powerful tool that can be used to make programs more efficient and 
//              responsive. They are also a key part of many different programming languages and frameworks.
// how to use - javascript is synchronous and single threaded language. but we can perform async operations in it by using
// browser api such as promise and setTimeout.
// there is a event loop which continously goes on running it never stops. whenever code is
// getting executing executer and global execution context get created in the call stack and this gec will parse the code 
// and register all async functions such as settimeOut, promise separately and implement all non async 
// functions synchronously. after that this gec gets depreciated. now as async functions complete their execution
// they come in macro task queue. now event loop checks continously on call stack whether it is empty or not
// if it is empty it checks in task queue are there any tasks pending. if there are pending tasks then it will
// move it to call stack one by one and this process goes on continuously. 

// Note - for promises there is micro task queue and for setTimeOut there is macro task queue and event loop
//         will always ask its first questinn to micro task queue/promises(fetching). 

        // eg - 
        // console.log(1);
        // setTimeout(()=>{
        //         console.log(2);
        // },3000)
        // setTimeout(()=>{
        //         console.log(3);        
        // },2000)
        // console.log(4); // 1,4,3,2


// ------------------------------------5. What are inline & block elements?----------------------------------
// Intro line - An element in HTML has a structure that consists of the start tag, content, and then the end 
//              tag. There are two display values - block and inline elements in HTML.
// 3 points compared & contrasted
//         block elements - 
//         1. Block elements always start from a new line.
//         2. Block elements cover space from left to right as far as it can go.
//         3. Block elements have top and bottom margins
//         4. div,header, footer, p tags etc
//         inline elements -
//         1. Inline elements never start from a new line.
//         2. Inline elements only cover the space as bounded by the tags in the HTML element.
//         3. Inline elements don't have a top and bottom margin.
//         4. span, a, img tags etc


// -------------------------------------6. What is a meta tag in HTML?--------------------------------------
// Why is it needed?
// meta tags are needed to provide additional information about a page to search engines and other clients.
// What is it?
// meta tags represent metadata. They are essentially used for defining and describing data about data, and 
// are used to add extra information to the data inside the webpage. There are many meta tags. Some of them 
// help improve the SEO (Search Engine Optimisation) of your website, making sure that the content of your 
// site is relevant to what people are searching for.
// How is it used?
// Clients process the meta tags and ignore those they don't support. meta tags are added to the <head> 
// section of your HTML page and generally look like this:
        // eg -
        // <!DOCTYPE html>
        // <html>
        //   <head>
        // <!-- Example 1: Character Encoding -->
        // <meta charset="UTF-8" />

        // <!-- Example 2: Page Description and Keywords -->
        // <meta name="description" content="Free Computer Science Content" />
        // <meta name="keywords" content="HTML, CSS, JavaScript" />

        // <!-- Example 3: Author Information -->
        // <meta name="author" content="Your Name" />

        // <!-- Example 4: Viewport Settings -->
        // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //   </head>
        // </html>


// --------------------------------7. Why use React over Vanilla JS?-----------------------------------------
// Intro line
//         Both React.js and VanillaJS are used to build dynamic websites. But the differences are
// 3 points compared & contrasted
//         Reusable components: React’s components-based architecture allows for enhanced reusability 
//         and maintenance of application code, reducing development time and cost.
//         Better performance: React offers improved performance and efficiency, as it utilizes a virtual DOM,
//         which can result in a better user experience and higher conversion rates for businesses.
//         Active community: React has a large and active community of developers, which offers ready solutions,
//         comprehensive documentation, and continuous support
// Application in your project
//         Qkart is developed using react.


// -----------------------------------------8. What is Babel? How is it used with React?------------------------
// Need for it - 
//         browser don't understand jsx language. In react to convert jsx code to javascript we need babel. because
//         browser understand js language only.
// What is it
//         Babel is a JavaScript compiler that allows developers to write code using the latest ECMAScript (ES) 
//         standards or even future proposals, and then transforms that code into a version of JavaScript that is 
//         compatible with most browsers and environments. It enables developers to use modern JavaScript features 
//         and syntax, ensuring cross-browser compatibility.
// How to use
//         In React projects, Babel is an integral part of the build setup. Whether you're using a Create React App 
//         (which comes preconfigured with Babel) or setting up your own webpack configuration, Babel ensures that 
//         your React code, including JSX and modern JavaScript features, is transformed into a format that can be 
//         executed across different browsers.


// ---------------------------------9. What is the CSS Box Model?--------------------------------------------
// Need:
//         CSS Box Model is needed to provide a standard way of defining the size and position of HTML elements on a 
//         web page, enabling visually appealing and responsive web designs.
// What is it?
//         A box in CSS consists of a content area, which is where any text, images, or other HTML elements are displayed.
//         The box model describes how these elements work together to create a box as displayed by CSS.
// How is it used?
//         Every element in your application appears as box model.
//         I will divide mox model into 4 parts
//         content-every elements has to hold something which is content.
//         padding-padding is space around the content 
//         border-outer line of element which will highlight that element.
//         margin-creating space around elements is margin
//         box model gives layout to the element.there are various aspects to elements in web application
//         like innerspace, outerspace, padding whether element is centered or not so these all things we can do with 
//         the help of box model only.


// ----------------------------10. Difference between State and Props--------------------------------------
// Intro line
//         In React, props and state are both plain JavaScript objects. 

// 3 points of comparison
// States are managed within the component and props are passed to the component
// States are used to update component while props are used to communicate between components.
// States are mutable where as props are immutable.


// -----------------------------------11. What is a state in React?-----------------------------------------------
// Need for it
//         Re-rendering of component is mostly done by modifying states.
// What is it
//         In React, state refers to the data that represents the current condition of a component. It is a 
//         JavaScript object that holds information about the component's properties, configuration, or any 
//         other data that might change over time. State allows React components to manage and update their 
//         data dynamically, leading to interactive and responsive user interfaces. 
// How to use
//         In a React component, you can define and manage state using the useState hook or, in class 
//         components, by setting the state using this.setState(). 
// Application of it in your project
//         Form Handling: Managing the state of form inputs, capturing user input, and updating the UI accordingly.
//         Conditional Rendering: Controlling the visibility or appearance of components based on certain 
//                                 conditions stored in the component's state.
//         User Authentication: Managing the authentication state of a user, such as whether they are logged in or not.


// -------------------------12. What is type coercion? Explain how 3 + 2 + “7” = 57.--------------------------
// How
//         Type coercion refers to the automatic conversion of values from one data type to another.
//         In the expression 3 + 2 + "7", type coercion occurs due to the addition operation involving 
//         different data types (numbers and a string). 
// Here's how the expression is evaluated:
//         Addition of Numbers (3 + 2):
//                 The first operation involves adding the numbers 3 and 2, resulting in the numeric value 5.
//         Concatenation with a String ("7"):
//                 The result of the previous operation (5) is then concatenated with the string "7". In 
//                 JavaScript, when the + operator encounters a string, it converts the other operand(s) to 
//                 strings and performs concatenation.
//         Final Result (Concatenated String):
//                 Therefore, the final result is the concatenation of the numeric result (5) with the 
//                 string "7," resulting in the string "57."
// 2 things to keep in mind while doing it 
//         Addition of number and string will always concatenate. Final result will be in string format.


// -------------------------------13. What are the different ways to call api in react?--------------------
// Intro line
//         There are multiple ways to do api calls. Axios, Fetch API and XMLHttpRequest — have their own 
//         strengths and weaknesses and can be used to make HTTP requests in a React application.
// 3 points of comparison
//         Fetch API using .then and .catch - this method is the traditional way of handelling api's. 
//         The Fetch API returns a promise that resolves to the response from the server.You can chain .then() to 
//         handle the successful response and .catch() to handle errors. 

//         Fetch API using async and await - async/await provides a cleaner way to handle promises.
//         Mark your function as async, and use await to pause execution until the promise resolves.

//         Axios - Axios is a third-party library specifically designed for making HTTP requests.
//                 Features:
//                 Simplified syntax compared to Fetch.
//                 Automatic JSON parsing.
//                 used to perform crud operations.


// ----------------------14. How to set media queries for different devices? (desktop, tablet, mobile)?-----------
// How
//         Use CSS media queries to apply styles based on the characteristics of the device or viewport. Media queries 
//         allow you to specify different styles for different screen sizes or types of devices.
// /* For Desktops */ @media only screen and (min-width: 1024px) { /* Desktop styles here */ } /
// * For Tablets */ @media only screen and (min-width: 768px) and (max-width: 1023px) { /* Tablet styles here */ } 
// /* For Mobiles */ @media only screen and (max-width: 767px) { /* Mobile styles here */ }
// 2 things to keep in mind while doing it 
//         Mobile-First Approach:
//         Start with styling for mobile devices and then progressively enhance for larger screens. This approach 
//         ensures a more efficient and optimized experience for users on smaller devices, with the flexibility to 
//         add additional styles for larger screens.
//         Viewport Meta Tag:
//         Include a viewport meta tag in the HTML <head> to ensure proper rendering on mobile devices. This tag 
//         helps control the width and scaling of the viewport.


// ---------------------------15. Difference between Controlled v/s Uncontrolled component------------------------
// What are controlled and uncontrolled components ?
// "In React, a controlled component is one where the form data is handled by React state. An uncontrolled component,
//  on the other hand, relies on the DOM to manage its own state using refs. I typically use controlled components 
// when I need to validate, manipulate, or track user input in real time. Uncontrolled components are useful for 
// quick forms or when integrating with non-React libraries."

// SN	Controlled	                                        Uncontrolled
// 1.	It does not maintain its internal state.	        It maintains its internal states.
// 2.	Here, data is controlled by the parent component.	Here, data is controlled by the DOM itself.
// 3.	It accepts its current value as a prop.	                It uses a ref for their current values.
// 4.	It allows validation control.	                        It does not allow validation control.
// 5.	It has better control over the form elements and data.	It has limited control over the form elements and data.


// -----------------------------------------16. What are lifecycle methods?-------------------------------------
// Need for it
//         In React, lifecycle methods are used to control a component's behavior and perform actions at different stages 
//         of its lifecycle.
// What is it
//         Lifecycle methods are special methods provided by React that are invoked at various stages during a 
//         component's lifecycle. React components go through three main phases: mounting, updating, and unmounting. 
//         Each phase has associated lifecycle methods that developers can use to perform specific tasks.
// How to use
// Mount phase(executes one time) 
//         Constructor – instance created, state
//         Render() -  Html is created from jsx and it gives to paint.
//         ComponentDidMount() – to give notification that content of class component is on the browser now.

//         Update phase – It executes the number of times you update the state. Internal state updates or even if sends 
//                         new props.
//         Render – recreates Html fresh with state value.
//         ComponentDidUpdate() – this methos will execute on every update.

//         Unmount phase (executes one time)
//         ComponentWillUnmount() – here usually it is used to remove cleanup tasks & to remove intervals. This component 
//                                 is called whenever we close component or component is removed from the page.


// --------------------------------17. Why are Hooks used? What are they?------------------------------------------
// Need for it
//         To add stateful logic to functional components
// What is it
//         Hooks are latest feature in React to add stateful logic to functional components.
// Few of the common hooks are
//         useState: Allows functional components to have state.
//         useEffect: Allows functional components to perform side effects like API calls after component renders
// How to use
//         Import the specific hook from React library
//         For useState(), we pass an argument to set initial state value and returns 2 values - state and the 
//         function to update state
//         For useEffect(), we pass 2 arguments - function to execute and dependency array of values to decide 
//         when to execute the function


// -------------------18. What is the difference between virtual DOM and real DOM?--------------------------------
// Intro line
//         The Virtual DOM and the Real DOM are concepts associated with web development, particularly in the 
//         context of frameworks like React.
// 3 points of comparison
// Representation:
//         The Real DOM represents the actual structure of the HTML document in memory.It is a tree-like structure 
//         consisting of objects that represent each HTML element in the document. The Virtual DOM is an abstraction of 
//         the Real DOM. It is a lightweight copy of the Real DOM, maintained in memory by JavaScript.
// Rendering
//         Any change to the DOM triggers a reflow and repaint of the entire page, which can be resource-intensive. 
//         Changes made to the Virtual DOM are not immediately reflected in the Real DOM. Reconciliation process takes 
//         place to update real DOM.
// Manipulation:
//         Direct manipulation of the Real DOM is relatively slower, especially when dealing with complex and dynamic 
//         applications. Manipulating the Virtual DOM is faster than manipulating the Real DOM because it is an in-memory 
//         representation


// ---------------------------------19. Difference between useEffect and useState?------------------------------
// Intro line
//         useState and useEffect both are hooks that are most commonly used in any React application 
// 3 points of comparison
// Purpose
//         useState: manage state within a component.
//         useEffect: perform side effects in a component such as fetching data, updating the DOM, etc.
// Usage
// useState: Takes an argument to initialise the state value and returns an array with two values: the current 
//           state and a function to update the state
// useEffect: Takes a function as the first argument and executes that function whenever any values, in the 
//            dependency array passed as 2nd argument, changes
// Trigger:useState: State updates are triggered manually by calling the update function returned by useState.
//         useEffect triggers side effects automatically, after every render, but can be optimized using the 
//         dependency array


// --------------------20. What is the difference between functional and class based components?------------------
// Intro line
//         Functional components and class components both are used to display UI on the screen. 
// 3 points of comparison
//         Syntax - Functional components are written as a JavaScript function. Class components are written as 
//         a JavaScript class.
//         State and Lifecycle Methods - Functional components do not have a state or lifecycle methods. Class 
//         components have a state and can implement lifecycle methods like componentDidMount and 
//         componentDidUpdate.
//         Performance – Functional components are faster as they do not have state and lifecycle, react needs to 
//         do less work to render these components. Class components are slower as they have state and lifecycle, 
//         react needs to do comparatively more work to render these  components.


// -----------------------------21. How can you pass data from child component to parent component?--------------
// How
//         There are multiple methods to achieve this like using call back function, lifting state up etc. here 
//         we will discuss about using call back.Create a callback method. This method will get the data from the 
//         Child to Parent.Pass your data as props in Child. The Child will call the Parent callback using props.
//         The callback method in the Parent will act as prop to the Child component. 
//         state lifting up - here there is one parent and 2 children and if I want to pass data from child1 to 
//         child2 then with the help of state lifting concept I can share data with the siblings.

// 2 things to keep in mind while doing it 
//         Define callBack function in parent itself but calling it, you can do it from child component.
vt//         Pass callBack function as a prop to child component.


// --------------------------------22. Difference between useCallback & useMemo---------------------------------
// Intro line
//         Two frequently used hooks, useMemo and useCallback, might seem similar at first glance, but they 
//         serve distinct purposes in optimizing React applications.
// 3 points of comparison
//         Purpose:
//         useMemo is used to memoize values or computations, helping to optimize expensive calculations or data 
//         transformations.
//         useCallback is used to memoize callback functions, reducing unnecessary re-creation of 
//         functions and optimizing component re-renders.
//         Return Value:
//         useMemo returns the memoized value itself.
//         useCallback returns the memoized callback function itself.
//         Usage Scenario:
//         Use useMemo when you want to optimize and cache the result of a computation that depends on certain inputs.
//         Use useCallback when you want to optimize the creation of callback functions that are passed to child components.


// ------------------------------------------23. What is useRef---------------------------------------------
// Need for it
//         Initially we used to use useState for everything even for simple calculation this used to create 
//         unnecessary re-renders which was not required, So to tackle this useRef was introduced.
// What is it
//         useRef is a react hook which persists data across the renders without causing unnecessary re-render.
//         Direct interaction with DOM can be done with useRef like focusing on input field also like measuring 
//         size of elements.
// How to use
//         We need to import useRef from react and simply we can use useRef keyword and use it.
//         Eg- const ref=useRef();


// -----------------------------------24. What are hooks--------------------------------------------------------
// Need for it 
//         initially state were created only in class components not in functional components but after the introduction
//         of hooks in react 16.8 we are able to create states in functional components also.
// what is it 
//         Hooks are functions which are used to communicate to react api's 
//         react api - communicating with states, dom, ref etc
//         Hooks are a features introduced in react 16.8 that allows us to create states in functional components. 
//         These hooks are mostly used to optimize the rerendering, manage state and side effects due to which 
//         our software's performance will also boost efficiently and hooks like useState, useEffect, useContext, 
//         useCallBack etc are used to perform different aspects of the component logic and behaviour.
// how to use
//         we need to import hooks by using import keyword and start using it.


// ------------------------------25. Diff b/w useState and useEffect-------------------------------------------
// Intro line
//         both are react hooks used to write simpler and cleaner code for functional components.
// 3 points of comparison
//         useState - 1. it is used to create state variables in functional components.
//                    2. it return array containing of current state value and function to update that state.
//                    3. it runs before the render function.
//         useEffect - 1. it is used to deal with side effects such as unnecessary re-rendering and api calls.
//                     2. it return callback function and dependency. with the help of dependency we control its triggering.
//                     3. it runs after the render function.


// ----------------------------------26. why not use var instead of useState?----------------------------------------
// Intro line 
//         both are used to create varibles.
// 3 points of comparison
//         var - 1. varibles created using var does not re-render on modifying it.
//               2. var are functional scoped.
//               3. var is not a hook.
//         useState - 1. state varibles support re-rendering on modifying it.
//                    2. useState are component scoped therefore they are predictable and chances of error is less.
//                    3. useState is a hook in React. 


// ----------------------27. How to implement diff lifecycle methods using useEffect?-----------------------------
// How
//         there are 3 phases in lifecycle methods mounting phase, updating phase, unmounting phase. 
//         for mounting phase - componentDidMount() method will execute and in functional component we can perform 
//                              this kind of operation using useEffect. here we need to pass an empty dependency. then
//                              it will work similar to componentDidMount() method.
//         updating phase - componentDidUpdate() method is there. to work similar to this we need to pass a dependency 
//                          in useEffect so whenever that dependency is getting changed then only useEffect will trigger
//                          its callback function.
//         unmounting phase - componentWillUnmount() method is there. to work similar to this we need to pass a return
//                            with callback function inside useEffect.and in that callback function we can write any cleanup 
//                            tasks or resetting interval etc.
// 2 things to keep in mind while doing it 
// 1. if we don't pass dependency then on every render this useEffect will run.
// 2. return is optional in useEffect if you are performing any clean up tasks or anything similar to it then only 
//    make use of return to behave it like componentDidUnmount() method.


// ------------------------------------------28. Diff b/w Semantic & non-semantic-------------------------------------------
// Intro line 
//      there are 2 types of elements Semantic and non-Semantic.
// 3 points of comparison 
// semantic elements -
//     1.semantic elements are those which define a particular meaning of element to browser or user.
//     2.ex are <header/>, <footer/>, <section/> etc
//     3.semantic elements help to improve seo's.
// non-semantic elements -
//     1.non-semantic elements are those which does not define any meaning of element to browser or user.
//     2.ex are <div/>, <span/> etc
//     3.non semantic elements does not help to improve seo's.


// --------------------------------------------29. Diff b/w Block & inline elements-------------------------------------
// Intro line
//      for developing any web application Block and Inline level elements are always used.
// block elements - 
//     1.block level element take the entire horizontal width and always start in new line.
//     2.block level elements can contain inline elements.
//     3.ex <div/>, <h1/>, <p/>
// inline elements - 
//     1.inline level element always take required width and they do not start on new line.
//     2.inline level elements cannot contain block elements.
//     3.ex <br/>, <span/>, <img/>, <a/> -->


/* -------------------------------------------30. What is the CSS Box-model?------------------------------------------------- */
// Need for it
//         Every element in your application appears as box model. box model gives layout to to the element.
//         there are various aspects to elements in web application like innerspace, outerspace, padding 
//         whether element is centered or not so these all things we can do with the help of box model only.
// What is it
//         I will divide mox model into 5 parts
//         content-every elements has to hold something which is content.
//         padding-padding is space around the content 
//         border-outer line of element which will highlight that element.
//         margin-creating space around elements is margin
// How to use
//         by doing inspect on browser in styles section we can see a box model of the element. by this we can visualize
//         that how much margin, padding, border etc is given to that element.


// ------------------Extra qns---------------------------------------------------------------------
// useContext - useContext is basically a system which helps you to pass props from one level to other level without
//              using prop drilling. it return 2 values provider and consumer. provider tells react that we want
//              to start the context from this particular field and with the help of consumer we can make use of
//              value in child components. 

// what is Rest Api?
// REST API (Representational State Transfer Application Programming Interface) is a way for different
// software systems to communicate over the internet using standard http web protocols.
// like GET, POST, PUT, and DELETE to perform operations. Think of it like a waiter in a restaurant who takes
// REST API Architecture
// Client-Server Architecture:
// Client: The client is the application or system that makes requests to the server. For example, a mobile app or a web browser. // Server: The server processes the requests and sends back the appropriate responses. For
// Stateless: Each request from the clientto the server must contain all the information needed to understand and process the request. The server does not store any client context between requests. This makes each request independent.
// Cacheable: cacheable, the client can store it and reuse it for Responses from the server can be marked as cacheable or non-cacheable. If a response subsequent requests, reducing the load on the server and improving performance.
// Uniform Interface:REST APIs use a uniform interface, which simplifies and decouples the architecture. This uniform interface is defined by four constraints: Resource Identification: Resources are identified in requests using URIs (Uniform Resource Identifiers).
// Layered System:The architecture can be composed of multiple layers, with each layer having a specific function. For example, a load balancer layer, a security layer, and data storage layer. This layering helps improve scalability and manageability.


//why react compare to other framework like angular- 
// well there might be differernt reasons for every developer for choosing react or angular. but anyhow react is more popülar compared angular. there are several reasons behind it.
// performance: react uses virtual dom concept due to which only required UI gets re-rendered. due to whichis faster.
// reusable component: there is concept called reusable component due to which we write less code.
// active community:react has very larger and active community. if stuck at any place then there are ready made docs available and continues support.


//---------------------- What is transform and translate ?---------------------
// Certainly. In CSS, the transform property is a powerful tool used to visually manipulate elements without affecting the document flow. It supports multiple transformation functions such as translate, rotate, scale, and skew.
// ex - transform: translate(50px, 100px); moves right and down
// transform: translate(-50px, -50px); moves up and left


//------------------------ What is event delegation ?----------------------
// Event delegation is a design pattern in JavaScript that allows us to handle events efficiently, especially when dealing with dynamic or large sets of elements.
// Instead of attaching individual event listeners to each child element, we attach a single listener to a common parent. This listener takes advantage of event bubbling — where events propagate up the DOM tree — to catch events from its child elements.
// For example, if I have a <ul> with many <li> items, rather than adding a click listener to each <li>, I can add one listener to the <ul> and check event.target to determine which <li> was clicked.
// This approach has several benefits:
// - Performance: Fewer listeners mean less memory usage and faster execution.
// - Dynamic elements: It works even if child elements are added or removed later.
// - Cleaner code: Centralized logic is easier to maintain.
// I often use event delegation when building components like dropdowns, lists, or tables where rows or items are dynamically generated. It’s a great way to write scalable and maintainable front-end code.


//----------------- What is shallow copy and deep copy ? explain with example.------------------ 
// "In JavaScript, a shallow copy duplicates only the top-level properties of an object. If the object contains nested objects or arrays, the references to those nested structures are preserved. A deep copy, on the other hand, recursively copies all levels of the object, ensuring complete separation from the original.
// shallow copy
// const original = {
//   name: "Pavan",
//   address: { city: "Bengaluru" }
// };

// const shallowCopy = { ...original };
// shallowCopy.name = "Raj";
// shallowCopy.address.city = "Mumbai";
// console.log(original.address.city); // "Mumbai" — affected!

// deep copy
// const original = {
//   name: "Pavan",
//   address: { city: "Bengaluru" }
// };
// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.address.city = "Mumbai";
// console.log(original.address.city); // "Bengaluru" — safe!



// Diff between useeffect and uselayouteffect 
// "Both useEffect and useLayoutEffect are React hooks used for side effects, but they differ in timing. useEffect runs after the DOM updates and the browser has painted the screen. It's great for tasks like data fetching, subscriptions, or logging. useLayoutEffect, on the other hand, runs synchronously after the DOM updates but before the browser paints. This makes it ideal for layout reads and writes—like measuring DOM elements or applying styles—where timing is critical to avoid flickering or layout shifts.


// What are controlled and uncontrolled components ?
// "In React, a controlled component is one where the form data is handled by React state. An uncontrolled component, on the other hand, relies on the DOM to manage its own state using refs. I typically use controlled components when I need to validate, manipulate, or track user input in real time. Uncontrolled components are useful for quick forms or when integrating with non-React libraries."


// When should you use context api over redux ?
// You should use the Context API over Redux when your application's state management needs are relatively simple and localized. Context is ideal for scenarios like theme toggling, user authentication status, or language preferences — where the state doesn't change frequently and is needed across multiple components. Since Context is built into React, it requires no external setup and is great for avoiding prop drilling. However, it’s not optimized for frequent updates or complex state logic, as every change re-renders all consuming components, which can hurt performance. Redux, on the other hand, is better suited for large-scale applications with deeply nested components, multiple interdependent states, and asynchronous flows. It offers powerful features like middleware, time-travel debugging, and centralized state management. So, if your app grows in complexity or you need fine-grained control over state transitions, Redux becomes the more scalable and maintainable choice. In short, start with Context for lightweight needs, and switch to Redux when your state logic demands more structure and tooling.


// explain client server architecture in react application ?
// Client-server architecture in a React application refers to the separation of concerns between the frontend (client) and the backend (server). In this architecture, the React application functions as the client, which runs in the browser and is responsible for rendering the user interface, handling user interactions, and making asynchronous requests to the server, typically via HTTP APIs."
// "The server, on the other hand, is responsible for business logic, database operations, authentication, and serving the necessary data to the client. It could be built using technologies such as Node.js with Express, Django, or any other backend framework. The communication between client and server usually happens via REST APIs or GraphQL."
// "When a user interacts with the React UI—for example, submitting a form or navigating through the app—the client makes a request to the server. The server processes this request, interacts with the database if needed, and returns a response, usually in JSON format. The React application then updates the UI accordingly based on that data."
// "This separation allows for scalability, maintainability, and a clear division of responsibilities between frontend and backend teams. It also supports modern development practices like microservices and serverless architecture, especially when using React with cloud services or APIs.


// What is code splitting, and how would you do it in React?
// Code splitting is a technique used to break your JavaScript bundle into smaller chunks, so that the browser only loads the code it needs at that moment — instead of loading everything upfront.
// In React, we achieve code splitting using React.lazy() and dynamic import(), often together with <Suspense>
// import React, { Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Lazy loaded components
// const Home = React.lazy(() => import('./Home'));
// const About = React.lazy(() => import('./About'));
// function App() {
//   return (
//     <BrowserRouter>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }


// How do you optimize performance in a large React application?
// We can optimize performance in a large React app by using techniques like code splitting, memoization (React.memo, useMemo, useCallback), lazy loading, virtualization for large lists, avoiding unnecessary re-renders, and optimizing assets and bundle size.

// Explain react fibre and reconciliation 
// React Fiber is the internal engine that helps React break rendering work into small units and prioritize important updates. like typing > background updates.
// Reconciliation is the process of comparing the old and new virtual DOM trees to determine what changes in the real DOM.
// Together, they make UI updates faster, interruptible, and more efficient.


// Difference between local state and global state
// Local state is data managed within a single component using useState, while global state is shared data across multiple components, usually managed with Context API or a state management library like Redux.



// What are service workers and how do they relate to react apps (PWA) ?
// A Service Worker is a background script that enables features like offline access, caching, and background sync by intercepting network requests.
// In React, especially when building a PWA (Progressive Web App), the service worker allows the app to work offline and load faster by caching assets and API responses.
// Tools like Create React App automatically provide service worker setup for turning your React app into a PWA.


What is redux ?
Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store where the entire application's state is kept, and it enforces a predictable way to update that state using actions and reducers.
Store: Holds the application state.
Actions: Plain objects describing what happened (e.g., { type: 'ADD_TO_CART', payload: product )).
Reducers: Pure functions that take current state and action, and return new state.

redux-toolkit
redux-toolkit is build on top of the redux, to manage the redux states and async operations in easy and systematic format. and also in redux toolkit it provides multiple features such as there it combines actions and reducer so here we do not need to maintain separate files for state, action and reducer. Also it provides feature called configure store which helps to install redux dev tool extension for time travel debugging and also it provides thunk middleware for processing async operations called createAsyncThunk. There is useDispatch hook for dispatching actions from store and useSelector hook for reading state values



What is difference between setTimeOut and setInterval ?
in setTimeout function gets executed only once after mentioned time and in setInterval function gets executed repeatedly after mentioned time.

What is strict mode in react application ?
In React, StrictMode is a special wrapper component that helps you identify potential problems in your application during development.
It highlights depreciated lifecycle methods
detects if any unexpected side effects are there, by double invoking certain function such as useeffect hook.
It warns if using legacy APIS
This does not have any impact on production level


What is fragment tag in react ?
A fragment is a special component in react which lets you to group multiple elements without adding extra node to the dom. in react we should return a single parent element so people usually wrap it inside div which creates an extra node in dom and that may break layouts like css grid or flexbox. CSS

.grid {
display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;


Without fragment -function Items() {
return (
<div> <div>Item 1</div>
::
<div>Item 2</div>
</div>
); }
function App() {
return (
<div className="grid"> ); <Items /> <Items />
</div>

With fragment
import React, {Fragment) from 'react';
function Items() {
return (
<Fragment>
<div>Item 1</div>
<div>Item 2</div>
**
** ** **
</Fragment>
);
}
** **
**
function App() {
return (
<div className="grid">
<Items />
<Items />
</div>
);
}


// Implement your own version of Array.prototype.map()
// const numbers = [1, 2, 3];
// const doubled = numbers.myMap(num => num * 2);
// console.log(doubled); // [2, 4, 6]

// Array.prototype.myMap = function(callback) {
//   // 'this' is the array that calls myMap
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     // make sure index exists (for sparse arrays)
//     if (i in this) {
//       const newValue = callback(this[i], i, this);
//       result.push(newValue);
//     }
//   }

//   return result;
// };


What is diff between async and differ in js?
async script file gets downloading parallely during html parsing and executes as downloaded due to which html parsing stops till it completes.
differ script file gets downloading parallely during html parsing and executes after the parsing of html document.
eg normal react application developed is by default differ, because react needs to first parse html, before mounting app to the root

what is difference between link and navlink?
both link and navlink are used for navigation purpose for routes. but navlink provides some enhanced features like we can check the active link and apply some styling on it and we can do it using ternary operator


// call a rest api using fetch or axios handle loading, errors and display data.
// import React,{useEffect, useState} from 'react' 
// import axios from 'axios'

// export default function FetchApi() {

//     const  [data, setData] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

    // using fetch
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //         if(!res.ok){
    //             throw new Error("Network response was not ok")
    //         }
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         setData(data)
    //         setLoading(false)})
    //     .catch((err)=>{
    //         console.error(err)
    //         setError(err)
    //         setLoading(false)    
    //     })
    // },[])

    // using axios
//     useEffect(()=>{
//         const fetchData=async()=>{
//             try{    
//             const response=await axios.get("https://jsonplaceholder.typicode.com/user")
//             setData(response.data)
//             setLoading(false)
//             }catch(err){
//                 console.error("error messa",err.message)
//                 setError(err)
//                 setLoading(false)
//             }
//         }

//         fetchData()
//     },[])

//     console.log(data)
//   return (
//     <div>
//       <h2>User Data</h2>
//       {loading && <h3>...Loading</h3>}
//       {error && <h3>Error occured: {error.message}</h3>}
//       {
//         data.map((user,idx)=>(
//             <p key={idx}>{user.company.name} | {user.email}</p>
//         ))
//       }

//     </div>
//   )
// }
