// STEPS:
// select element
// add event listener to the element
// specify the event, and what do when that event happens

// ? Mouse Events
// Click Event
let clickCount = 0;
const btn = document.querySelector(".btn");
const displayCount = document.querySelector("#displayCount");
btn.addEventListener("click", () => {
    clickCount++;
    displayCount.innerText = clickCount;
});
// Add remove class on click
const specialDiv = document.querySelector("#specialDiv");
specialDiv.addEventListener("click", changeColor); // do not invoke function here, just pass the reference
function changeColor() {
    if (specialDiv.classList.contains("blue")) {
        specialDiv.classList.remove("blue");
        return;
    }
    specialDiv.classList.add("blue");
}
// Other Mouse Events
const heading = document.querySelector("h3");
const secondBtn = document.querySelector(".second");
// mousedown - button is pressed
secondBtn.addEventListener("mousedown", () => {
    console.log("down");
});
// mouseup - button is released
secondBtn.addEventListener("mouseup", () => {
    console.log("up");
});
// mouseenter - moved onto an element
secondBtn.addEventListener("mouseenter", () => {
    console.log("enter");
});
// mouseleave - moved out of an element
secondBtn.addEventListener("mouseleave", () => {
    console.log("leave");
});

// ? Key Events
const textInput = document.querySelector("#name");
// keypress -> whole process of involving key press
// textInput.addEventListener("keypress", () => {
//     console.log("You pressed a key");
// });
// keydown -> when a key is pressed
// textInput.addEventListener("keydown", () => {
//     console.log("Key Down");
// });
// keyup -> when a pressed key is released
// ? Useful to get latest value of input just after a key is released
textInput.addEventListener("keyup", () => {
    const latestValue = textInput.value;
    console.log(latestValue);
});
