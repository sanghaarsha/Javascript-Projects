// innerText
const newElement = document.createElement("h2");
newElement.innerText = "Inner Text Added Dynamically";

// prepend : unlike append it adds to start of the selected tag
document.body.prepend(newElement);
