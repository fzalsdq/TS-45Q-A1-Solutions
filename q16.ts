// Modified Guests List **** Continued from q15 ****
// guestList2=["Imran", "Khalil", "Abid"];
// console.log("Dear" + " " + guestList2[0] + " " + "You are invited for dinner");

// console.log("Dear" + " " + guestList2[2] + " " + "You are invited for dinner");
// console.log(guestList2[1] + " " + "Will not be able to come");

// guestList3=["Imran", "Noman", "Abid"];
// console.log("Dear" + " " + guestList3[0] + " " + "You are invited for dinner");
// console.log("Mr." +guestList3[1] + " " + "will be able to join the party as well");
// console.log("Dear" + " " + guestList3[2] + " " + "You are invited for dinner");

// New Program starts here
console.log("Dear all, We have found a bigger table and now we'll be inviting more guests");

let guestList4=["Imran", "Noman", "Abid"];
guestList4.unshift("Shahzen");
console.log(guestList4);
guestList4.splice(2,0,"Sehrish");
console.log(guestList4);
guestList4.push("Rizwan");
console.log(guestList4);
console.log("Mrs." + " " + guestList4[0] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList4[1] + " " + "You are invited for dinner");
console.log("Miss" + " " + guestList4[2] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList4[3] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList4[4] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList4[5] + " " + "You are invited for dinner");

