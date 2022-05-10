const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

// initialize the value
let val = 0;

function updateUI(val) {
    value.innerText = val;
    if (val < 0) {
        value.style.color = "red";
    } else if (val > 0) {
        value.style.color = "green";
    } else {
        value.style.color = "black";
    }
}

decrease.addEventListener("click", function () {
    val = val - 1;
    updateUI(val);
});

increase.addEventListener("click", function () {
    val = val + 1;
    updateUI(val);
});

reset.addEventListener("click", function () {
    updateUI(0);
});
