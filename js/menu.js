const menu = document.querySelector(".nav__menu");
const menuLinks = document.querySelector(".nav__link");
const closeMenu = document.querySelector(".nav__close");

menu.addEventListener("click", () => {
  menuLinks.classList.add("nav__link--show");
});

closeMenu.addEventListener("click", () => {
  menuLinks.classList.remove("nav__link--show");
});
