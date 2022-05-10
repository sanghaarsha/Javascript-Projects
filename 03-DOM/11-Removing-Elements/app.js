// remove
const greeter = document.querySelector("#greeter");
greeter.remove();

// removeChild()
const result = document.querySelector("#result");
const heading = result.querySelector("h1");
result.removeChild(heading);
