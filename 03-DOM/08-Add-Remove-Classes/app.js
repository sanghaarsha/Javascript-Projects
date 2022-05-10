const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

// ? className : check/change/add class-name
const classVal = first.className;
console.log(classVal);
second.classList = "text"; // !NOTE: it replaces class

// ? classList : it does not change previous classes, easier too
third.classList.add("colors");
console.log(third.classList);
third.classList.add("text");
console.log(third.classList);
// adding multiple classes at once
fourth.classList.add("text", "a", "b", "c");
console.log(fourth.classList);
// removing classes
fourth.classList.remove("a");
console.log(fourth.classList);
fourth.classList.remove("b", "c");
console.log(fourth.classList);
// check classes
let res = fourth.classList.contains("text");
console.log(res);
res = fourth.classList.contains("colors");
console.log(res);
// checking multiple classes
res = third.classList.contains("text", "colors");
console.log(res);
