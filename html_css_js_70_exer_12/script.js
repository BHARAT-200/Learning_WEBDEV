let box = document.getElementsByClassName("box");

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;  // This will change the random of random to 0 - max and them add + min to make it min to max. Math.floor is used to convert it into an integer
}

let obj = {
    "1": "red",
    "2": "green",
    "3": "blue",
    "4": "yellow"
}

// Array.from(box).forEach(element => {
//     let random1 = getRandom(1, 4);
//     let random2 = getRandom(1, 4);
//     element.style.backgroundColor = obj[random1];
//     element.style.color = obj[random2];
// });

for(let i=0; i<box.length; i++){
    let random1 = getRandom(1, 4);
    let random2 = getRandom(1, 4);
    box[i].style.backgroundColor = obj[random1];
    box[i].style.color = obj[random2];
}

console.log(box);