// Checking User Names
var current_users = ["ahmed", "nida", "yaseen", "sohail", "admin"];
var new_users = ["salman", "javed", "Nida", "imran", "soHAIL"];
var i = 0;
// let j=0;    
for (i = 0; i <= new_users.length - 1; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(" ".concat(new_users[i], " already exists in our database, Please select a different user name."));
    }
    // if (new_users[0]==current_users[i]){
    // console.log(` ${new_users[i]} already exists in our database, Please select a different user name.`);
    else {
        console.log("User name ".concat(new_users[i], " is granted access"));
    }
}
