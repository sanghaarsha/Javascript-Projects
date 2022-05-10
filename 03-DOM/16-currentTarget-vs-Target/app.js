const btns = document.querySelectorAll(".btn");

// witout using currentTarget or target
/* btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("green")) {
            btn.classList.remove("green");
            return;
        }
        btn.classList.add("green");
    });
});
*/

// currentTarget : targets element which has event listener attached,
// in this case btn
/* btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget);
        if (e.currentTarget.classList.contains("green")) {
            e.currentTarget.classList.remove("green");
            return;
        }
        e.currentTarget.classList.add("green");
    });
});
*/

// target : can target nested elements within element with event handler attached
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.classList.contains("green")) {
            e.target.classList.remove("green");
            return;
        }
        e.target.classList.add("green");
    });
});
