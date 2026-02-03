//   Strings and template Literals 


const firstName = 'Jonas';
const job = 'teacher';
const year = 2026;
const birthYear = 1991;

const jonas = "I'm " + firstName + ', a' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas)

const jonasNew = ` I'm ${firstName}, a ${year - birthYear} year ${job}`

console.log(jonasNew);


