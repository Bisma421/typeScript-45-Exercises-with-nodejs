// Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
// a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
//  message, and a shirt of any size with a different message.

function make_shirt (size:string = "large", printMessage:string = "'I love TypeScript'"){
    console.log(`You selected a ${size} shirt with a message ${printMessage} on it. `)
}

make_shirt();

make_shirt("medium");

make_shirt("small","'It's a Mindset'");