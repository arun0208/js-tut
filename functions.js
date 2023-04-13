// function nameOfFunction(){ //Function Declaration
//     console.log("Hello World");
// }

// nameOfFunction(); //function call output -> Hello World



// function addTwoNumbers(a,b){
//     console.log(a+b);
// }

// addTwoNumbers(4,5);


// let sum = function(a,b){ //function expression and anonymous function
//     console.log(a+b);
// }
// sum(10,20);
//differnce between function expression and function declaration is that we have to decalare function before calling it in function expression


//Fat arrow function is an updated version of function expression 
//fat arrow function example below below
// const sum = (a,b) =>{
//     console.log(a+b);
// }

// sum(4,5);

//function expression and fat arrow function does not support hoisting


// let invitation = function(name = "Provide a name"){
//     console.log(`Hey ${name}, You are invited to the party`);
// }

// invitation(); //output -> undefined (if we didn' mention default case in declaration)
// invitation("Arun") //output -> Hey Arun, You are invited to the party
// invitation();//output -> Hey Provide a name, You are invited to the party


//Higher Order Function (callback)

// function lowerCase(str){
//     return(str.toLowerCase());
// }

// function upperCase(str){
//     return(str.toUpperCase());
// }

// function transform(str,fun){
//     return(fun(str));
// }

// console.log(transform("hello",upperCase())); //Error -> Cannot read properties of undefined (reading 'toUpperCase')

// console.log(transform("hello",upperCase)); //output -> HELLO



// let complement = function(msg){
//     return function(name){
//         return(`${msg} ${name}`);
//     }
// }

// console.log(complement("you are awesome")("arun"));// output -> you are awesome arun


//IIFE (Immediety Invoked Function Expression)

// (function(){
//     console.log("Hello World");
// })() //output -> Hello World
//IIFE is kind of function expression which is used to run a function single time we use paranthesis () to invoke this function



//setTimeOut and setTimeInterval 
//setTimeOut -> run function once after a given interval of time
//setTimeInterval -> run function repeatedly after a given interval of time