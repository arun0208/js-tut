//Objects in JavaScript

// let car = {
//     color : "Black",
//     model : 2023,
//     company : "Honda"
// }

// console.log(car.color); //output -> Black
// console.log(car[1]);  //output -> undefined
// console.log(car["color"]); //output -> Black


//Modifying the object
// car["color"] = "White";
// car.model = 2024;
// console.log(car.color); //output -> White
// console.log(car.model); //output -> 2024


//Deleting the object property
// delete car.model;
// console.log(car.model); // output -> undefined


//this keyword
// let car = {
//     color : "Black",
//     model : 2023,
//     company : "Honda",
//     getSummary : function(){
//         return `I have a ${this.color} ${this.company} of model ${this.model}`
//     }
// }

// console.log(car.getSummary());