let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".closeNav");
let sideBarMenu = document.querySelector(".sideBar");

menuBtn.addEventListener("click", function showMenu() {
    sideBarMenu.style.display = "flex"
});

closeBtn.addEventListener("click", function hideMenu() {
    sideBarMenu.style.display = "none"
})
