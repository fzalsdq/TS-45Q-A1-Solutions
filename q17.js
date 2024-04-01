// This is continuation of Q-15
console.log("Dear all, We have found a bigger table and now we'll be inviting more guests");
var guestList5 = ["Imran", "Noman", "Abid"];
guestList5.unshift("Shahzen");
console.log(guestList5);
guestList5.splice(2, 0, "Sehrish");
console.log(guestList5);
guestList5.push("Rizwan");
console.log(guestList5);
console.log("Mrs." + " " + guestList5[0] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList5[1] + " " + "You are invited for dinner");
console.log("Miss" + " " + guestList5[2] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList5[3] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList5[4] + " " + "You are invited for dinner");
console.log("Mr." + " " + guestList5[5] + " " + "You are invited for dinner");
// New Program starts here
console.log(guestList5); // Current List
console.log("We can now invite only 2 persons for this dinner");
console.log(guestList5);
console.log("Sorry! Mr." + " " + guestList5[5] + ", " + "We cannot invite you for dinner");
guestList5.pop();
console.log(guestList5);
console.log("Sorry! Mr." + " " + guestList5[4] + ", " + "We cannot invite you for dinner");
guestList5.pop();
console.log(guestList5);
console.log("Sorry! Mr." + " " + guestList5[3] + ", " + "We cannot invite you for dinner");
guestList5.pop();
console.log(guestList5);
console.log("Sorry! Miss" + " " + guestList5[2] + ", " + "We cannot invite you for dinner");
guestList5.pop();
console.log("Mrs." + " " + guestList5[0] + ", " + "You are still on the dinner list");
console.log("Mr." + " " + guestList5[1] + ", " + "You are still on the dinner list");
guestList5.pop();
guestList5.pop();
console.log(guestList5);
