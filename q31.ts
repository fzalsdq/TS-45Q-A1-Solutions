// Add Users
// Taking same array from Hello Admin Program
// userNames=["Ahmed", "Saleem", "Nida", "Yaseen", "Sohail","Admin"];
let userName=[];

let j=0;
for (j=0; j<=userName.length; j++){
    if (userName.length<1){  // Checking for existing users
        console.log("We have no users, We need to find some users");
    }
    else if (userName.length=1){
console.log(`We have currently ${userName.length} user logged in`);
    }
    else if (userName[j]=="Admin"){
        console.log(`Hello! and Welcome. ${userName[5]}, Would you like to see a status report?`);
        }
    
    else if (userName[j]!=="Admin"){
        console.log(`Hello! and Welcome. ${userName[j]}, Thank you for login again`);
    }
    
}
