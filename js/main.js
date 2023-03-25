const hamburguerMenu = document.querySelector(".hamburguer-menu");
const mobileLinks = document.querySelector(".navbar-links");
const closeMenuIcon = document.querySelector(".close-menu-icon");

hamburguerMenu.addEventListener("click", toggleMenu);
closeMenuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
	mobileLinks.classList.toggle("inactive");
}
