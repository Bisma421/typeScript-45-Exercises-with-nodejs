// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//  using a different number of arguments each time.

function make_sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

items.forEach(singleItem => console.log(singleItem));

console.log("\nNow Enjoy Sandwich");

}

make_sandwich("Chicken","cheese","Mayo","Egg");
make_sandwich("Bread","Butter");
make_sandwich("Bread","Butter","Chicken","cheese","Mayo","Egg")