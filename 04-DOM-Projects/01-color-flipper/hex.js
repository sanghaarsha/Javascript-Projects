const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const hexValue = generateRandomHexValue();
    document.body.style.background = hexValue;
    color.innerText = hexValue;
});

function generateRandomHexValue() {
    let hexValue = "";
    for (let i = 0; i < 6; i++) {
        hexValue += hex[generateRandomNumber()];
    }
    hexValue = "#".concat(hexValue);
    return hexValue;
}

function generateRandomNumber() {
    const randNum = Math.floor(Math.random() * hex.length);
    return randNum;
}
