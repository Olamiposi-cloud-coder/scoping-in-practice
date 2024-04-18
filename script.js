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
