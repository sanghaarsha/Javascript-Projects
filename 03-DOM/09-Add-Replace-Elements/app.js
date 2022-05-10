const result = document.getElementById("result");

// ? Using element.appendChild()
// STEPS:
// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
const newElement = document.createElement("div");
const text = document.createTextNode("dynamically created div");
newElement.appendChild(text);
document.body.appendChild(newElement);
// Lets do it again
// create new heading element
const heading = document.createElement("h2");
// create a text node
const message = document.createTextNode("NOTE: Dynamically added text!");
// add class to heading element
heading.classList.add("blue");
// append text-node to heading element
heading.appendChild(message);
// append heading element to result
result.appendChild(heading);

// ? Using : insertBefore()
// STEPS:
// createElement('element')
// createTextNode('text content')
// insertBefore("element","location");
const newDiv = document.createElement("div");
const newText = document.createTextNode("Inserted Using Insert Before");
newDiv.classList.add("green");
newDiv.appendChild(newText);
document.body.insertBefore(newDiv, result); // inserts before result element

// ? replaceChild("new", "old")
// Lets create a element (just for practice)
const abcElement = document.createElement("h3");
const abcText = document.createTextNode("Abc Element, created dynamically");
abcElement.appendChild(abcText);
document.body.appendChild(abcElement);
// creating a element which will replace previous
const replacer = document.createElement("h5");
const replacerText = document.createTextNode(
    "hello i just replaced abc element"
);
replacer.classList.add("dark");
replacer.appendChild(replacerText);
// applying replace method
document.body.replaceChild(replacer, abcElement);
