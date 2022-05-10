// Element Sibling
// get sibling elements without having to deal with white space
// syntax: element.nextElementSibling / element.prevElementSibling

// nextElementSibling
const first = document.querySelector(".first");
first.nextElementSibling.style.color = "red";

// prevElementSibling
const last = document.querySelector(".last");
last.previousElementSibling.style.color = "green";
