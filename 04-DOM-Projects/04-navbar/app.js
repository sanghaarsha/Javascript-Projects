const toggleBtn = document.querySelector(".nav-toggle");
const linksMenu = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
    // Manual Way
    // const linksShown = linksMenu.classList.contains("show-links");
    // if (linksShown) {
    //     linksMenu.classList.remove("show-links");
    // } else {
    //     linksMenu.classList.add("show-links");
    // }

    // A simpler way using inbuilt method
    // ? classList.toggle() - toggles class
    linksMenu.classList.toggle("show-links");
});
