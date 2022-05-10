// ? getting element by id
// getElementById('ID_NAME')
document.getElementById("hello").style.color = "red";
const btn = document.getElementById("btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// ? getting elements by tag name
// document.getElementsByTagName('TAG_NAME')
// returns: node list i.e. HTMLCollectionm
const li = document.getElementsByTagName("li");
// changing s of first list item
li[0].style.color = "blue";
// the big dis-advantage of node-list is we cannot use array methods
// although we can use index and length
// so converting them to array
const betterList = [...li];
console.log("betterList[0] = ", betterList[0]);

// ? getting element by class name
// document.getElementsByClassName('CLASS_NAMEs')
// returns: node-list
const red = document.getElementsByClassName("red");
red[0].style.color = "red";
red[1].style.color = "red";

// ? selecting tags from css
// querySelector : single element, if multiple exists selects first one!
// document.querySelector(('ANY_CSS'));
const second = document.querySelector(".second");
console.log(".second = ", second.innerHTML);
// lets select last child using query selector
const last = document.querySelector("li:last-child");
console.log("last special item: ", last.innerHTML);

// querySelectorAll : multiple elements
// document.querySelectorAll('ANY_CSS');
// can use array methods unlike getElementBy....
const special = document.querySelectorAll(".special");
console.log(".special:");
special.forEach((item) => {
    item.style.color = "blue";
    console.log(item.innerText);
});
