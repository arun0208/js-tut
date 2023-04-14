// console.log(score); //output -> undefined (it means score is recognised here but it's value is initialised later)
// var score = 100;

// score=100;
// console.log(score); //output -> 100
// var score;

//let and const does not support hoisting

//function decalartions also support hoisting
// score();// output -> 100
// function score(){
//     console.log(100);
// }


//function expression and fat arrow function does not support hoisting

// score(); //Error -> Cannot access 'score' before initialization
// let score = function(){
//     console.log(100);
// }


// score();  //Error -> Cannot access 'score' before initialization
// let score = () => {
//     console.log(100);
// }