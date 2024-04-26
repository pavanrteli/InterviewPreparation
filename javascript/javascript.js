// javascript is a high level language which is used for coding purposes. It also supports opps concepts.


// -------------------------------Datatypes-------------------------------------------------
// # datatypes
// Number - ex 1,12,14.5,102.333 etc
// strings - "car" strings are immutable
// boolean - true or false
// undefined - its datatype is number
// null - its datatype is number
// NaN - its datatype is number


// -----------------------------------Differnce b/w properties and functions-----------------------
// # difference between properties and functions
// properties - written as word(simple) eg length in str.length and also properties are mostly already defined
//  in js
// function - it is written with name and circle bracket eg factorial() and that are mostly defined by us


// ------------------------------------------Arrays----------------------------------------------------
// # arrays
//  in arrays we can store any type of data
//  eg - let arr = ["car",1,14,15.8];
//  Pop() - removes last element
//  Push() - adds element at last
//  shift() - removes first element
//  unshift() - adds element to the beginning of the array
//  split() - it can return string as a array
        // let str="there is a car";
        // let arr=str.split(' '); 
        // console.log(arr); // [ 'there', 'is', 'a', 'car' ]
//  join() - it can return array as a string
        // let arr=["there", "is", "a", "car"];
        // let str=arr.join(" ");
        // console.log(str); // there is a car


// ------------------------------------------Objects-----------------------------------------------------
// # objects - an object is an collection of properties and methods. every data here is stored in key and
//             value format. value can be function, Number, string, boolean etc. for defining objects we can
//             use curly brakets.
// let obj={
//     name:"crio.do",
//     age:10,
//     depart:"edtech",
//     hq:"bengaluru",
//     bool:true,
//     arr:[1,2,3]
// }
// console.log(obj.name) // crio.do
// console.log(obj.arr[0]) // 1
// ------------------------------objects destructuring---------------------------------------
// const {name,age,depart,hq}=obj
// console.log("name:",name); // name: crio.do
// console.log("age:",age); // age: 10
// console.log("department:",depart); // department:edtech
// console.log("headquater:",hq); // headquater: bengaluru


// -------------------------------------Arrays destructuring--------------------------------------------
// const arr=[1,2,3,4];
// const [a,b,c,d]=arr;
// console.log(a); // 1 
// console.log(d); // 4


// -----------------------------------------Math function------------------------------------------------
// console.log(Math.floor(1.2345)) // 1
// console.log(Math.ceil(1.2345)) // 2
// console.log(Math.round(1.2345)) // 1
// console.log(Math.round(1.5345)) // 2


// -----------------------------------------Arrow functions-------------------------------------------
// arrow functions are similar to normal functions they are anonymous function because they dont't have name.
// only difference is that we can assign arrow function to variable and with the help of that variable we 
// can access that function.
// let arrowfn=(a,b)=>{u
//         console.log(a+b); // 9 
//         return a+b;
// }
// const add=arrowfn(5,4);
// console.log("addition:",add); // addition: 9
// Note: in arrow function we cannot call it before defining but for normal functions we can call it from anywhere


// --------------------------------------------Callback function-------------------------------------
// callback function - when we pass function as a parameter from one function to other function so that it
//                     can be executed in other function then it is called as callback function
// example -
// function doSomething(callBack){
//         console.log("I am about to do something");
//         callBack()
// } 
// function callBackFunc(){
//         console.log("something did");
// }
// doSomething(callBackFunc) // I am about to do something
                          // something did


// --------------------------------------------Higher order functions------------------------------------
// In javascript higher order functions are those functions which can accept function as a parameter or return
// function. ex- map(), foreach(), reduce(), filter(), find(), sort() etc 
// difference b/w foreach and map - the main difference b/w them is foreach cannot return anything but map 
//                                  return a value.
// slice - it slices a part from array and it does not modifies original array instead it return a new array
// syntax - array.slice(startIndex, endIndex);
        // eg -
        //  let arr = [
        //         "educative",
        //         4,
        //         [1,3],
        //         {type: "animal"}
        //       ];
        //       let slicedValues = arr.slice(1,3);
        //       console.log(arr); // [ 'educative', 4, [ 1, 3 ], { type: 'animal' } ]
        //       console.log(slicedValues); // [ 4, [ 1, 3 ] ]

// splice - it returns the removed elements and also modifies original Array.
// syntax - array.splice(startIndex, deleteCount, item1, item2, ...);
// startIndex (required): The index at which to start modifying the array. If negative, it counts from the end of the array.
// deleteCount (optional): The number of elements to remove from the array. If set to 0, no elements are removed.
// item1, item2, … (optional): Elements to be added to the array at the startIndex. 
//       eg -
//         const numbers = [1, 2, 3, 4, 5];
//         const removedElements = numbers.splice(2, 2);
//         console.log(removedElements); // Output: [3, 4]
//         console.log(numbers); // Output: [1, 2, 5]

// reduce - reduce method is used to calculation of whole array and then return a single value
        // eg - 
        // let arr=[1,2,3,4,5];
        // let newArr=arr.reduce((acc,currVal)=>{
        //         return acc+currVal
        // },0)
        // console.log(newArr); // 15


// ------------------------primitive and non-primitive data types/passByValue&passByReference------------
// primitive - all primitive data types are pass by value ex- Number, string etc
        // ex - 
        // function add(num){
        //         num=10+num;
        //         console.log(num); // 15
        // }
        // let num=5;
        // add(num)
        // console.log(num); //5
// non-primitive - all non-primitive data types are pass by ReferenceError. ex - arrays, objects etc
        // ex-
        // let obj={
        //         name:"lame"
        // }
        // console.log(obj.name); // lame
        // let copy_obj=obj;
        // copy_obj.name="khaby";
        // console.log(copy_obj.name); // khaby
        // console.log(obj.name); // khaby
        // here 3rd o/p was also changed to khaby
// ------------------------------spread operator------------------------------------------------
// to solve above problem we need to use spread operator
// spread operator - it is used to make copy of objects and arrays and assign it to variable
        // ex-
        // let obj={
        //         name:"lame"
        // }
        // console.log(obj.name); // lame
        // let copy_obj={...obj};
        // copy_obj.name="khaby";
        // console.log(copy_obj.name); // khaby
        // console.log(obj.name); // lame 
        // this time it gave lame for 3rd o/p because here we are not changing original obj.


// -----------------------------Global & local scope------------------------------------------------
// global scope - variables declared using global scope are accessible through out the code.
// local scope - there are 2 types
//               1. function scope - var is functional scope
                        // function abc(){
                        //         var a=10;
                        //         console.log(a); // 10
                        // }
                        // console.log(a); // error
                        // abc();
//               2. block scope - let & const are block scope eg for block scope are if block, else block etc
                        // if(true){
                        //         let a=5;
                        //         console.log(a); // 5
                        // }
                        // console.log(a); // error

                        // here we are able to access "a" outside block because here we are using var so here 
                        // a is not safe. so using var is risky for block scope
                        // if(true){
                        //         var a=5;
                        //         console.log(a); // 5
                        // }
                        // console.log(a); // 5


// -------------------------------diff b/w var, let & const-------------------------------------------
// var - 1. var is functional scoped
//       2. re-declaration is possible
//       3. re-assignment is possible
//       4. hoisting is allowed

// let - 1. let is block scoped
//       2. re-declaration not allowed
//       3. re-assignment is possible
//       4. hoisting is not allowed

// cont - 1. var is block scoped
//        2. re-declaration not allowed
//        3. re-assignment not allowed
//        4. hoisting is not allowed


// --------------------------------------------Hoisting-----------------------------------------------
// hoisting is a javascript mechanism where variable and function declarations are moved to the top of their 
// scope even before the code execution
        // eg - 
        // a=10;
        // console.log(a); // 10
        // var a;


// ------------------------------------------Closure-----------------------------------------------------
// closure = function + lexical environment
// Whenever you are returning any inner function from outer function at that time you are not just returning
// inner function but you are returning inner function and also its lexical environment.
// lexical environment - inner function in outer function where outer function is having full access of
//                       inner function
        // eg -
        // let globalVar="global";
        // function grandParent(){
        //         function parent(){
        //                 var a="parent"
        //                 function son(){
        //                         var b="son"
        //                         console.log(b);
        //                         console.log(a);
        //                         console.log(globalVar);
        //                 }
        //                 return son;
        //         } 
        //         return parent;
        // }
        // const result=grandParent();
        // const finalResult=result();
        // finalResult();  // son
                        // parent
                        // global


// --------------------------------diff b/w objects and json--------------------------------------------
// objects - 1. key and value pair need not to be compulsory written in double quotes
//           2. it can contain function as value 
//           3. objects are mostly used in javascript only

// json -  1. key and value pair need to be compulsory written in double quotes
//         2. it cannot contain function as value. it contains just plain Text 
//         3. json are commonly used by web applications for transmitting data between servers


// ------------------------------------Promise------------------------------------------------------
// before the introduction of promise asyn operations were taken care with the help of callback functions
// this used to create nested callback function which was very complex. but with help of promise we maintain 
// a structure and it is easy to implement.
//  promise is nothing but a placeholder for future value and this value may be successfull or unsuccessfull.
//  while implementing promise we need to wait for value therefore we use await keyword and if we are using await
//  then we need to make function async. in promise we need to pass 2 paramenters resolve and reject. there are 3 states 
//  in promise, while fetching any data the state is pending and once we receive data succesfully then its state
//  changes to fullfilled state. and if data received is unsuccessfull then its state is rejected.
        // eg -
        // function fetchData(){
        //         return new Promise((resolve,rejected)=>{
        //                 setTimeout(()=>{
        //                         const data="api data";
        //                         if(true){
        //                                 resolve("successfully resolved");
        //                         } else{
        //                                 rejected("rejected");
        //                         }
        //                 },2000)        
        //         })
        // } 

        // fetchData()
        // .then((data)=>console.log(data))  // successfully resolved
        // .catch((e)=>console.error(e))


// ----------------------------------------------Event loops-----------------------------------------------
// javascript is synchronous and single threaded language. but we can perform async operations in it by using
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