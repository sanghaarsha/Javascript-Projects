const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get a valid random number
    let randNum = generateRandomNumber();
    // use that random number to get a color from array
    let randColor = colors[randNum];
    // set background
    document.body.style.background = randColor;
    // update text
    color.innerText = randColor;
});

// function to generate a valid random number, within range of colors array
function generateRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
