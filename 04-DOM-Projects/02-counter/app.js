const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// initialize the value
let val = 0;

// update UI acc. to value
function updateUI(val) {
    value.textContent = val;
    if (val < 0) {
        value.style.color = "red";
    } else if (val > 0) {
        value.style.color = "green";
    } else {
        value.style.color = "black";
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("increase")) {
            val++;
            updateUI(val);
        } else if (e.currentTarget.classList.contains("decrease")) {
            val--;
            updateUI(val);
        } else {
            updateUI(0);
        }
    });
});
