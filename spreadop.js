let arr = [1,2,3,4,5];

let getRef = arr; //this is pass by reference

// console.log(arr); //output -> [ 1, 2, 3, 4, 5 ]
// console.log(getRef);//output -> [ 1, 2, 3, 4, 5 ]

// getRef[0] = 69;

// console.log(arr);//output -> [ 69, 2, 3, 4, 5 ]
// console.log(getRef);//output -> [ 69, 2, 3, 4, 5 ]

//by this method both array refer to the same memory location hence if one will be changed then it will change the other also


let getVal = [...arr];
console.log(getVal); //output -> [ 1, 2, 3, 4, 5 ]

getVal[0] = 69;

console.log(getVal);//output -> [ 69, 2, 3, 4, 5 ]
console.log(arr);//output -> [ 1, 2, 3, 4, 5 ]