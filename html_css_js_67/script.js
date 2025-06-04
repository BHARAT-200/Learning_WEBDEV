// JavaScript DOM - Children, Parent & Sibling Nodes

// Select an element (example)
let cont = document.body; // You can select using querySelector, getElementById, etc.

//  CHILDREN

console.log(cont.childNodes);  // Returns NodeList of all child nodes (includes text, comments, etc.)

console.log(cont.children);  // Returns HTMLCollection of child elements (doesn't include text and comments)

console.log(cont.firstElementChild);  // First child which is an element (ignoring text and comments)

cont.childNodes[1].firstElementChild.style.color = "red";  // changes the color of the first element of cont's 2'nd node to red. We can apply other properties too
cont.childNodes[1].firstElementChild.style.backgroundColor = "black";  // changes the color of the first element of cont's 2'nd node to red. We can apply other properties too

console.log(cont.lastElementChild);  // Last child element


//  PARENT

console.log(cont.parentElement);  // Parent element of cont


//  SIBLINGS

console.log(cont.nextElementSibling);  // Next sibling element

console.log(cont.previousElementSibling);  // Previous sibling element

console.log(cont.previousSibling);  // Previous sibling (includes text and comments)


//  BONUS

console.log(cont.firstChild);  // Could be a text node (includes text and comment)

console.log(cont.lastChild);  // Last child node (includes text and comment)
