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

