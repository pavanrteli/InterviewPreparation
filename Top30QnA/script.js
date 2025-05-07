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
// Intro line
//         There are 2 types of component controlled and uncontrolled.
// 3 points of comparison
// State Management:
//         Controlled Components: These components maintain their state through properties (props) and update it through 
//         callback functions. The parent component manages the state and passes it down to the controlled component. Any 
//         changes to the state are controlled by the parent, ensuring a single source of truth.
//         Uncontrolled Components: In contrast, uncontrolled components manage their state internally. They directly 
//         interact with the DOM, relying on refs or other mechanisms to access and manipulate the state. This approach 
//         can lead to a more flexible but potentially less predictable state management.
// Data Flow:
//         Controlled Components: Data flows in a unidirectional manner, from the parent component to the controlled child 
//         component. This ensures a clear and predictable flow of data, making it easier to debug and maintain the 
//         application.
//         Uncontrolled Components: Data flow can be more dynamic and bidirectional. Since uncontrolled components manage 
//         their state independently, they might directly interact with the DOM or receive updates from the user, leading 
//         to a less strict data flow.
// Predictability and Debugging:
//         Controlled Components: Due to the centralized control over state, controlled components are generally more 
//         predictable and easier to debug. The parent component is aware of the state changes and can implement consistent 
//         logic throughout the application.
//         Uncontrolled Components: Predicting the state changes in uncontrolled components can be more challenging since 
//         the state is managed internally. Debugging may require inspecting the DOM directly or implementing additional 
//         logging to trace changes.


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

what is Rest Api?
REST API (Representational State Transfer Application Programming Interface) is a way for different
software systems to communicate over the internet using standard http web protocols.
like GET, POST, PUT, and DELETE to perform operations. Think of it like a waiter in a restaurant who takes
// REST API Architecture
// Client-Server Architecture:
// Client: The client is the application or system that makes requests to the server. For example, a mobile app or a web browser. // Server: The server processes the requests and sends back the appropriate responses. For
// Stateless:
// Each request from the client
to the server must contain all the information needed to understand and process the request. The server does not store any client context between requests. This makes each request independent.

// Cacheable: cacheable, the client can store it and reuse it for

// Responses from the server can be marked as cacheable or non-cacheable. If a response subsequent requests, reducing the load on the server and improving performance. // Uniform Interface:

// REST APIs use a uniform interface, which simplifies and decouples the architecture. This uniform interface is defined by four constraints: Resource Identification: Resources are identified in requests using URIs (Uniform Resource Identifiers). For example, https://api.weather.

com/v3/weather/conditions.

509 // Resource Manipulation Through Representations: Clients interact with resources by using representations (e.g., JSON, XML) and standard HTTP methods (GET, POST, PUT, DELETE).

// Self-descriptive Messages: Each message includes enough information to describe how to process the message. For example, HTTP headers

provide metadata about the request or response. // Hypermedia as the Engine of Application State (HATEOAS): Clients interact with the application entirely through hypermedia provided dynamically by application servers. For example, links in the response guide the client on what actions are available next.

510

511

512 513

// Layered System:

// The architecture can be composed of multiple layers, with each layer having a specific function. For example, a load balancer layer, a security layer, and data storage layer. This layering helps improve scalability and manageability.

:

Q Search

Ln 496, Col 45 Spaces:


What is prototype in js?

there

for every developer for choosing react or angular. but anyhow react is more popülar compared react. there are several reasons behind it.

//

performance: react uses virtual dom concept due to which only required UI gets re-rendered. due to which

is faster. //

reusable component: there is concept called reusable component due to which we write less code.

active community:react has very larger and active community. if stuck at any place then there are ready made docs available and continues support.

316 517 ---31. why react compare to other framework like angular- well there might be differernt reasons

518

519

520

521

522

523

524

525

526

// ---- --32. http status codes-

527

// Successful Responses (2xx)

528

// 200 OK: The request was successful.

529

530

// 201 Created: The request was successful and a new resource was created. // 204 No Content: The server successfully processed the request, but there's no content to return.

531

532

// Redirection Messages (3xx) //

533

301 Moved Permanently: The resource has been moved to a new URL permanently. // 302 Found: The resource is temporarily located at a different URL.

534

// 304 Not Modified: The resource has not been modified since the last request.

535

// Client Error Responses (4xx)

536

// 400 Bad Request: The server could not understand the request due to invalid syntax.

537

538

539

rights to the content. // 404 Not Found: The server cannot find the requested resource.

// 401 Unauthorized: Authentication is required and has failed or has not yet been provided. // 403 Forbidden: The client does not have access

540 // Server Error Responses (5xx)

541

542

543

received an invalid response from the upstream server. // 503 Service Unavailable: The server is not ready to handle the request, often due to maintenance or overload.

// 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.

