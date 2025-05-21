console.log("Conditional")

let a = 5;
let b = 2;

// Basic Arithmetic Operators
console.log("\n Arithmetic Operators \n")
console.log("Addition = " + (a + b));
console.log("Subtraction = " + (a - b));
console.log("Multiplication = " + (a * b));
console.log("Division = " + (a / b));
console.log("Power / Exponent = " + (a ** b));
console.log("Modulus / Remainder = " + (a % b));
console.log("Increment = " + (++a));
console.log("Decrement = " + (--a));

let x;
// Assignment Operators
console.log("\n Assignment Operators \n")
console.log(x = a); //  x = x + a
console.log(x += a); //  x = x + a
console.log(x -= a); //  x = x - a
console.log(x *= a); //  x = x * a
console.log(x /= a); //  x = x / a
console.log(x %= a); //  x = x % a
console.log(x **= a); //  x = x ** a

let t;
// Comparision Operators
console.log("\n Comparison Operators \n")
isEqual = (5 == '5');          // equals to
notEqual = (5 != 3);           // not equals to
isStrictEqual = (5 === 5);     // equal value and type
strictNotEqual = (5 !== '5');  // not equal value or not equal type
greater = (5 > 3);             // greater than
less = (5 < 3);                // less than
greaterEqual = (5 >= 3);       // greater than or equal to
lessEqual = (5 <= 5);          // less than or equal to

// Logical Operators
let Logand = true && false;  // Logical AND
let Logor = true || false;   // Logical OR
let Lognot = !true;   // Logical NOT

// Bitwise Operators
let andBit = 5 & 3;           // Bitwise AND
let orBit = 5 | 3;            // Bitwise OR
let xorBit = 5 ^ 3;           // Bitwise XOR
let leftShift = 5 << 1;       // Left shift
let rightShift = 5 >> 1;      // Right shift
let zeroFillRight = 5 >>> 1;  // Zero-fill right shift

// Terniary Operator (condition ? code : code)

let c = a>b ? (a-b) : (a+b);  
/* 
if(a > b){
    c = a-b;
} 
else{
    c = a+b;
} */

let age = 80;
if (age < 18) {
    console.log("You can't drive");
} 
else if (age >= 18 && age < 80) {
    console.log("You can drive");
} 
else {
    console.log("You are too old to drive");
}
