const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

function toggleSidebar() {
    sidebar.classList.toggle("show-sidebar");
}

toggleBtn.addEventListener("click", function () {
    toggleSidebar();
});

closeBtn.addEventListener("click", function () {
    toggleSidebar();
});
