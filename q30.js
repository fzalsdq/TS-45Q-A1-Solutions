// Hello Admin
var userNames = ["Ahmed", "Saleem", "Nida", "Yaseen", "Sohail", "Admin"];
var i = 0;
for (i = 0; i <= 5; i++) {
    if (userNames[i] == "Admin") {
        console.log("Hello! and Welcome. ".concat(userNames[5], " Would you like to see a status report?"));
    }
    else {
        console.log("Hello! and Welcome. ".concat(userNames[i], ", Thank you for login again"));
    }
}
