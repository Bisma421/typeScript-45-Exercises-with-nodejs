// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings
 console.log("Equality:", ("Bisma gul" as string ) === "Bisma gul");

 console.log("Inquality:", ("Bisma gul" as string ) !== "Anmol");

//  Tests using the lower case function

console.log("lowerCase:", ("BISMA").toLowerCase() === ("bisma")) 

// Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, and less than or equal to

console.log("Equality:", 500 === 500 );

console.log("Inequality:", (100 as number) != 10);

console.log("Greater than:", 1000 > 100 );

console.log("Less than:", 100 < 1000 );

console.log("Greater than and Equals to:", 1000 >= 1000 );

console.log("Less than and Equals to:", 999 <= 1000 );

// Tests using "and" and "or" operator

console.log("And operator:", true && true );

console.log("Or operator:", false || true );

// Test whether an item is in a array

let number: number[] = [10, 20, 30];

if (number.includes(20)) {

    console.log("In a array:", true);

}

// Test whether an item is not in a array

let stationary: string[] =["pencil","rubber","sharpner"];

if (!stationary.includes("scale")) {

    console.log("Not in a array:", true);

}





