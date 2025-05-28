/* Create a name generator by combining list of adjectives and name and another word

Restriction: USE OF ARRAY IS NOT ALLOWED

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garme

Another work:
Bros
Limited
Hub
*/

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;  // This will change the random of random to 0 - max and them add + min to make it min to max. Math.floor is used to convert it into an integer
}

let objs = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let objm = {
    1: "Engine",
    2: "Foods",
    3: "Garme"
}
let obje = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

let random = getRandom(1,3);

console.log(`${objs[random]} ${objm[random]} ${obje[random]}`)