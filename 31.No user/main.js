// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userName = ["Bisma", "Anmol", "Haseeb", "Admin", "Rauf"];
userName = [];
if (userName.length === 0) {
    console.log("Your array in empty, We need to find some users!");
}
else {
    userName.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report? "));
        }
        else {
            console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
        }
    });
}
