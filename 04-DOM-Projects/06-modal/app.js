// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const toggleModalBtn = document.querySelector(".modal-btn");
const closeModalBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-overlay");

toggleModalBtn.addEventListener("click", function () {
    modalContent.classList.add("open-modal");
});

closeModalBtn.addEventListener("click", function () {
    modalContent.classList.remove("open-modal");
});
