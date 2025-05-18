console.log("JavaScript");

// var is globally scoped, can be updated & re-declared. let is locally scoped, can be updated, but not re-declared. const is locally scoped and can neither be updated nor be re-declared
var a = 5;
let b = 6;
let c = "name";
const a1 = 6;

{
    let b = 100;  // will only change the value of let b inside this block
    // var a = 900;  this will change the value of var a everywhere in our code
    console.log("b in block = " + b);
}
console.log("b not in block = " + b);

a++;  // possible in var or let, but not in const
//  a1++;  not possible, as a1 is const

console.log(a + b);
console.log(typeof(a), typeof(b), typeof(c));

let x = "ABC";
let y = 22;
let z = 3.33;
const p = true;
let q = undefined;
let r = null;  // typeof null is "object" because of a historical bug in the language that was never fixed to maintain backward compatibility

console.log(x, y, z, p, q ,r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q ,typeof r);

let o = {  // object data type
    "name": "Bharat",
    "job code": 5600
}

o.salary = 3000000;  // add key "salary" with value 3000000 to object o
console.log(o);
o.salary = 7000000;  // changing salary value to 7000000
console.log(o);