  
//   Mathematical operators 
  
  const now = 2026;
  const ageJonas = now - 1991;
  const ageSarah = now - 2018;

  console.log(ageJonas,ageSarah);

  console.log(ageJonas * 2, ageJonas/10, 2 ** 3);

  const firstName = 'Abhishek';
  const lastName = 'Schmedtmann';

  console.log(firstName + " " + lastName);

//   Assignment operators 

let x = 10 + 5;
x += 10;
console.log(x);


x++;
x--;
x--;
x--;
console.log(x);


// comparison operator
// returns true of false value 
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const age = 19;
const isFullAge = age >=18;
console.log(isFullAge)


console.log(now - 1991 <  now - 2018)


// ii)  Operator precdence 


let number = 100 + 50 * 3;  // As in traditional mathematics, multiplication is done first:
console.log(number);


// When using parentheses, operations inside the parentheses are computed first:

let numbers = (number + 200) * 50;
console.log(numbers)

let percentage = numbers * 40/100;

console.log(percentage);





