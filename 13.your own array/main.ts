// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// method 1
let vehicals: string[] = [`bike`,`cycle`,`honda`,`bus`,`train`]
console.log(`I would like to own a` + ` ` + vehicals[0]);
console.log(`I would like to own a` + ` ` + vehicals[1]);
console.log(`I would like to own a` + ` ` + vehicals[2]);
console.log(`I would like to own a` + ` ` + vehicals[3]);
console.log(`I would like to own a` + ` ` + vehicals[4]);
vehicals.map((item)=>(
     console.log(`I would like to own a ${item}`)
));


// method 2
let transportation: string[] = [`suzuki`,`airplane`,`ship`,`helecopter`];
for(let i=0; i<transportation.length; i++){
    console.log(`I would like to own a ` + transportation[i]);
}