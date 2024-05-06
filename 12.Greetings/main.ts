// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Method 1
let names: string[] = [`Anmol,`,`Haseeb,`];
let message1: string[] = ["I am Bisma's sister"];
let message2: string[] = ["I am Bisma's brother"];
console.log(names[0]+" "+message1);
console.log(names[1]+" "+message2);



// method 2
let person: string[] = [`Mamma`,`Papa`];
let message: string[] = [`10 days left in my birthday.`];
for (let i=0; i<person.length; i++){
    console.log(person+" "+message[i]);
}