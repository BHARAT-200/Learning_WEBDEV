let boxes = document.getElementsByClassName("box");  // to get all the elements with class name "box" using js

console.log(boxes);

boxes[1].style.backgroundColor = "red";  // setting background color to red of 2nd box in boxes

document.getElementById("redbox").style.backgroundColor = "red";  // setting the background color to red of box with "redbox" id.  Selects only one element by ID (must be unique in the document).

document.querySelector(".box").style.backgroundColor = "green";  // // Changes the background color of the first element with class "box" to green. Selects the first matching element using CSS selectors


document.querySelectorAll(".box").forEach(e =>{  // setting the bg color of each element to green. we must use a loop as we can't directly apply a style on every element.
    e.style.backgroundColor = "green";
})

let e = document.getElementsByTagName("div");  // Selects all <div> elements in the document and returns them as a collection.

console.log(e[4].matches("#redbox"));  // returns true if the given element matches the given css element selector

console.log(e[4].closest("#redbox"));  // returns true the closest element that matches the given css element selector

console.log(document.body.contains(e[1]));  // returns true if element b is inside element a or if both are equal