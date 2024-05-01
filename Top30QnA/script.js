// -----------------------------------------What is prototype in js?------------------------------------------
// Need - prototype play a crucial role in implementing prototyple inheritance in js. the need for prototype
//         arises from the desire to create efficient and reusable code. prototype help in conserving memory.
// what is it - in js everything is Object. prototype is also Object. whenever we create any Object along with
//              that object prototype is also associated with it. in this prototype there are several 
//              properties included. and this prototype is connected to other prototype and this is called 
//              prototype chain. when we try to search any property in object then it will try to search in 
//              object. after that it will search in its protoype and then it will search for in protyple 
//              chain. and finally it reaches end where protype object is null and it return undefined. so 
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

// -----------------------------------------This keyword--------------------------------------------
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


// -------------------------------------------What is Hoisting----------------------------------------------
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


// ------------------------What are event loops?------------------------------------------------------
// Need for it - before the introduction of event loops asynchronous operations were handled by using callback
//               functions or nested promises we can say which was complex to understand. but by event loop
//               one structure got generated for handling asynchronous functions which was preety easy.
// what is it - Event loops are a powerful tool that can be used to make programs more efficient and 
//              responsive. They are also a key part of many different programming languages and frameworks.
// how to use - javascript is synchronous and single threaded language. but we can perform async operations in it by using
// browser api such as promise and setTimeout.
// there is a event loop which continously goes on running it never stops. whenever code is
// getting executing executer and global execution context get created in the call stack and this gec will parse the code 
// and register all async functions such as setatimeOut, promise separately and implement all non async 
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


// ------------------------------------What are inline & block elements?----------------------------------
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


// -------------------------------------What is a meta tag in HTML?--------------------------------------
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


// --------------------------------Why use React over Vanilla JS?-----------------------------------------
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


// -----------------------------------------What is Babel? How is it used with React?------------------------
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


// ---------------------------------What is the CSS Box Model?--------------------------------------------
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


// ----------------------------Difference between State and Props--------------------------------------
// Intro line
//         In React, props and state are both plain JavaScript objects. 

// 3 points of comparison
// States are managed within the component and props are passed to the component
// States are used to update component while props are used to communicate between components.
// States are mutable where as props are immutable.


// -----------------------------------What is a state in React?-----------------------------------------------
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


// -------------------------What is type coercion? Explain how 3 + 2 + “7” = 57.--------------------------
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


// -------------------------------What are the different ways to call api in react?--------------------
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


// ----------------------How to set media queries for different devices? (desktop, tablet, mobile)?-----------
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


// ---------------------------Difference between Controlled v/s Uncontrolled component------------------------
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


// -----------------------------------------What are lifecycle methods?-------------------------------------
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


// --------------------------------Why are Hooks used? What are they?------------------------------------------
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


// -------------------What is the difference between virtual DOM and real DOM?--------------------------------
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


// ---------------------------------Difference between useEffect and useState?------------------------------
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