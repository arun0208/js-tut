// let blockList = [
//     {
//         name : "Rahul",
//         reason : "Abusive",
//         contact : 12345
//     },
//     {
//         name : "Shreya",
//         reason : "Dumb",
//         contact : 99999
//     }
// ]

// console.log(blockList[0].name); //output -> Rahul




// let flight = {
//     name : "Air-India",
//     num : 121,
//     bookings : [],
//     bookFlight : function(name,age){
//         console.log(`${name} booked ${this.name} flight with ID ${this.num}`);
//         this.bookings.push({name : `${name}`,age : `${age}`, flight : `${this.name}`})
//     }
// }

// flight.bookFlight("Arun",18);
// console.log(flight.bookings);

//output ->
// Arun booked Air-India flight with ID 121
// [ { name: 'Arun', age: '18', flight: 'Air-India' } ]




// let childPlane = {
//     name : "Indigo",
//     num : 134,
//     bookings : [],
// }

// let reservation = flight.bookFlight;
// reservation("Sneha",16) //Error -> TypeError: Cannot read properties of undefined (reading 'push') (because it is unable to read this method)

// reservation.call(childPlane,"Sneha",16); //output -> Sneha booked Indigo flight with ID 134

// console.log(flight.bookings);



//difference between call and apply method is that in call we directly pass the arguments but in apply we have to pass as an array
// reservation.apply(childPlane,["Pihu",6]);
// console.log(childPlane.bookings);



//bind method

function greet(){
    console.log(`Welcome ${this.name} to the coders community`);
}

greet();//output -> Welcome undefined to the coders community

let person = {
    name : "Arun"
}

let greeting = greet.bind(person);

greeting();// output -> Welcome Arun to the coders community
