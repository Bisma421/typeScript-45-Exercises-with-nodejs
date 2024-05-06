// Name Cases Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

let personName= "Muhammad akber khan"
// toLowerCase
console.log(personName.toLowerCase());
// toUpperCase
console.log(personName.toUpperCase());
// toTitleCase
// console.log(personName.charAt(0).toUpperCase()+personName.slice(1));
console.log(personName.replace(/\b\w/g,c=>c.toUpperCase()));
