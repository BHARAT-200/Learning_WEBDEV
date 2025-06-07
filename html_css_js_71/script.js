document.designMode = "on"  // Let's you change the content of a website without even changing html

document.querySelector(".container").innerHTML  // Gives the html of an element

document.querySelector(".container").innerText // Gives the visible text inside an element

document.querySelector(".container").outerHTML // Gets the entire HTML of the element including the element itself

document.querySelector(".container").tagName // Gets the tag name(applicable on elements only) of an elemet (div in this case)

document.querySelector(".container").nodeName // Gets the node name(applicable on comment and text nodes too) of an elemet (div in this case)

document.querySelector(".container").textContent  // Gets all the text inside the element, including hidden or extra whitespace

document.querySelector(".container").hidden = true  // Adds hidden attribute to an element

document.querySelector(".container").innerHTML = "hey imma box 2"  // We can also change the inner html of an element

document.querySelector(".container").attributes  // Gives all the attributes of an element

document.querySelector(".container").hasAttribute("style")  // Checks if the given attribute is present in the element

document.querySelector(".container").getAttribute("style")  // Gives what properties are in style

document.querySelector(".container").setAttribute("style", "display: inline;")  // Sets the given properties in style

document.querySelector(".container").removeAttribute("style")  // Removes the given attribute from element

