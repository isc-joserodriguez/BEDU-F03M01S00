//Reto 01

let person1 = 'John Doe', person2 = 'Jane Doe';

console.log(`Person 1: ${person1} Person 2: ${person2}`);

[person1, person2] = [person2, person1];

console.log(`Person 1: ${person1} Person 2: ${person2}`);


//invertir index 0 y 1
const colors = ['Red', 'Blue', 'Yellow'];

console.log(`Color 1: ${colors[0]} Color 2: ${colors[1]} Color 3: ${colors[2]}`);

[colors[0], colors[2]] = [colors[2], colors[0]];

console.log(`Color 1: ${colors[0]} Color 2: ${colors[1]} Color 3: ${colors[2]}`);
