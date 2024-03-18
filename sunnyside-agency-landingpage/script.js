const navMenu = document.querySelector(".nav-container");
const hamburgerIcon = document.querySelector(".hamburger-img");

hamburgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("clicked-hamburger");
});