// Browser stores a webpage as a Document Object Model
// Elements are nodes/objects of DOM, which can be selected,
// and modified using Javascript

// Let's look at examples:
document.body.style.backgroundColor = "grey";
document.body.style.color = "yellow";
document.getElementById("btn").style.color = "red";

// window object
console.log(window.document); // document is itself a property of global window object

// We can assign a node to variable
const headerTwo = document.getElementById("headerTwo");
headerTwo.style.color = "white";

// we can select a single element
const headerThree = document.querySelector("h3");
headerThree.style.color = "orange";
headerThree.style.fontFamily = "Sans-serif";

// we can select multiple elements
let multipleHeaders = document.querySelectorAll("h4");
// ! Note querySelectorAll returns NodeList not objects, so applying styles will not work as above items
// convert nodelist to array
multipleHeaders = Array.from(multipleHeaders);
// apply style to each item using forEach
multipleHeaders.forEach((item) => (item.style.color = "skyblue"));

// Selecting multiple classes using querySelectorAll
let multiClass = document.querySelectorAll(".multi");
multiClass = Array.from(multiClass);
multiClass.forEach((item) => (item.style.fontFamily = "sans-serif"));
