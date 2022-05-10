// ? Children Elements
const result = document.querySelector("#result");
// childNodes - returns all childNodes including whitespace which is treated as a text node
console.log(result.childNodes);
// children : only returns actual children as node-list
console.log(result.children);
// These will return first or last item from all childNotes including whitespace which is treated as text-node
// firstChild
console.log(result.firstChild);
// lastChild
console.log(result.lastChild);

// ? Parent Element
// Access parent node from chilren node
const htwo = document.querySelector("h2");
console.log(htwo.parentElement); // immediate parent
console.log(htwo.parentElement.parentElement); // parent's parents
// setting style for parent element using child element
const parent = htwo.parentElement;
parent.style.color = "red";

// ? Sibling Elements
// ! (returns whitespace): initially returns whitespace as a sibling
// can be eliminated chaining two nextSibling/previousSibling
// nextSibling
const first = document.querySelector(".first");
const second = first.nextSibling.nextSibling;
second.style.color = "blue";
// previousSibling
const last = document.querySelector(".last");
const prev = last.previousSibling.previousSibling;
prev.style.color = "grey";
// previous sibling of first and next sibling of last is null
console.log(first.previousSibling.previousSibling); // null
console.log(last.nextSibling.nextSibling); // null
