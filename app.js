//Reto 01

let person1 = 'John Doe', person2 = 'Jane Doe';

//console.log(`Person 1: ${person1} Person 2: ${person2}`);

[person1, person2] = [person2, person1];

//console.log(`Person 1: ${person1} Person 2: ${person2}`);


//invertir index 0 y 1
const colors = ['Red', 'Blue', 'Yellow'];

//console.log(`Color 1: ${colors[0]} Color 2: ${colors[1]} Color 3: ${colors[2]}`);

[colors[0], colors[2]] = [colors[2], colors[0]];

//console.log(`Color 1: ${colors[0]} Color 2: ${colors[1]} Color 3: ${colors[2]}`);


//Reto 02
const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
        web: {
            blog: 'https://johndoe.com'
        },
        social: {
            facebook: 'https://facebook.com/john.doe',
            instagram: 'https://instagram.com/john.doe'
        }
    }
};

//Extraer las URLs de facebook e instagram y renombrar las variables por fb e ig respectivamente

let { facebook: fb, instagram: ig } = person.links.social
/* console.log(`
Facebook: ${fb}
Instagram: ${ig}
`); */

//Reto 03

const createPhoneNumber = nums =>
    `(${nums.splice(0, 3).join('')}) ${nums.splice(0, 3).join('')}-${nums.splice(0, 4).join('')}`;

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"