// dynamically added elements need event bubbling for then to
// be allowed to manipulated using javascript
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

function sayHello() {
    console.log("Hello, world!");
}

btn.addEventListener("click", function () {
    const element = document.createElement("h1");
    element.classList.add("heading");
    element.textContent = `I am dynamically added heading`;
    container.appendChild(element);
});

// heading.addEventListener("click", sayHello); // null, because there exist no heading by default as we are creating it dynamically

// ? so lets target parent element
container.addEventListener("click", function (e) {
    if (e.target.classList.contains("heading")) {
        sayHello();
    }
});
// now we can access heading
// how it happens
// 1. Button is clicked to generate heading
// 2. heading is clicked, heading = target
// 3. event bubbles up to parent container
// 4. event is captures and event listener handles it accordingly
