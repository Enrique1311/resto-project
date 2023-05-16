// Nabvar **************************************************
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const mobileLinks = document.querySelector(".mobile-navbar-links");
// const closeMenuIcon = document.querySelector(".close-menu-icon");

hamburguerMenu.addEventListener("click", toggleMenu);
// closeMenuIcon.addEventListener("click", toggleMenu);
mobileLinks.addEventListener("click", toggleMenu);

function toggleMenu() {
	mobileLinks.classList.toggle("opened-menu");
}

// Food menu *************************************************
const $template = document.getElementById("menu-template").content;
const $title = document.querySelector(".menu-section-title");
const $menu = document.querySelector(".menu");
const $fragment = document.createDocumentFragment();

const getMenu = async () => {
	try {
		let res = await fetch("../assets/menu.json");
		let data = await res.json();

		if (!res.ok) throw { statusText: res.statusText };

		console.log(data);
		console.log(data.beers);

		data.beers.forEach((el) => {
			el.forEach((el) => {
				$template.querySelector(".name").textContent = el.name;
				$template.querySelector(".description").textContent = el.description;
				$template.querySelector(".price").textContent = el.price;

				let $clone = document.importNode($template, true);
				$fragment.appendChild($clone);
			});
		});

		$menu.querySelector("article").appendChild($fragment);
	} catch (err) {
		let message = err.statusText || "Not Found";
		$title.insertAdjacentHTML("afterend", `<p><b>Error: ${message}</b></p>`);
	}
};

document.addEventListener("DOMContentLoaded", getMenu);
