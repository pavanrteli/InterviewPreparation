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
