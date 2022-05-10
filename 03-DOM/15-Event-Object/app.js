// Callback functions in event listener can access event object
// It contains info about triggered event
const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.querySelector("#link");
const thisButton = document.querySelector(".thisButton");

// event.currentTarget
heading.addEventListener("click", function (event) {
    event.currentTarget.classList.add("blue");
});

// event.type
btn.addEventListener("click", function (event) {
    console.log(event.type);
});

// preventDefault() - prevent default javascript behaviour
link.addEventListener("click", function (event) {
    event.preventDefault();
});

// this keyword
thisButton.addEventListener("click", function () {
    console.log(this);
    this.classList.add("blue"); // will not work with arrow callback functions
});

