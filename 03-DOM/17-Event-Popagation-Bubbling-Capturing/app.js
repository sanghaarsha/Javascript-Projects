// USE: to select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first, then bubbles up (default)
// event capturing - fires at the root and fires until reaches the target
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
    console.log("current target", e.currentTarget);
    console.log("target", e.target);

    // checking if its the actual element we need
    if (e.target.classList.contains("link")) {
        console.log("You clicked on the link");
    }
}

// stop events from bubbling, by stopping event propagation
function stopPropagation(e) {
    console.log("you clicked on", e.target);
    e.stopPropagation();
}

// event bubbles all the way to window, in this order by default
list.addEventListener("click", showBubbling);
container.addEventListener("click", showBubbling);
document.addEventListener("click", showBubbling);
window.addEventListener("click", showBubbling);

// prevent bubbling
// container.addEventListener("click",stopPropagation)

// changing event progation behaviour, from window to target
// using capture
// list.addEventListener("click", showBubbling, { capture: true });
// container.addEventListener("click", showBubbling, { capture: true });
// document.addEventListener("click", showBubbling, { capture: true });
// window.addEventListener("click", showBubbling, { capture: true });
