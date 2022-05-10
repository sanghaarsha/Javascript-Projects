// getAttribute()
const first = document.querySelector(".first");
const className = first.getAttribute("class");
const idName = first.getAttribute("id");
console.log(className);
console.log(idName);

const link = document.getElementById("link");
const linkTo = link.getAttribute("href");
console.log(linkTo);

// setAttribute()
const lastItem = link.nextElementSibling;
lastItem.setAttribute("class", "last");
lastItem.textContent = "This element has class-name: last, set dynamically.";
