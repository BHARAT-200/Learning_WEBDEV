let a = "String";  // Strings are immutable. So, we have to create new string to make changes to a string
let b = "JS";
console.log(a[0]);

// Length of String
console.log(a.length);

// Split string into array
let arr = a.split(" ");  // Splits the string into array using space as separator
console.log(arr);

// String concat
console.log(a + " " + b);
let c = a.concat(" ",b, " concat");
console.log(c);
console.log(`This is an alternate method to use variables in console.log = ${a}  ${b}`)

// Upper and Lowercase
console.log(a.toUpperCase());
console.log(b.toLowerCase());

// Slicing in Strings
console.log(a.slice(0, 3));

// Replace
a=a.replace("String", "       Strings        ");
console.log(a);

// Includes
console.log(a.includes("Str"));  // Checks if substring exists in string

// StartsWith and EndsWith
console.log(a.startsWith("Str"));
console.log(a.endsWith("s"));

// Index of substring
console.log(a.indexOf("in"));  // Returns first index of substring, -1 if not found

// Repeat string
console.log(b.repeat(3));  // Repeats the string 3 times

// Trim
a=a.trim();  // Trims starting and ending spaces from string (not spaces in b/w string)
console.log(a);
