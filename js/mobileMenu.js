
const mobileIcon = document.querySelector(".mobile-menu-icon");
const menu = document.querySelector(".navigation-links");

mobileIcon.addEventListener("click", handleMobileMenu)

function handleMobileMenu() {
    menu.classList.toggle("opened");
}