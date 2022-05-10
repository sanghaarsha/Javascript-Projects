// access text value within element
const special = document.getElementById("special");

// nodeValue : returns node items not the content
console.log(special.nodeValue); // null
// there is a first child 'text' with the value we need, we can access by:
console.log(special.childNodes[0].nodeValue);
// or
console.log(special.firstChild.nodeValue);

// textContent : just returns text content
const text = special.textContent;
console.log(text);
