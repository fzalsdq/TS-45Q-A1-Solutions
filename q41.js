// Magicians
var mNames = ["magician1", "magician2", "magician3"];
var showMag = function show_magicians() {
    console.log(mNames);
};
var showMag2 = function show_magicians() {
    for (var i = 0; i <= 2; i++)
        console.log(mNames[i]);
};
showMag(); // Shows complete Array
showMag2(); // Shows individual array elements
