// Declaring variables from HTML elements
const menuBtn = document.getElementById("menu-btns");
const mainNavLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

//Navigation Menu Dropdown Toggle Functions
menuBtn.addEventListener("click", () => {
    // Activating the dropdown menu
    mainNavLinks.classList.toggle("open");

    // Switching from menu and close icons accordingly
    const isOpen = mainNavLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

// Navigation Links Untoggle Dropdown Function (subject to change)
mainNavLinks.addEventListener("click", () => {
    mainNavLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});