// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["Rauf", "Anmol", "Hasib"];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear friend,\n` +guest_list[i] + `\nYou are invited to a dinner tommorow. \nThank you`)
// };
// question 15
var absentGuest = "Anmol";
var newGuest = "Bisma";
guest_list[1] = newGuest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear friend,\n" + guest_list[i] + "\nYou are invited to a dinner tommorow. \nThank you");
}
;
console.log(absentGuest, "is not coming to the party.");
// question 16
console.log("Good news, We found a bigger dinner table so we invite 3 more guests.");
guest_list.unshift("Aniya");
guest_list.splice(2, 0, "mantasha");
guest_list.push("Zainab");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear friend,\n" + guest_list[i] + "\nIt is our pleasure to invite you to dinner. \nThank you");
}
;
// question 17
console.log("Sorry my can't arrange a bigger dinner table so we invited only two guests.");
while (guest_list.length > 2) {
    var removeguest = guest_list.pop();
    console.log(removeguest, "Sorry you are not invited to the dinner.");
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear friend,\n" + guest_list[i] + "\nYou are still invited to dinner. \nThank you");
}
;
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest_list.splice(0, 2);
console.log(guest_list);
