//String is a data-type in JS 

// let fname = "Arun";
// let lname = "Sharma";

// console.log(fname,lname) //output -> Arun Sharma (with spaces because of console log)

// console.log(fname+lname); //output -> ArunSharma

//new method for string is template literals widely used now

// let fullname = `My full name is ${fname} ${lname}`;
// console.log(fullname);//output -> My full name is Arun Sharma

//String methods

// console.log(fname.toLowerCase()); //output -> arun
// console.log(fname.toUpperCase()); //output -> ARUN

//TRIM Method

// let hobbies = "      coding reading chess  ";
// console.log(hobbies);//output ->       coding reading chess  (with extra spaces)

// console.log(hobbies.trim()); //output -> coding reading chess (without extra spaces)


// let hobbies = "coding reading chess";
// console.log(hobbies.includes("chess")); //output -> true


// let fullname = "ArunSharma";
// console.log(fullname.slice(0,4));//output -> Arun it excludes the last number(0,1,2,3)



// let favColors = "Red Green Blue Pink";
// let answer = favColors.split(" ");
// console.log(answer); //output -> [ 'Red', 'Green', 'Blue', 'Pink' ] string to array conversion


//Strings are immutable in JavaScript

// let name = "Arun";

// name[0] = "B";
// console.log(name); //output ->Arun
