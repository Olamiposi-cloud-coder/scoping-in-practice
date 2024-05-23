'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear <= 1981 || birthYear >= 1996) {
      var millenial = true;
      const firstName = 'Cloud';
      const str = `Oh and you're a Millenial, ${firstName}`;
      console.log(str);
    }

    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = 'Idris';
calcAge(2000);

// Hoisting with Variabls

console.log(me);
// console.log(year);
// console.log(job);

var me = 'Cloud';
let year = 2000;
const job = 'Web Developer';

// Hoisting with Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

const addArrow = (a, b) => {
  return a + b;
};

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// the this keyword

const idris = {
  firstName: 'Idris',
  lastName: 'Musa',
  yearOfBirth: 2000,
  calcAge: function () {
    console.log(2024 - this.yearOfBirth);

    const greet = () => {
      console.log(`Hey ${this.firstName}`);
    };
    greet();
  },
};

idris.calcAge();

const sultan = {
  yearOfBirth: 1999,
};

function main(input) {
  const square = function (x) {
    const multiplication = x * x;
    return multiplication;
  };

  console.log(square(input));
}

main(5);

const factorial = function (num) {
  return num;
};

console.log(factorial(5));

let firstAge = 30;
let oldAge = firstAge;
firstAge = 20;
console.log(oldAge);
console.log(firstAge);

const little = {
  name: 'Cloud',
  age: 30,
};

const friend = little;
friend.age = 31;
friend.name = 'Musa';

console.log(little.name);
const newFriend = Object.assign(little, friend);

console.log(little);
console.log(friend);
console.log(newFriend);
