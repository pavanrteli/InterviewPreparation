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
// this keyword refers to current context or current object we can say. also this keyword is used to avoid
// conflicts.
// eg - here we are passing john in greet but I want to print "Hello, I'm Alice" now if we don't use "this" 
// then it will print john but if I use "this" then it point to current object i.e Alice.
// const person = {
//         name: "Alice",
//         greet(name) {
//             console.log(`Hello, I'm ${this.name}.`);
//         },
//     };
//     person.greet("john"); // Logs "Hello, I'm Alice."
    