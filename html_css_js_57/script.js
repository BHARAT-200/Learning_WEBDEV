console.log("JS Loops");

// For Loop:- Repeats a block of code a certain number of times
console.log("\nFor Loop: ")
for(let i=0;i<=10;i++){
    console.log(i);
}

// For In Loop:-  Used to iterate over keys and values in an object
let obj = {
    name: "ABC",
    role: "SDE",
    company: "XYZ"
}

console.log("\nFor In Loop: ")
for(const key in obj){
    const element = obj[key];
    console.log(key, element);
}

// For Of Loop:- Used to iterate over values in iterable objects like arrays or strings
console.log("\nFor Of Loop: ")
let s = "ABCDEF"
for(const i of s){
    console.log(i);
}


// While Loop:-  Keeps running while the condition is true
console.log("\nWhile Loop: ")
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

// Do While Loop:-  Runs at least once, then checks the condition
console.log("\nWhile Loop: ")
let j = 19;
do {
    console.log(j);  // j will still print atleast once
} while (j<7);