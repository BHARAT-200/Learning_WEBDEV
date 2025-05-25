/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+  - - - > -
*  - - -> +
-  - - -> /
/  - - -> **

It performs wrong operations only 10% of the times

*/

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;  // This will change the random of random to 0 - max and them add + min to make it min to max. Math.floor is used to convert it into an integer
}

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function pow(a, b){
    return a ** b;
}

let a = Number(prompt("Enter number a:"));  // Converting this into a Number as prompt takes String as input
let b = Number(prompt("Enter number b:"));


while (true){
    let ch = prompt("Enter a character: ");
    let c = getRandom(1,100);

    if(c <= 10){
        if(ch == 'e'){
            break;
        }
        if(ch == '+'){
            alert("Addition of "+ a + " and " + b + " = " + sub(a,b));
            continue;
        }
        
        if(ch == '-'){
            alert("Subtraction of "+ a + " and " + b + " = " + div(a,b));
            continue;
        }
        
        if(ch == '*'){
            alert("Multiplication of "+ a + " and " + b + " = " + sum(a,b));
            continue;
        }
        
        if(ch == '/'){
            alert("Division of "+ a + " and " + b + " = " + pow(a,b));
            continue;
        }
    }
    
    else{
        if(ch == 'e'){
            break;
        }
        if(ch == '+'){
            alert("Addition of "+ a + " and " + b + " = " + sum(a,b));
            continue;
        }
        
        if(ch == '-'){
            alert("Subtraction of "+ a + " and " + b + " = " + sub(a,b));
            continue;
        }

        if(ch == '*'){
            alert("Multiplication of "+ a + " and " + b + " = " + mul(a,b));
            continue;
        }

        if(ch == '/'){
            alert("Division of "+ a + " and " + b + " = " + div(a,b));
            continue;
        }
    }
}