// function name(parameters) { code }:- defines a function with optional inputs and some code to run. You don't have to mention a return type in JS
function table(num) {
    for(let i = 0;i<=10;i++){
        console.log(num + " * "+ i + " = "+(i*num));
    }
}

function sum2(a, b){
    return a + b;
}

function sum3(a, b, c=3){  // function will proceed with c = 3, if c isn't given in parameters
    return a + b + c;
}

table(5);

let s2 = sum2(5, 10);
let s3 = sum3(5, 10);
let s3b = sum3(5, 10, 10);

console.log("sum2 = " + s2);
console.log("sum3 = " + s3);
console.log("sum3b = " + s3b);


// Arrow Function:- A shorter way to write functions using => syntax
const func1 = (a) => {
    console.log("This is an Arrow function, where a = " + a);
}

func1(55);
