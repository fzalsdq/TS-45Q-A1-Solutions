let str1='This is true';
let str2="This is True";
console.log(str1==str2);
console.log(str1!=str2);

let city1='LAHORE';
let city2=city1.toLowerCase();
console.log(city1==city2);
console.log(city1!=city2);

let a=3;
let b=2;
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
a=4;
b=3;
console.log(a>=b);
console.log(a<=b);

// AND - OR Logical Operations
console.log(a>b||a==b);
console.log(a>b && a==b);

// Checking for item in an array
let num1=[2,4,6,8,9,10];
console.log(num1.includes(4));  // Checking for element 4 in array
console.log(num1.includes(7));  // Checking for 7 not in array

