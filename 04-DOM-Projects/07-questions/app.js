// traversing the doms
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) =>
//     btn.addEventListener("click", function (e) {
//         e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle(
//             "show-text"
//         );
//     })
// );

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function () {
        // close open questions
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});
