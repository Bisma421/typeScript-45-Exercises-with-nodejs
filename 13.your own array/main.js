// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// mothod 1
var vehicals = ["bike", "cycle", "honda", "bus", "train"];
console.log("I would like to own a" + " " + vehicals[0]);
console.log("I would like to own a" + " " + vehicals[1]);
console.log("I would like to own a" + " " + vehicals[2]);
console.log("I would like to own a" + " " + vehicals[3]);
console.log("I would like to own a" + " " + vehicals[4]);
vehicals.map(function (item) { return (console.log("I would like to own a ".concat(item))); });
// mothod 2
var transportation = ["suzuki", "airplane", "ship", "helecopter"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a " + transportation[i]);
}
